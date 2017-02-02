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
  src: url("assets/font/grifo-bold-m-v2.ttf") format('truetype'),
      url("assets/font/grifo-bold-m-v2-webfont.woff") format('woff'),
      url("assets/font/grifo-bold-m-v2-webfont.woff2") format('woff2');
  /*src: url('assets/font/AbrilFatface-Regular.otf') format('opentype');*/
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
    margin-bottom: 30px !important;
  }
}

i.icon.icon-back{
  background-image: url(assets/icon/arrow.svg) !important;
}

i.icon.icon-bars{
  background-image: url(assets/icon/burger-menu.svg) !important;
  width: 30px;
  height: 30px;
}

.page{
  background: none;
}

.navbar{
  .right{
    right: 3px;
  }
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

.navbar-fixed .page .subnavbar, .navbar-fixed.page .subnavbar, .navbar-through .page .subnavbar, .navbar-through.page .subnavbar{
  top: initial;
}


.main-notif-wrapper{
  top: 114px;
  height: 28px;
  padding-left: 40px;
  font-size: 14px;
  text-align: center;
  display: flex;
  justify-content: center;
  /*background-color: rgba(255, 240, 222, 0.6);*/
  background-color: transparent;
  color: rgba(136, 80, 73, 0.5);
  letter-spacing: 1px;
  font-family: 'Interstate-Light';
  -webkit-transition: all 1s; 
  transition: all 1s;
  position: absolute;
  width: 100%;
  line-height: 32px;

  &::after{
    display: none;
  }
}
.main-notif{

    &::after{
      display: none;
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

.icon-event{
  display: block;
  background-image: url('assets/icon/calendar.svg');
  background-repeat: no-repeat;
  width: 25px;
  height: 30px;
  background-size: 21px;
  float: left;
  background-position-y: 2px;
  margin-right: -16px;
  margin-left: 12px;
  margin-top: 11px;
}

.icon-minut{
  display: block;
  background-image: url('assets/icon/chrono.svg');
  background-repeat: no-repeat;
  width: 25px;
  height: 30px;
  background-size: 21px;
  float: left;
  background-position-y: 2px;
  margin-right: -26px;
  margin-left: 17px;
  margin-top: 11px;
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
    bottom: -5vh;
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
    letter-spacing: 0.9px;
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
  bottom: 97px;
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
  width: 56%;
  bottom: 25px;
}

.popup{
  display: block !important;
}

.main-menu{
  .page-content{
    padding-top: 0 !important;
    overflow: hidden;
  }
}

.menu-list{
  position: relative;
  top: 5px;

  ul{
    background: -webkit-linear-gradient(#FF8E70, #F05F6A) !important;
    background: linear-gradient(#FF8E70, #F05F6A) !important;
    top: -5px;

    &::after, &::before{
      content: none !important;
    }

    li{
      height: 202px;

      &.menu-compte-wrap{

        a.item-link{
          padding-top: 10px;

        }
      }

      a{
        height: 202px;
        -webkit-align-items: center;
        -webkit-box-align: center;
        justify-content: center;
        display: flex;
        color: white !important;
        font-family: 'Grifo-M-Bold';
        letter-spacing: 1px;
        font-size: 18px;

        &.menu-link{
          &::before{
            content: '';
            width: 61px;
            height: 71px;
            background-repeat: no-repeat;
            position: absolute;
            background-size: 48px;
            background-position-x: 6px;
          }

          &.compte::before{
              background-image: url('assets/icon/myaccount.svg');
              top: 55px;
          }
          &.infos::before{
              background-image: url('assets/icon/infos.svg');
              top: 45px;
          }
          &.veille::before{
              background-image: url('assets/icon/veille.svg');
              top: 75px;
          }
        }

      }

      &:first-child{ 
        background: -webkit-linear-gradient(rgba(239, 90, 96, 0.3), rgba(255, 184, 131, 0.3)) !important;
        background: linear-gradient(rgba(239, 90, 96, 0.3), rgba(255, 184, 131, 0.3)) !important;
      }
      &:nth-child(3){ 
        background: -webkit-linear-gradient(rgba(229, 80, 86, 0.3), rgba(240, 95, 106, 0.3)) !important;
        background: linear-gradient(rgba(229, 80, 86, 0.3), rgba(240, 95, 106, 0.3)) !important;
      }
    }
  }

  .item-content{
    padding: 0;
  }

  .item-inner{
    padding-top: 30px;
    background-image: none !important;
    padding-right: 0 !important;
  }

  .menu-close{
    position: absolute;
    top: 25px;
    right: 25px;
    height: initial;

    img{
      width: 30px;
    }
  }
}

.layout-dark .item-link.active-state{
  background-color: transparent !important;

}

.swiper-button-next{
  background-image: url('assets/icon/next.svg') !important;
  width: 46px;
  background-size: 44px;
  margin-right: -12Px;
}

.create-account{
  .item-link{
    margin-top: 60px;
    position: relative;
    top: 46px;
    color: rgba(153, 62, 62, 0.5) !important;
    font-family: 'Interstate-Light';
    letter-spacing: 1px;
  }
}

.close-slider{
  color: rgba(153, 62, 62, 0.5) !important;
  font-family: 'Interstate-Light';
  letter-spacing: 1px;
}

.swiper-slide{

  img{
    margin-top: 44px;

    &.slide-2-img{
      margin-top: 18px !important;
    }
  }

  h1{
    color: #9B3C80;
    font-family: 'Grifo-M-Bold';
    letter-spacing: 1px;
    margin-bottom: 5px;

    &.slide-2{
      margin-top: 0;
    }
  }

  p{
    padding: 0 35px;
    color: rgba(153, 62, 62, 0.5) !important;
    font-family: 'Interstate-Light';
    letter-spacing: 1px;
    font-size: 15px;
    margin-top: 0;

  }
}

#main-create-screen{
  padding-top: 44%;
  background-color: #fffbf7;

  ul{
    background: #fffbf7;
  }

  .password{
    margin-top: 27px;
    margin-bottom: 44px;
  }

  .loginBack{
    position: absolute;
    z-index: 20;
    bottom: -430px;
    letter-spacing: 1px;

    a{
      color: rgba(153, 62, 62, 0.5) !important;
      font-family: 'Interstate-Light';
    }
  }
}

</style>

<template>
  <!-- App -->
  <div id="app">

    <!-- Login Screen -->
    <div id="main-login-screen" class="login-screen modal-in">
      <f7-view>
        <f7-pages>
          <f7-page login-screen>
            <f7-list form>
              <f7-list-item>
                <f7-input name="username" placeholder="Pseudonyme" type="text" class="login-input" v-model="usualUser"></f7-input>
              </f7-list-item>
              <f7-list-item>
                <f7-input name="password" type="password" placeholder="Mot de passe" class="login-input"></f7-input>
              </f7-list-item>
            </f7-list>
            <f7-list>
              <f7-list-button class="create-account" @click="openCreation">Créer un compte</f7-list-button>
            </f7-list>
            <f7-list>
              <f7-list-button close-login-screen class="close-login" @click="login">Valider</f7-list-button>
            </f7-list>
          </f7-page>
        </f7-pages>
      </f7-view>
    </div>

    <!-- Create Screen -->
    <div id="main-create-screen" class="login-screen popup">
      <f7-view>
        <f7-list>
          <f7-list-button close-create-screen @click="" class="loginBack back">Se connecter</f7-list-button>
        </f7-list>
        <f7-pages>
          <f7-page create-screen>

            

            <f7-list form>
              <f7-list-item>
                <f7-input name="username" placeholder="Pseudonyme" type="text" class="login-input" v-model="newUser"></f7-input>
              </f7-list-item>
              <f7-list-item>
                <f7-input name="password" type="password" placeholder="Mot de passe" class="login-input"></f7-input>
              </f7-list-item>
              <f7-list-item>
                <f7-input name="password" type="password" placeholder="Confirmation de mot de passe" class="login-input password"></f7-input>
              </f7-list-item>
            </f7-list>
            <f7-list>
              <f7-list-button close-login-screen @click="openTuto" class="close-login">Créer son compte</f7-list-button>
            </f7-list>
          </f7-page>
        </f7-pages>
      </f7-view>
    </div>

    <!-- Swiper -->
    <div id="popup-tuto" class="popup">
      <span class="close-slider" @click="closeTuto">SKIP</span>
      <span id="close-final-slider" @click="closeTuto" class="add-button button">J'ai compris</span>
      <swiper :options="swiperOption">
        <swiper-slide>
          <img src="./assets/1.svg" alt="">
          <h1>Allumer l'objet</h1>
          <p>Appuyez sur le bouton rouge pour commencer à utiliser votre Orai.</p>
        </swiper-slide>
        <swiper-slide>
          <img src="./assets/2.svg" alt="" class="slide-2-img">
          <h1 class="slide-2">Connecter l’objet à internet</h1>
          <p>Connectez-vous à votre Orai dans la liste des connexions WIFI et suivez les instructions.</p>
        </swiper-slide>
        <swiper-slide>
          <img src="./assets/3.svg" alt="">
          <h1>Créer un sablier</h1>
          <p>Les sabliers représentent le temps qui s’écoule.</p>
        </swiper-slide>
        <swiper-slide>
          <img src="./assets/4.svg" alt="">
          <h1>Événements/Chronomètre</h1>
          <p>Les sabliers peuvent représenter le temps jusqu’à l’arrivée d’un événement… <br><br> … ou un temps défini à écouler.</p>
        </swiper-slide>
        <swiper-slide id="last-slide">
          <img src="./assets/5.svg" alt="">
          <h1>Diffuser vos sabliers</h1>
          <p>Activez un sablier pour le transférer sur votre Orai.</p>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <div id="btn-slider-next" class="swiper-button-next" slot="button-next" @click="checkLastSlide"></div>
      </swiper>
    </div>
    
    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>

    <!-- Right Panel -->
    <f7-panel right reveal layout="dark" class="main-menu">
      <f7-view id="right-panel-view" navbar-through :dynamic-navbar="true">
        <!-- <f7-navbar title="Menu"></f7-navbar> -->
        <f7-pages>
          <f7-page>
            <f7-list class="menu-list">
              <f7-list-item link="#" class="menu-compte-wrap">
                <a class="menu-close close-panel">
                  <img src="./assets/icon/close.svg" alt="">
                </a>
                <a href="/compte/" data-view=".main-view" class="menu-link compte close-panel">Mon Compte</a>
              </f7-list-item>
              <f7-list-item link="#">
                <a href="/infos/" data-view=".main-view" class="menu-link infos close-panel">Informations</a>
              </f7-list-item>
              <f7-list-item link="#">
                <a href="/veille/" data-view=".main-view" class="menu-link veille close-panel">Mettre en veille</a>
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
                <f7-button @click="checkTabsOnClick" tab-link="#event" active>
                <span class="icon-event"></span>Évènements</f7-button>
                <f7-button @click="checkTabsOnClick" tab-link="#minuteur">
                <span class="icon-minut"></span>Minuteurs</f7-button>
              </f7-buttons>
            </f7-subnavbar>

            <!-- Notif -->
            <div class="main-notif-wrapper">
              <div class="main-notif" v-if="this.notif">
                Votre {{this.notifType}} est envoyé
              </div>
              
            </div>

            </f7-navbar>
            
            <f7-list>
          
            <f7-page tabs no-page-content swipeable class="main-tabs-content">
              <f7-page-content tab active id="event">
                <my-block-event :user="this.user" v-on:sendSablier="showNotifEvent"></my-block-event>

              </f7-page-content>

              <f7-page-content tab id="minuteur">
                 <my-block-minuterie v-on:sendSablierMinut="showNotifMinut"></my-block-minuterie>

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
      },
      notif: false,
      notifType: '',
      notifMinut: false,
      user: '',
      newUser: '',
      usualUser: ''
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

      this.login();
    },
    closeTuto: function(){
      this.tuto = document.getElementById("popup-tuto");
      this.tuto.classList.add("modal-out");
    },
    openCreation: function(){
      this.creation = document.getElementById("main-create-screen");
      this.creation.classList.add("modal-in");
    },
    checkLastSlide: function(){
      this.lastSlide = document.getElementById('last-slide').classList.contains('swiper-slide-next');
      if(this.lastSlide){
        document.getElementById('btn-slider-next').style.display = 'none';
        document.getElementById('close-final-slider').style.display = 'block';
      }

    },
    showNotif(){
      this.notif = true;

      function fade(element) {
          var op = 1;  
          var timer = setInterval(function () {
              if (op <= 0.1){
                  clearInterval(timer);
                  element.style.display = 'none';
              }
              element.style.opacity = op;
              element.style.filter = 'alpha(opacity=' + op * 100 + ")";
              op -= op * 0.1;
          }, 50);
      }

      function unfade(element) {
          var op = 0.1;  
          element.style.display = 'block';
          var timer = setInterval(function () {
              if (op >= 1){
                  clearInterval(timer);
              }
              element.style.opacity = op;
              element.style.filter = 'alpha(opacity=' + op * 100 + ")";
              op += op * 0.1;
          }, 10);
      }

      unfade(document.getElementsByClassName('main-notif-wrapper')[0]);

      document.getElementsByClassName('main-notif-wrapper')[0].style.background = 'rgba(255, 240, 222, 0.6)';
      document.getElementsByClassName('main-notif-wrapper')[0].style.display = 'block';
      document.getElementsByClassName('main-notif-wrapper')[0].style.top = '114px';
      document.getElementsByClassName('main-notif-wrapper')[0].style.color = 'rgba(136, 80, 73, 0.5)';

      setTimeout(function(){ 
        this.notif = false;
        document.getElementsByClassName('main-notif-wrapper')[0].style.background = 'transparent';
        document.getElementsByClassName('main-notif-wrapper')[0].style.color = 'transparent';
        document.getElementsByClassName('main-notif-wrapper')[0].style.top = '100px';
        fade(document.getElementsByClassName('main-notif-wrapper')[0]);
      }, 2500);

    },
    showNotifMinut(){
      this.notifType = "minuteur";
      this.showNotif();
    },
    showNotifEvent(){
      this.notifType = "évènement";
      this.showNotif();
    },
    login(){
      if(this.usualUser){
        this.user = this.usualUser;
      } else {
        this.user = this.newUser;
      }

      sessionStorage.setItem("user", this.user);

      console.log(this.user);
    }
  }
}
</script>