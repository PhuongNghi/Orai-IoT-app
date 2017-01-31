<style lang="scss">

</style>

<template>  
  <f7-page class="detail-page">
    <f7-navbar title="" back-link="Back" sliding>
      <f7-nav-right>
        <f7-link icon="icon-bars" open-panel="right"></f7-link>
      </f7-nav-right>
    </f7-navbar>

    <div v-if="type == 'event'">
      {{ events[id].name }}
    </div>

    <div v-if="type == 'minut'">
      {{ minuteurs[id].name }}
    </div>

  </f7-page>
</template>

<script>
import ApiFire from '../../api'

export default {

  data () {
    return {
      eventname: '',
      eventdate: '',
      eventcolor: '',
      progress: '',
      status: false,
      daysDiff: '',

    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  firebase: {
      events: ApiFire.ref('events'),
      minuteurs: ApiFire.ref('minuteurs'),
  },
  methods: {
    fetchData () {
      this.id = this.$route.params.id;
      this.type = this.$route.params.type;
    }
  }

}
</script>

