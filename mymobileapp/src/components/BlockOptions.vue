<style lang="scss">

ul.choose-options{
  padding: 0;
  list-style:none;
  background: -webkit-linear-gradient(#FFF6EF, #FFFFFF) !important; 
  background: linear-gradient(#FFF6EF, #FFFFFF) !important;

  li{
    padding-bottom: 6px;
    padding-left: 19px;
    padding-top: 6px;

    .item-content{
      display: flex;

      .item-media{
        padding: 5px;
      }

      .item-inner{
        padding: 5px;
        line-height: 29px;
      }
    }

    a{
      color: #CAA59F;
      font-family: "Interstate-Light";
      letter-spacing: 0.4px;
    }

    &:nth-child(2){
      border-top: solid 1px #EEDDD8;
      border-bottom: solid 1px #EEDDD8;

    }
    &:nth-child(3){
      border-bottom: solid 1px #EEDDD8;
    }
  }

  .item-media{
    background-size: 18px 32px;
    background-repeat: no-repeat;
    width: 18px;

    &.bell{
      background-image: url('../assets/icon/bell.svg');
    }
    &.note{
      background-image: url('../assets/icon/plume.svg');
    }
    &.addPerson{
      background-image: url('../assets/icon/addperson.svg');
    }
    &.trash{
      background-image: url('../assets/icon/trash.svg');
    }
  }
}

</style>

<template>

  <div class="item-content wrap-options">
    <div class="item-inner">
      <ul class='choose-options'>
        <li>
          <a href="">
            <div class="item-content">
                <div class="item-media bell"></div>
                <div class="item-inner">
                  <div class="item-title">Choisir une annonce de fin</div>
                </div>
              
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <div class="item-content">
                <div class="item-media note"></div>
                <div class="item-inner">
                  <div class="item-title">Ajouter une note</div>
                </div>
              
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <div class="item-content">
                <div class="item-media addPerson"></div>
                <div class="item-inner">
                  <div class="item-title">Inviter quelqu'un</div>
                </div>
              
            </div>
          </a>  
        </li>
        <li v-if="isDetail">
          <a href="">
            <div class="item-content">
                <div class="item-media trash"></div>
                <div class="item-inner">
                  <div class="item-title">Supprimer</div>
                </div>
              
            </div>
          </a>  
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
  props: ['id', 'type', 'isDetail'],
  data () {
    return {
      
    }
  },
  firebase: {
      events: eventsRef,
      minuteurs: minuterieRef
  },
  methods: {

  },
  created(){      

    // console.log(this.isDetail);

  }  
}

</script>

