<style lang="scss">

ul.choose-colors{
  list-style: none;
  display: inline;
  padding: 0;

  li{
    display: inline-block;

    label.label-radio input[type=radio]:checked~.item-inner{
      background-image : url('../assets/icon/check-color.svg') !important;
      background-size: 20px 39px;
      background-position: center !important
    }

    .item-inner{
      padding-right: 24px;
      padding-top: 20px;
      position: relative;
      left: 11px;
      top: 13px;
      padding-left: 0;
      z-index: 22;         
    }

    .item-title{
        width: 32px;
        height: 17px;
        border-radius: 8px;
        margin-right: 14px;

        &.purple::before{
          content:'';
          width: 32px;
          height: 17px;
          border-radius: 8px;
          position: absolute;
          background: -webkitlinear-gradient(to right, #8776FF , #AD30B5);
          background: linear-gradient(to right, #8776FF , #AD30B5);
     }    

     &.pink::before{
        content:'';
        width: 32px;
        height: 17px;
        border-radius: 8px;
        position: absolute;
        background: -webkitlinear-gradient(to right, #FF849E , #FF485E);
        background: linear-gradient(to right, #FF849E , #FF485E);
     }  
     &.blue::before{
        content:'';
        width: 32px;
        height: 17px;
        border-radius: 8px;
        position: absolute;
        background: -webkitlinear-gradient(to right, #00DFC3 , #2D9FE6);
        background: linear-gradient(to right, #00DFC3 , #2D9FE6);
     }   
     &.orange::before{
        content:'';
        width: 32px;
        height: 17px;
        border-radius: 8px;
        position: absolute;
        background: -webkitlinear-gradient(to right, #E83A3A , #FFC14C);
        background: linear-gradient(to right, #E83A3A , #FFC14C);
     }
     &.amber::before{
        content:'';
        width: 32px;
        height: 17px;
        border-radius: 8px;
        position: absolute;
        background: -webkitlinear-gradient(to right, #FFD71E , #FFAA1A);
        background: linear-gradient(to right, #FFD71E , #FFAA1A);
     }
    }
  }
}

</style>

<template>

  <div class="item-content wrap-colors">
      <div class="item-inner">
        <ul class="choose-colors">
          <li>
            <label class="label-radio item-content">
              <input type="radio" name="lightcolor" value="purple" id="purple" v-model="checked">
              <div class="item-inner"></div>
              <div class="item-title purple"></div>
            </label>
          </li>
          <li>
            <label class="label-radio item-content">
              <input type="radio" name="lightcolor" value="pink" id="pink" v-model="checked">
              <div class="item-inner"></div>
              <div class="item-title pink"></div>
            </label>
          </li>
          <li>
            <label class="label-radio item-content">
              <input type="radio" name="lightcolor" value="orange" id="orange" v-model="checked">
              <div class="item-inner"></div>
              <div class="item-title orange"></div>
            </label>
          </li>
          <li>
            <label class="label-radio item-content">
              <input type="radio" name="lightcolor" value="amber" id="amber" v-model="checked">
              <div class="item-inner"></div>
              <div class="item-title amber"></div>
            </label>
          </li>
          <li>
            <label class="label-radio item-content">
              <input type="radio" name="lightcolor" value="blue" id="blue" v-model="checked">
              <div class="item-inner"></div>
              <div class="item-title blue"></div>
            </label>
          </li>
      </ul>
    </div>

  </div>


</template>

<script>
import ApiFire from '../api'
import Vue from 'vue'

var minuterieRef = ApiFire.ref('minuteurs');
var eventsRef = ApiFire.ref('events');

export default {
  props: ['id', 'type'],
  data () {
    return {
      checked: ''
    }
  },
  firebase: {
      events: eventsRef,
      minuteurs: minuterieRef
  },
  methods: {

  },
  created(){      
    if(this.type == 'event'){
      this.mainColor = this.events[this.id].color;
    } else if (this.type == 'minut'){
      this.mainColor = this.minuteurs[this.id].color;
    }

    this.checked = this.mainColor;
  }  
}

</script>

