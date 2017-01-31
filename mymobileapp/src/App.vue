<style lang="scss">

@font-face {
  font-family: "Interstate-Bold";
  src: url("assets/font/Interstate-Bold.ttf") format('truetype');
}

@font-face {
  font-family: "Interstate-Light";
  src: url("assets/font/Interstate-Light.ttf") format('truetype');
}

@font-face {
  font-family: "Interstate-Regular";
  src: url("assets/font/Interstate-Regular.ttf") format('truetype');
}

@font-face {
  font-family: "Grifo-M-Black";
  src: url("assets/font/grifo-black-m.ttf") format('truetype');
}

@font-face {
  font-family: "Grifo-M-Bold";
  src: url("assets/font/grifo-bold-m.ttf") format('truetype');
}

@font-face {
  font-family: "Grifo-M-Light";
  src: url("assets/font/grifo-light-m.ttf") format('truetype');
}

@font-face {
  font-family: "Grifo-M-Medium";
  src: url("assets/font/grifo-medium-m.ttf") format('truetype');
}

@font-face {
  font-family: "Grifo-M-Regular";
  src: url("assets/font/grifo-regular-m.ttf") format('truetype');
}

.login-input{
  input, input[type='text'], input[type='email']{
    margin-bottom: 30px;
    text-align: center;
    border-bottom: rgba(153, 62, 62, 0.5) solid 1px !important;
    color: #9B3C80;
    font-family: "Grifo-M-Bold";
    letter-spacing: 1px;
    font-size: 26px;
    transition: all .15s linear;

    &.focus-state{
      border-bottom: #86D3D7 solid 1px !important;
    } 
  }

  ::-webkit-input-placeholder{
    font-size: 17px !important;
    color: rgba(153, 62, 62, 0.5);
    font-family: "Interstate-Light";
  }
}

.login-screen-content{
  form{
    margin: 44% auto !important;
  }
}

.page{
  background: none;
}

.content-block{
  margin: 0;
}
.list-block{
  margin: 0;
  font-size: 14px;
  ul ul{
      padding: 0;
  }
}

.list-block ul::before, .list-block ul::after, .list-block .item-inner:after{
  background: none;
}

.progress-event-actif{
  padding-top: 20px;
}

.main-header{
  height: 193px;
  background: url('assets/bg3.svg');
  background-repeat: no-repeat;
  background-size: cover;

  .left{
    background: url('assets/tree3.svg');
    width: 142px;
    height: 179px;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    left: -8px;
    bottom: 11px;
    z-index: 34;
  }

  .right{
    position: relative;
    top: -50px;
  }

  &::after{
    background-color: transparent !important;
  }
}

.main-navbar{
  top: 146px !important;
  padding: 0;
  background: none;
  text-transform: uppercase;
  font-family: "Interstate-Light";
  letter-spacing: 1px;

  &::after{
    background-color: transparent !important;
  }

  .buttons-row{    
    a{
      border-radius: 0 !important;
      height: 51px;
      line-height: 51px;
      border: none;
      color: rgba(136, 80, 73, 0.5);
      background-color: rgba(255, 240, 222, 0.6);
      &:first-child{
        margin-left: -1px;
      }
    }

    a.active{
      background-color: #FFF7F1 !important;
    }
  }
}

.main-tabs-content{
  padding-top: 90px;
}

