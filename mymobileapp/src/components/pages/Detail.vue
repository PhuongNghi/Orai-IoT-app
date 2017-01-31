<style lang="scss">

.detail-navbar{
  height: 193px;

  &.part1{
    background: url('../../assets/event-part1.svg');
    background-repeat: no-repeat;
    background-size: cover;
  }

  &.part2{
    background: url('../../assets/event-part2.svg');
    background-repeat: no-repeat;
    background-size: cover;
  }

  &.part3{
    background: url('../../assets/event-part3.svg');
    background-repeat: no-repeat;
    background-size: cover;
  }

  .title-detail{
    color: #FFFBF9;
    font-family: "Grifo-M-Bold";
    font-size: 33px;
    line-height: 33px;
    text-align: center;
    letter-spacing: 2.5px;
    position: relative;
    top: 44px;
  }

  .left, .right{
    top: -44px;
    position: relative;
  }
}

</style>

<template>  
  <f7-page class="detail-page">
    <f7-navbar title="" back-link="Back" sliding class="detail-navbar" :class="navbarStatus">
      <div v-if="type == 'event'" class="title-detail">
        {{ events[id].name }}
      </div>

      <div v-if="type == 'minut'" class="title-detail">
        {{ minuteurs[id].name }}
      </div>
    <f7-nav-right>
      <f7-link icon="icon-bars" open-panel="right"></f7-link>
    </f7-nav-right>
  </f7-navbar>

  </f7-page>
</template>

<script>
import ApiFire from '../../api'

export default {

  data () {
    return {
      part1: false,
      part2: false,
      part3: false,
      navbarStatus: ''
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

      if(this.type == 'minut'){
        if (this.minuteurs[this.id].progress < 33.3){
          this.part1 = true;
          this.navbarStatus = "part1";
        } else if((this.minuteurs[this.id].progress >= 33.3 && this.minuteurs[this.id].progress <= 66.6)){
          this.part2 = true;
          this.part1 = false;
          this.navbarStatus = "part2";
        } else if((this.minuteurs[this.id].progress > 66.6)){
          this.part3 = true;
          this.part1 = false;
          this.part2 = false;
          this.navbarStatus = "part3";
        }
      }

      if(this.type == 'event'){
        if (this.events[this.id].progress < 33.3){
          this.part1 = true;
          this.navbarStatus = "part1";
        } else if((this.events[this.id].progress >= 33.3 && this.events[this.id].progress <= 66.6)){
          this.part2 = true;
          this.part1 = false;
          this.navbarStatus = "part2";
        } else if((this.events[this.id].progress > 66.6)){
          this.part3 = true;
          this.part1 = false;
          this.part2 = false;
          this.navbarStatus = "part3";
        }
      }
      
    }
  }

}
</script>

