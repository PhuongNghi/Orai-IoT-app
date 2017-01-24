<style lang="scss">

</style>

<template>  
  <f7-page class="detail-page">
    <f7-navbar title="" back-link="Back" sliding>
      <f7-nav-right>
        <f7-link icon="icon-bars" open-panel="right"></f7-link>
      </f7-nav-right>
    </f7-navbar>

    <div v-if="detail">
      {{ detail.title }}
    </div>

  </f7-page>
</template>

<script>
import { getDetail } from '../../api'

export default {

  data () {
    return {
      error: null,
      detail: null
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      this.error = this.detail = null
      getDetail(this.$route.params.id, (err, detail) => {
        if (err) {
          this.error = err.toString()
        } else {
          this.detail = detail
        }
      })
    }
  }

}
</script>

