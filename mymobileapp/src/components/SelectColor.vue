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
            <label class="label-radio item-content" @click="updateColor">
              <input type="radio" name="lightcolor" value="purple" id="purple" v-model="checked">
              <div class="item-inner" @click="updateColor"></div>
              <div class="item-title purple" @click="updateColor"></div>
            </label>
          </li>
          <li>
            <label class="label-radio item-content" @click="updateColor">
              <input type="radio" name="lightcolor" value="pink" id="pink" v-model="checked" >
              <div class="item-inner"></div>
              <div class="item-title pink"></div>
            </label>
          </li>
          <li>
            <label class="label-radio item-content" @click="updateColor">
              <input type="radio" name="lightcolor" value="orange" id="orange" v-model="checked">
              <div class="item-inner"></div>
              <div class="item-title orange"></div>
            </label>
          </li>
          <li>
            <label class="label-radio item-content" @click="updateColor">
              <input type="radio" name="lightcolor" value="amber" id="amber" v-model="checked" >
              <div class="item-inner"></div>
              <div class="item-title amber"></div>
            </label>
          </li>
          <li>
            <label class="label-radio item-content" @click="updateColor">
              <input type="radio" name="lightcolor" value="blue" id="blue" v-model="checked" >
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
var nodeServer = 'http://orai.kevinmoutier.com/updateColor';

export default {
  props: ['id', 'type'],
  data () {
    return {
      checked: '',
      mainColor: ''
    }
  },
  firebase: {
      events: eventsRef,
      minuteurs: minuterieRef
  },
  methods: {
    updateColor(){
      if(this.type == 'event'){
        eventsRef.child(this.events[this.id]['.key']).child('color').set(this.checked);

        this.mainColor = this.checked;

        if(this.events[this.id].status){
          this.$http.put(nodeServer, { 
              color: this.checked
            }).then(response => {

              console.log(response);

          }, response => {
            // error callback
          });
        }

      } else if (this.type == 'minut'){
        minuterieRef.child(this.minuteurs[this.id]['.key']).child('color').set(this.checked);

        this.mainColor = this.checked;

        if(this.minuteurs[this.id].status){
          this.$http.put(nodeServer, { 
              color: this.checked
            }).then(response => {

              console.log(response);

          }, response => {
            // error callback
          });
        }
       
      }

      this.$emit('updateColor');
    }  
  },
  created(){      
    if(this.type == 'event'){
      this.mainColor = this.events[this.id].color;
      this.checked = this.mainColor;
    } else if (this.type == 'minut'){
      this.mainColor = this.minuteurs[this.id].color;
      this.checked = this.mainColor;
    }

  }
  
}

</script>

