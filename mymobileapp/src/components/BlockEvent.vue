<style lang="scss">

</style>

<template>
  <div>
    <f7-list-group class="progress-event" v-for="event, key in events">
      <f7-link @click="checkEvent(key)" :href="linkEvent">
        <f7-block>
            <f7-progressbar :progress="event.progress" :color="event.color" class="progress-value"></f7-progressbar>
        </f7-block>
        <f7-list-item :title="event.name">
        <f7-block>
          {{event.daysDiff}} jours restants
        </f7-block>
        <f7-block v-if="event.status">
          ACTIF
        </f7-block>
        <f7-button class="btn-send-to-sablier" @click="sendSablier(event, key)">Sablier</f7-button>
        </f7-list-item>
      </f7-link>
    </f7-list-group>
  </div>
</template>

<script>
import ApiFire from '../api'
import Vue from 'vue'

var eventsRef = ApiFire.ref('events');

export default {

  data () {
    return {
      eventdate: '',
      linkEvent: '',
      progress: '',
      date: ''
    }
  },

  firebase: {
      events: eventsRef
  },
  methods: {
    checkEvent: function(key){
      this.linkEvent = "/detail/" + key;
    },
    sendSablier: function(event, key){
      for (var j = 0; j < this.events.length; j++){
        if (j == key){
          eventsRef.child(this.events[key]['.key']).child('status').set(true);
        } else{
          eventsRef.child(this.events[j]['.key']).child('status').set(false);
        }
      }
    }
  },
  mounted(){
      var eventTableau = this.events,
          ref = eventsRef,
          dateToday, dateStartNew, dateStartNewSplit, dateStartNewFinal, 
          dateStart, dateEnd, newProgress, singleEvent, dateTodayTest,
          newTimeDiff, newDaysDiff;

      var checkProgress = function(events, ref){
          dateToday = new Date().getTime();

          for (var i = 0; i < events.length; i++) {
            singleEvent = events[i];

            dateStartNew = new Date().toLocaleDateString();
            dateStartNewSplit = dateStartNew.split("/");
            dateStartNewFinal = dateStartNewSplit[2] + "-" + dateStartNewSplit[1] + "-" + dateStartNewSplit[0];

            dateStart = new Date(dateStartNewFinal).getTime();
            dateEnd = new Date(events[i].endDate).getTime();

            // dateTodayTest = "2017-01-29";
            dateToday = new Date().getTime();

            newProgress = Math.round(((dateToday - dateStart) / (dateEnd - dateStart)) * 100);
            newTimeDiff = Math.abs(dateEnd - dateToday);
            newDaysDiff = Math.ceil(newTimeDiff / (1000 * 3600 * 24)); 

            ref.child(singleEvent['.key']).child('startDate').set(dateStartNewFinal);
            ref.child(singleEvent['.key']).child('progress').set(newProgress);
            ref.child(singleEvent['.key']).child('daysDiff').set(newDaysDiff);

            // Remove event if J-0
            if(dateToday > dateEnd){
              ref.child(singleEvent['.key']).remove();
            }
          };
      }

      var events = setTimeout(function(){
          checkProgress(eventTableau, ref);
      },1500);

  }  
}

</script>