.page-content{
  background: -webkit-linear-gradient(#FFF6EF, #FFFFFF) !important; 
  background: linear-gradient(#FFF6EF, #FFFFFF) !important;

  .subnavbar{
    position: fixed !important;
  }

  .tab{
    padding-top: 125px;
    padding-bottom: 100px;
  }


}

#right-panel-view{
  .menu-link{
    width: 100vw;
  }
}

.add-button-wrap{
    background: -webkit-linear-gradient(rgba(255, 255, 255, 0), #ffffff) !important;
    background: -o-linear-gradient(rgba(255, 255, 255, 0), #ffffff) !important;
    background: linear-gradient(rgba(255, 255, 255, 0), #ffffff) !important;
    height: 23vh;
    z-index: 100;
    position: relative;
    bottom: 0;
    margin-top: 422px;
}

.add-button, .close-login{
    font-family: "Interstate-Light";
    position: relative;
    bottom: -8vh;
    width: 50%;
    margin: 0 auto;
    background: linear-gradient(to right, #F15F6A, #FF8E70) !important;
    border-radius: 76px;
    border: 0;
    height: 55px;
    width: 294px;
    line-height: 55px;
    font-size: 21px;
    color: white !important;
}

.close-login{
  a{
    line-height: 55px !important;
    color: white !important;
  }  
}

.swiper-container{
  height: 100vh;
  background: -webkit-linear-gradient(#FFF6EF, #FFFFFF) !important; 
  background: linear-gradient(#FFF6EF, #FFFFFF) !important;
}

.swiper-slide{
  text-align: center;

  img{
    width: 70%;
    margin-top: 42px;
  }
}

.swiper-pagination-bullet{
  background-color: rgba(232, 106, 61, 30);

  .swiper-pagination-bullet-active{
    background: #F8776D !important;
  }
}

.swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction{
  bottom: 100px;
}

.swiper-button-next{
  top: 91%;
  right: 47%;
}

.close-slider{
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 2;
}

#close-final-slider{
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: 78px;
  z-index: 2;
  bottom: 55px;
  display: none;
}

.popup{
  display: block !important;
}

</style>

<template>
  <!-- App -->
  <div id="app">

    <!-- Login Screen -->
    <div class="login-screen modal-in">
      <f7-view>
        <f7-pages>
          <f7-page login-screen>
            <f7-list form>
              <f7-list-item>
                <f7-input name="username" placeholder="Username" type="text" class="login-input"></f7-input>
              </f7-list-item>
              <f7-list-item>
                <f7-input name="password" type="password" placeholder="Password" class="login-input"></f7-input>
              </f7-list-item>
            </f7-list>
            <f7-list>
              <f7-list-button close-login-screen class="close-login" @click="openTuto">Valider</f7-list-button>
            </f7-list>
          </f7-page>
        </f7-pages>
      </f7-view>
    </div>

    <!-- Swiper -->
    <div id="popup-tuto" class="popup">
      <span class="close-slider" @click="closeTuto">SKIP</span>
      <span id="close-final-slider" @click="closeTuto">J'ai compris</span>
      <swiper :options="swiperOption">
        <swiper-slide>
          <img src="./assets/1.svg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="./assets/2.svg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="./assets/3.svg" alt="">
        </swiper-slide>
        <swiper-slide>
          <img src="./assets/4.svg" alt="">
        </swiper-slide>
        <swiper-slide id="last-slide">
          <img src="./assets/5.svg" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div id="btn-slider-next" class="swiper-button-next" slot="button-next" @click="checkLastSlide"></div>
      </swiper>
    </div>
    
    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>

    <!-- Right Panel -->
    <f7-panel right reveal layout="dark">
      <f7-view id="right-panel-view" navbar-through :dynamic-navbar="true">
        <f7-navbar title="Menu"></f7-navbar>
        <f7-pages>
          <f7-page>
            <f7-list>
              <f7-list-item link="#">
                <a href="/compte/" data-view=".main-view" class="menu-link close-panel">Mon Compte</a>
              </f7-list-item>
              <f7-list-item link="#">
                <a href="/infos/" data-view=".main-view" class="menu-link close-panel">Informations</a>
              </f7-list-item>
              <f7-list-item link="#">
                <a href="/veille/" data-view=".main-view" class="menu-link close-panel">Mettre en veille</a>
              </f7-list-item>
            </f7-list>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-panel>

    <!-- Main Views -->
    <f7-views>
      <f7-view id="main-view" class="main-view" navbar-through :dynamic-navbar="true" main>

        <!-- Pages -->
        <f7-pages>
          <f7-page class="home-page">
            <!-- Navbar -->
            <f7-navbar class="main-header">
              <f7-nav-left>
              </f7-nav-left>
              <f7-nav-right>
                  <f7-link icon="icon-bars" open-panel="left"></f7-link>
              </f7-nav-right>

            <!-- TABS -->
            <f7-subnavbar class="main-navbar">
              <f7-buttons>
                <f7-button @click="checkTabsOnClick" tab-link="#event" active>Évènements</f7-button>
                <f7-button @click="checkTabsOnClick" tab-link="#minuteur">Minuteurs</f7-button>
              </f7-buttons>
            </f7-subnavbar>
            </f7-navbar>
            
            <f7-list>
          
            <f7-page tabs no-page-content swipeable class="main-tabs-content">
              <f7-page-content tab active id="event">
                <my-block-event></my-block-event>

              </f7-page-content>

              <f7-page-content tab id="minuteur">
                 <my-block-minuterie></my-block-minuterie>

              </f7-page-content>
            </f7-page>

            <!-- Bouton Add Event -->
            <f7-block class="add-button-wrap">
              <f7-button class="add-button" @click="checkTabs" :href="linkAdd">
                 <span v-if="linkAdd == '/addevent/'">Ajouter un évènement</span>
                 <span v-if="linkAdd == '/addminuteur/'">Ajouter un minuteur</span>

              </f7-button>
            </f7-block>
            
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-views>

  </div>
</template>

<script>
import BlockEvent from 'components/blockevent'
import BlockMinuterie from 'components/blockminuteurs'

export default {

  components: {
    MyBlockEvent: BlockEvent,
    MyBlockMinuterie: BlockMinuterie
  },
  data(){
    return{
      linkAdd: '',
      tuto: '',
      lastSlide: '',
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        nextButton: '.swiper-button-next'
      }
    }
  },
  mounted(){
    this.checkTabs();
  },
  methods: {
    checkTabs: function(){
      this.tabActive = document.getElementsByClassName('active tab-link')[0].text;
      if(this.tabActive == 'Évènements'){
        this.linkAdd = '/addevent/';
      } else if (this.tabActive == 'Minuteurs'){
        this.linkAdd = '/addminuteur/';
      }
    },
    checkTabsOnClick: function(){
      this.tabActive = document.getElementsByClassName('active tab-link')[0].text;
      if(this.tabActive !== 'Évènements'){
        this.linkAdd = '/addevent/';
      } else if (this.tabActive !== 'Minuteurs'){
        this.linkAdd = '/addminuteur/';
      }
    },
    openTuto: function(){
      this.tuto = document.getElementById("popup-tuto");
      this.tuto.classList.add("modal-in");
    },
    closeTuto: function(){
      this.tuto = document.getElementById("popup-tuto");
      this.tuto.classList.add("modal-out");
    },
    checkLastSlide: function(){
      this.lastSlide = document.getElementById('last-slide').classList.contains('swiper-slide-next');
      if(this.lastSlide){
        document.getElementById('btn-slider-next').style.display = 'none';
        document.getElementById('close-final-slider').style.display = 'block';
      }
      // console.log(this.lastSlide);
    }
  }
}
</script>