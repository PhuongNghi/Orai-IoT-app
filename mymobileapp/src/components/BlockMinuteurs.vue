<style lang="scss">

</style>

<template>

  <div>
    <f7-list-group class="progress-event" v-for="event, key in minuteurs" :class="[event.color, event.nextColor]">
        <f7-block class="progressbar-content">
            <f7-progressbar :progress="event.progress" :color="event.color" class="progress-value"></f7-progressbar>
        </f7-block>
        <f7-list-item class="event-name" :title="event.name">
        </f7-list-item>
        <f7-list-item class="days-remaining">

          <!-- <f7-block>
            {{event.daysDiff}} jour<span v-if="event.daysDiff > 1">s</span> restant<span v-if="event.daysDiff > 1">s</span>
          </f7-block> -->

          <f7-block v-if="event.status">
            Actif
          </f7-block>

          <f7-block v-if="!event.status">
            <f7-button class="btn-send-to-sablier" @click="sendSablier(event, key)">Activer</f7-button>
          </f7-block>

        </f7-list-item>
    </f7-list-group>
  </div>

</template>

<script>
import ApiFire from '../api'
import Vue from 'vue'

var minuterieRef = ApiFire.ref('minuteurs');
var nodeServer = 'http://orai.kevinmoutier.com/set';

export default {

  data () {
    return {
      eventdate: '',
      linkEvent: '',
      progress: '',
      nextColor: ''
    }
  },
  firebase: {
      minuteurs: minuterieRef
  },
  methods: {
    sendSablier: function(event, key){
      for (var j = 0; j < this.minuteurs.length; j++){
        if (j == key){
          minuterieRef.child(this.minuteurs[key]['.key']).child('status').set(true);
        } else{
          minuterieRef.child(this.minuteurs[j]['.key']).child('status').set(false);
        }

        if(this.minuteurs[j].status){

          this.now = new Date().getTime();

          this.newProgress = Math.round(((this.now - this.minuteurs[j].startDate) / (this.minuteurs[j].endDate - this.minuteurs[j].startDate)) * 100);

          minuterieRef.child(this.minuteurs[j]['.key']).child('progress').set(this.newProgress);


          console.log(this.newProgress);
        }
      }


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
      
  }  
}

</script>

