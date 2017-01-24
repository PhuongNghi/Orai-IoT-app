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
              <f7-list-item link="/compte/" title="Compte"></f7-list-item>
              <f7-list-item link="/infos/" title="Information"></f7-list-item>
              <f7-list-item link="#" title="Mettre en veille" class="veille"></f7-list-item>
            </f7-list>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-panel>

    <!-- Main Views -->
    <f7-views>
      <f7-view id="main-view" navbar-through :dynamic-navbar="true" main>

        
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

            <my-block-event-actif></my-block-event-actif>
            <my-block-event></my-block-event>

            <!-- Bouton Add Event -->
            <f7-link href="/add/">
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
import BlockEventActif from 'components/blockeventactif'
import BlockEvent from 'components/blockevent'

export default {

  components: {
    MyBlockEventActif: BlockEventActif,
    MyBlockEvent: BlockEvent
  },
  data(){
    return{

    }
  }
}
</script>