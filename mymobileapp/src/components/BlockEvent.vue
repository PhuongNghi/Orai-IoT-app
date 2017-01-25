<style lang="scss">

</style>

<template>
  <div>
    <f7-list-group class="progress-event" v-for="event, key in events">
      <f7-link @click="checkEvent(key)" :href="linkEvent">
        <f7-block>
            <f7-progressbar :progress="event.progress" :color="event.color"></f7-progressbar>
        </f7-block>
        <f7-list-item :title="event.name">
        <f7-button class="btn-send-to-sablier">Sablier</f7-button>
        </f7-list-item>
      </f7-link>
    </f7-list-group>
  </div>
</template>

<script>
import ApiFire from '../api'
var eventsRef = ApiFire.ref('events');

export default {

  data () {
    return {
      eventname: '',
      eventdate: '',
      eventcolor: '',
      progress: '',
      eventurl: '',
      linkEvent: ''
    }
  },
  firebase: {
      events: eventsRef
  },
  methods: {
    checkEvent: function(key){
      this.linkEvent = "/detail/" + key;
    }
  }

}
</script>

