<style lang="scss">

</style>

<template>

  <div>
    <f7-list-group class="progress-event" v-for="event, key in minuteurs" :class="[event.color, event.nextColor]">
        <f7-link :href="'/detail/'+event.type+'/'+key" :class="event.color">
          <f7-block class="progressbar-content">
              <f7-progressbar :progress="event.progress" :color="event.color" class="progress-value"></f7-progressbar>
          </f7-block>
          <f7-list-item class="event-name" :title="event.name">
          </f7-list-item>
          <f7-list-item class="days-remaining">

            <f7-block>
              {{event.label}}
            </f7-block>

            <f7-block v-if="event.status" class="actif-signal">
              Actif
            </f7-block>

            <f7-block v-if="!event.status" class="inactif-signal">
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

var minuterieRef = ApiFire.ref('minuteurs');
var eventsRef = ApiFire.ref('events');
var nodeServer = 'http://orai.kevinmoutier.com/set';

export default {

  data () {
    return {
      eventdate: '',
      linkEvent: '',
      progress: '',
      nextColor: '',
      dureeMinuterie: ''
    }
  },
  firebase: {
      minuteurs: minuterieRef,
      events: eventsRef
  },
  methods: {
    sendSablier: function(event, key){
      let minutKey = key;
      let progress;
      var minutTableau = this.minuteurs,
      minutRef = minuterieRef, 
      now, newProgress;

      for (var j = 0; j < this.minuteurs.length; j++){
        if (j == key){
          minuterieRef.child(this.minuteurs[key]['.key']).child('status').set(true);
        } else{
          minuterieRef.child(this.minuteurs[j]['.key']).child('status').set(false);
        }
      }

      for (var k = 0; k < this.events.length; k++){
        eventsRef.child(this.events[k]['.key']).child('status').set(false);
      }

      var checkProgress = function(tab, ref, progress, minutKey){
        for (var j = 0; j < tab.length; j++){
          now = new Date().getTime();
          progress = Math.round(((now - tab[j].startDate) / (tab[j].endDate - tab[j].startDate)) * 100);

          ref.child(tab[j]['.key']).child('progress').set(progress);
        }
        
      }

      setInterval(function() {
        checkProgress(minutTableau, minutRef, progress, minutKey);
      }, 500);

    // this.$http.post(nodeServer, {
    //     endDate: this.minuteurs[key].endDate, 
    //     startDate: this.minuteurs[key].startDate, 
    //     color: this.minuteurs[key].color
    //   }).then(response => {

    //     console.log(response);

    // }, response => {
    //   // error callback
    // });

    }
  },
  mounted(){

    var minutTableau = this.minuteurs,
    minutRef = minuterieRef, 
    minutDuree, dureeSplited, 
    dureeMinut = this.dureeMinuterie;

    var checkDuree = function(tab, duree){

      minutDuree = tab.eventDuree;
      dureeSplited = minutDuree.split(':');

      if(dureeSplited[0] == 1){
        duree = dureeSplited[0] + ' heure';
      } 
      else if(dureeSplited[0] > 1) {
        duree = dureeSplited[0] + ' heures';
      }
      else if(dureeSplited[1] >= 1) {
        duree = dureeSplited[1] + ' minutes';
      }
      else if(dureeSplited[0] == 1 && dureeSplited[0] == 1) {
        duree = dureeSplited[0] + ' heure et ' + dureeSplited[1] + ' minute';
      }
      else if(dureeSplited[0] == 1 && dureeSplited[0] > 1) {
        duree = dureeSplited[0] + ' heure et ' + dureeSplited[1] + ' minutes';
      }
      else if(dureeSplited[0] > 1 && dureeSplited[0] == 1) {
        duree = dureeSplited[0] + ' heures et ' + dureeSplited[1] + ' minute';
      }
      else if(dureeSplited[0] >= 1 && dureeSplited[0] >= 1) {
        duree = dureeSplited[0] + ' heures et ' + dureeSplited[1] + ' minutes';
      }
      
      return duree;
    }

    setTimeout(function() {
      for (var l = 0; l < minutTableau.length; l++){
        this.dureeMinuterie = checkDuree(minutTableau[l], dureeMinut);
        minutRef.child(minutTableau[l]['.key']).child('label').set(this.dureeMinuterie);
      }

    }, 1500);    

  }  
}

</script>

