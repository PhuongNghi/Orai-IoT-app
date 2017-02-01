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
  
  &::after{
    background-color: transparent;
  }
}

.detail-page{
  .page-content{
    padding-top: 203px;
  }

  .detail-dates{
    color: rgba(136, 80, 73, 0.5);
    font-family: "Interstate-Light";

    p:first-child{
      font-size: 16px;
      text-transform: uppercase;
      margin-bottom: 5px;
      letter-spacing: 0.5px;
    }

    p:nth-child(2){
      margin: 0;
      color: rgba(214, 176, 175, 0.7);
      letter-spacing: 0.3px;
    }
  }

  .progressbar-content{
    position: relative;
    top: -10px;
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

      <f7-block class="progressbar-content">
          <f7-progressbar :progress="progress" :color="color" class="progress-value"></f7-progressbar>
      </f7-block>

      <f7-block v-if="type == 'event'">
        <div class="detail-dates">
          <p>Jusqu'au {{ dateEventLabel }}</p>
        
          <p>crée le {{ dateCreationLabel }}</p>
        </div>

        <my-select-color :id="id" :type="'event'"></my-select-color>
      </f7-block>

      <f7-block v-if="type == 'minut'">
        <div class="detail-dates">
          <p>Prévu le {{ dateEventLabel }}</p>
        
          <p>crée le {{ dateCreationLabel }}</p>
        </div>

        <my-select-color :id="id" :type="'minut'"></my-select-color>
      </f7-block>

      <span v-if="type == 'event'">
          <my-block-options :id="id" :type="'event'" :isDetail="isDetail"></my-block-options>

      </span>

      <span v-if="type == 'minut'">
          <my-block-options :id="id" :type="'minut'" :isDetail="isDetail"></my-block-options>
      </span>
      
  </f7-page>
</template>

<script>
import ApiFire from '../../api'
import SelectColor from '../selectcolor'
import BlockOptions from '../blockoptions'

export default {
  components:{
    MySelectColor: SelectColor,
    MyBlockOptions: BlockOptions
  },
  data () {
    return {
      part1: false,
      part2: false,
      part3: false,
      navbarStatus: '',
      id: '',
      type: '',
      isDetail: true
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

      this.monthArray = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];

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

        this.dayCreation = new Date(this.minuteurs[this.id].startDate).getDate();
        this.monthCreation = new Date(this.minuteurs[this.id].startDate).getMonth();
        this.monthCreationFinal = this.monthArray[this.monthCreation];
        this.yearCreation = new Date(this.minuteurs[this.id].startDate).getUTCFullYear();

        this.dateCreationLabel = this.dayCreation + ' ' + this.monthCreationFinal + ' ' + this.yearCreation;

        this.dayEvent = new Date(this.minuteurs[this.id].endDate).getDate();
        this.monthEvent = new Date(this.minuteurs[this.id].endDate).getMonth();
        this.monthEventFinal = this.monthArray[this.monthEvent];
        this.yearEvent = new Date(this.minuteurs[this.id].endDate).getUTCFullYear();

        this.dateEventLabel = this.dayEvent + ' ' + this.monthEventFinal + ' ' + this.yearEvent;

        this.progress = this.minuteurs[this.id].progress;
        this.color = this.minuteurs[this.id].color;

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

        this.dayCreation = new Date(this.events[this.id].startDate).getDate();
        this.monthCreation = new Date(this.events[this.id].startDate).getMonth();
        this.monthCreationFinal = this.monthArray[this.monthCreation];
        this.yearCreation = new Date(this.events[this.id].startDate).getUTCFullYear();

        this.dateCreationLabel = this.dayCreation + ' ' + this.monthCreationFinal + ' ' + this.yearCreation;

        this.dayEvent = new Date(this.events[this.id].endDate).getDate();
        this.monthEvent = new Date(this.events[this.id].endDate).getMonth();
        this.monthEventFinal = this.monthArray[this.monthEvent];
        this.yearEvent = new Date(this.events[this.id].endDate).getUTCFullYear();

        this.dateEventLabel = this.dayEvent + ' ' + this.monthEventFinal + ' ' + this.yearEvent;

        this.progress = this.events[this.id].progress;
        this.color = this.events[this.id].color;

      }

      
      
    }
  }

}
</script>

