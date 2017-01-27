<style lang="scss">
.content-block{
  margin: 0;
}
.list-block{
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
  background-color: white;
}

.progress-bar{
  height: 10px !important;
}

.page-content{
  .tab{
    padding-top: 109px;
  }
}

#right-panel-view{
  .menu-link{
    width: 100vw;
  }
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
                <f7-button tab-link="#event" active>Évènements</f7-button>
                <f7-button tab-link="#minuteur">Minuteurs</f7-button>
              </f7-buttons>
            </f7-subnavbar>

            <f7-page tabs no-page-content>
              <f7-page-content tab active id="event">
                <my-block-event></my-block-event>

              </f7-page-content>

              <f7-page-content tab id="minuteur">
                 Tab 2 Content ...
              </f7-page-content>
            </f7-page>

            <!-- Bouton Add Event -->
            <f7-link @click="checkTabs" :href="linkAdd">
              <f7-fab color="pink">
                  <f7-icon f7="add"></f7-icon>
              </f7-fab>
            </f7-link>

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
  methods: {
    checkTabs: function(){
      this.tabActive = document.getElementsByClassName('active tab-link')[0].text;
      if(this.tabActive == 'Évènements'){
        this.linkAdd = '/addevent/';
      } else if (this.tabActive == 'Minuteurs'){
        this.linkAdd = '/addminuteur/';
      }
    }
  }
}
</script>