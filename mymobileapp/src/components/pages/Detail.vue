<style lang="scss">

</style>

<template>  
  <f7-page class="detail-page">
    <f7-navbar title="" back-link="Back" sliding>
      <f7-nav-right>
        <f7-link icon="icon-bars" open-panel="right"></f7-link>
      </f7-nav-right>
    </f7-navbar>

    <div>
      {{ events[id].name }}
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
      id:''
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  firebase: {
      events: ApiFire.ref('events')
  },
  methods: {
    fetchData () {
      // console.log(this.$route.params.id);
      this.id = this.$route.params.id;
    }
  }

}
</script>

