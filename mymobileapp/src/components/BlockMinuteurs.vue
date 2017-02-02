<style lang="scss">


.label-minut{
  color:  rgba(136, 80, 73, 0.5) !important;  
}


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

            <f7-block class="label-minut">
              {{event.label}}
            </f7-block>

            <f7-block v-if="event.status" class="actif-signal" :class="event.color">
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
import DureeMinut from '../checkDureeMinute'

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
      dureeMinuterie: '',
      reload: false
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

        if(new Date().getTime() > minutTableau[j].endDate){
          this.reload = true;

          this.newEndDateDuree = minutTableau[j].eventDuree;
          this.newEndDateDureeSplited = this.newEndDateDuree.split(":");
          this.newEndDateDureeHours = this.newEndDateDureeSplited[0];
          this.newEndDateDureeMin = this.newEndDateDureeSplited[1];

          this.endDateFinalMinutes = (new Date().getTime() + this.newEndDateDureeMin * 60000);
          this.endDateFinal = (this.endDateFinalMinutes + this.newEndDateDureeHours*60*60*1000);

          minuterieRef.child(minutTableau[j]['.key']).child('endDate').set(this.endDateFinal);
          minuterieRef.child(minutTableau[j]['.key']).child('startDate').set(new Date().getTime());

          this.$http.post(nodeServer, {
            endDate: this.minuteurs[key].endDate, 
            startDate: this.minuteurs[key].startDate, 
            color: this.minuteurs[key].color
          }).then(response => {

            // console.log(response);

          }, response => {
            // error callback
          });
        }
      }

      var checkProgress = function(tab, ref, progress, minutKey){
        now = new Date().getTime();

        for (var j = 0; j < tab.length; j++){
          progress = Math.round(((now - tab[j].startDate) / (tab[j].endDate - tab[j].startDate)) * 100);
          if (j == key){
            ref.child(tab[minutKey]['.key']).child('progress').set(progress);
          } else {
            ref.child(tab[j]['.key']).child('progress').set(0);
          }
        }
        
      }

      setTimeout(function() {
        checkProgress(minutTableau, minutRef, progress, minutKey);
      }, 500);

      for (var k = 0; k < this.events.length; k++){
        eventsRef.child(this.events[k]['.key']).child('status').set(false);
      }

      this.$http.post(nodeServer, {
          endDate: this.minuteurs[key].endDate, 
          startDate: this.minuteurs[key].startDate, 
          color: this.minuteurs[key].color
        }).then(response => {

          // console.log(response);

      }, response => {
        // error callback
      });

      this.$emit('sendSablierMinut');

      }
  },
  mounted(){

    var minutTableau = this.minuteurs,
    minutRef = minuterieRef, 
    minutDuree, dureeSplited, 
    dureeMinut = this.dureeMinuterie,
    reload = this.reload,
    next, nextColor, singleEvent, mainColor;

    setTimeout(function() {
      for (var l = 0; l < minutTableau.length; l++){
        // this.dureeMinuterie = checkDuree(minutTableau[l], dureeMinut);
        this.dureeMinuterie = DureeMinut(minutTableau[l].eventDuree);
        minutRef.child(minutTableau[l]['.key']).child('label').set(this.dureeMinuterie);
      }

    }, 1000);  

    var checkProgressAlways = function(minutRef, minutTableau){
      var now = new Date().getTime();

      for (var m = 0; m < minutTableau.length - 1; m++){
          next = minutTableau[m+1];
          nextColor = 'progress-event-deco-'+next.color;
          singleEvent = minutTableau[m];
          mainColor = singleEvent.color;
          minutRef.child(singleEvent['.key']).child('nextColor').set(nextColor);
        };

      for (var k = 0; k < minutTableau.length; k++){

        var progress = Math.round(((now - minutTableau[k].startDate) / (minutTableau[k].endDate - minutTableau[k].startDate)) * 100);

        if(minutTableau[k].status == true){
          minutRef.child(minutTableau[k]['.key']).child('progress').set(progress);
        }

        if(now > minutTableau[k].endDate){
          minutRef.child(minutTableau[k]['.key']).child('progress').set(0);

          if(!reload){
            minutRef.child(minutTableau[k]['.key']).child('status').set(false);
          }
        }

      } 
    }

    var minuteurs = setInterval(function(){
      checkProgressAlways(minutRef, minutTableau);
    }, 1000); 

  }  
}

</script>
