<style lang="scss">

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


.home-page .page-content{
  background: -webkit-linear-gradient(#FFF6EF, #FFFFFF) !important; 
  background: linear-gradient(#FFF6EF, #FFFFFF) !important;
}

.page-content{

  .subnavbar{
    position: fixed !important;
  }

  .tab{
    padding-top: 109px;
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
    height: 30vh;
    z-index: 100;
    position: relative;
    bottom: 0;
    margin-top: 364px;
}

.add-button{
    position: relative;
    bottom: -17vh;
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

</style>

<template>
  <!-- App -->
  <div id="app">

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
            <f7-navbar>
              <f7-nav-left>
              </f7-nav-left>
              <f7-nav-center sliding>Oraï App</f7-nav-center>
              <f7-nav-right>
                  <f7-link icon="icon-bars" open-panel="left"></f7-link>
              </f7-nav-right>
            </f7-navbar>
            <f7-list>

            <!-- TABS -->
            <f7-subnavbar>
              <f7-buttons>
                <f7-button @click="checkTabsOnClick" tab-link="#event" active>Évènements</f7-button>
                <f7-button @click="checkTabsOnClick" tab-link="#minuteur">Minuteurs</f7-button>
              </f7-buttons>
            </f7-subnavbar>
            
            <f7-page tabs no-page-content swipeable >
              <f7-page-content tab active id="event">
                <my-block-event></my-block-event>

              </f7-page-content>

              <f7-page-content tab id="minuteur">
                 Tab 2 Content ...
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

export default {

  components: {
    MyBlockEvent: BlockEvent,
  },
  data(){
    return{
      linkAdd: ''
    }
  },
  mounted(){
    this.checkTabs()
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
    }
  }
}
</script>