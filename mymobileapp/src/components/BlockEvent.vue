<style lang="scss">
.progress-event {
  .item-title{
    font-size: 20px;
  }
}

.progressbar-content{
  padding: 0;
}

.progressbar{
  height: 4px !important;
  border-radius: 0px !important;

  &.color-orange{
    background: -webkitlinear-gradient(to right, rgba(232, 140, 58, 0.15), rgba(232, 140, 58, 0.35));
    background: linear-gradient(to right, rgba(232, 140, 58, 0.15), rgba(232, 140, 58, 0.35));

    span{
      background: -webkitlinear-gradient(to right, #E83A3A , #FFC14C);
      background: linear-gradient(to right, #E83A3A , #FFC14C);
    }
  }

  &.color-blue{
    background: -webkitlinear-gradient(to right, rgba(58, 216, 232, 0.15), rgba(58, 178, 232, 0.35));
    background: linear-gradient(to right, rgba(58, 216, 232, 0.15), rgba(58, 178, 232, 0.35));

    span{
      background: -webkitlinear-gradient(to right, #00DFC3 , #2D9FE6);
      background: linear-gradient(to right, #00DFC3 , #2D9FE6);
    }
  }

  &.color-purple{
    background: -webkitlinear-gradient(to right, rgba(79, 58, 232, 0.15), rgba(79, 58, 232, 0.35));
    background: linear-gradient(to right, rgba(79, 58, 232, 0.15), rgba(79, 58, 232, 0.35));

    span{
      background: -webkitlinear-gradient(to right, #8776FF , #AD30B5);
      background: linear-gradient(to right, #8776FF , #AD30B5);
    }
  }

  &.color-amber{
    background: -webkitlinear-gradient(to right, rgba(255, 215, 30, 0.15), rgba(255, 170, 27, 0.35));
    background: linear-gradient(to right, rgba(255, 215, 30, 0.15), rgba(255, 170, 27, 0.35));

    span{
      background: -webkitlinear-gradient(to right, #FFD71E , #FFAA1A);
      background: linear-gradient(to right, #FFD71E , #FFAA1A);
    }
  }

  &.color-pink{
    background: -webkitlinear-gradient(to right, rgba(255, 132, 158, 0.15), rgba(255, 72, 94, 0.35));
    background: linear-gradient(to right, rgba(255, 132, 158, 0.15), rgba(255, 72, 94, 0.35));

    span{
      background: -webkitlinear-gradient(to right, #FF849E , #FF485E);
      background: linear-gradient(to right, #FF849E , #FF485E);
    }
  }
}

.orange{
  color: #E88C3A;
}

.amber{
  color: #FFAA1A;
}

.blue{
  color: #1595E4;
}

.purple{
  color: #4F3AE8;
}

.pink{
  color: #FF849E;
}

.days-remaining{
  margin-top: -10px;

  .content-block{
    padding: 0;
  }

  .item-inner{
    padding-top: 0;
  }
}

.progress-event{
  width: 90%;
  margin: 0 auto;
  margin-bottom: 20px;
  margin-left: 7%;
  -webkit-box-shadow: 0px 0px 11px 6px rgba(102, 52, 52, 0.04);
  box-shadow: 0px 0px 11px 6px rgba(102, 52, 52, 0.04);
}

</style>

<template>

  <div>
    <f7-list-group class="progress-event" v-for="event, key in events">
      <f7-link @click="checkEvent(key)" :href="linkEvent" :class="event.color">
        <f7-block class="progressbar-content">
            <f7-progressbar :progress="event.progress" :color="event.color" class="progress-value"></f7-progressbar>
        </f7-block>
        <f7-list-item :title="event.name">
          
        </f7-list-item>
        <f7-list-item class="days-remaining">

          <f7-block>
            {{event.daysDiff}} jour<span v-if="event.daysDiff > 1">s</span> restant<span v-if="event.daysDiff > 1">s</span>
          </f7-block>

          <f7-block v-if="event.status">
            Actif
          </f7-block>

          <f7-block v-if="!event.status">
            <f7-button class="btn-send-to-sablier" @click="sendSablier(event, key)">Activer</f7-button>
          </f7-block>

        </f7-list-item>
          
          
      </f7-link>
    </f7-list-group>
  </div>

</template>

<script>
import ApiFire from '../api'
import Vue from 'vue'

var eventsRef = ApiFire.ref('events');
var nodeServer = 'http://orai.kevinmoutier.com/set';

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

      this.$http.get(nodeServer).then((response) => {
        // success 
        console.log(response);
        
      }, (response) => {
        // error 
      });

    }
  },
  mounted(){
      var eventTableau = this.events,
          ref = eventsRef,
          dateToday, dateStartNew, dateStartNewSplit, dateStartNewFinal, 
          dateStart, dateEnd, newProgress, singleEvent, dateTodayTest,
          newTimeDiff, newDaysDiff;

      var checkProgress = function(events, ref){

            // DATE TODAY
            dateStartNew = new Date().toLocaleDateString();
            dateStartNewSplit = dateStartNew.split("/");
            dateStartNewFinal = dateStartNewSplit[2] + "-" + dateStartNewSplit[1] + "-" + dateStartNewSplit[0];


          for (var i = 0; i < events.length; i++) {
            singleEvent = events[i];

            // dateTodayTest = "2017-01-25";
            dateStart = new Date(events[i].startDate).getTime();
            dateEnd = new Date(events[i].endDate).getTime();
            dateToday = new Date().getTime();

            newProgress = ((dateToday - dateStart) / (dateEnd - dateStart)) * 100;

            newTimeDiff = Math.abs(dateEnd - dateToday);
            newDaysDiff = Math.ceil(newTimeDiff / (1000 * 3600 * 24)); 

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

