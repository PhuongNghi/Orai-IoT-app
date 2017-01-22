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

    <!-- Left Panel -->
    <f7-panel left reveal layout="dark">
      <f7-view id="left-panel-view" navbar-through :dynamic-navbar="true">
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
                <f7-link icon="icon-bars" open-panel="left"></f7-link>
              </f7-nav-left>
              <f7-nav-center sliding>Oraï App</f7-nav-center>
              <f7-nav-right>
                <f7-link href="/add/">
                  <f7-icon f7="add_round_fill"></f7-icon>
                </f7-link>
              </f7-nav-right>
            </f7-navbar>
            <f7-list>

              <f7-list-group>
                <f7-block class="progress-event-actif">
                    <f7-progressbar :progress="30" color="blue"></f7-progressbar>
                </f7-block>
                <f7-list-item title="Retour d'Antoine"></f7-list-item>

              <f7-list-group>
                <f7-block class="progress-event-actif">
                    <f7-progressbar :progress="0" color="orange"></f7-progressbar>
                </f7-block>
                <f7-list-item title="Dessins animés Camille"></f7-list-item>
              </f7-list-group>
            </f7-list>


          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-views>

    <!-- Popup -->
<!--     <f7-popup id="popup">
      <f7-view navbar-fixed>
        <f7-pages>
          <f7-page>
            <f7-navbar title="Popup">
              <f7-nav-right>
                <f7-link close-popup>Close</f7-link>
              </f7-nav-right>
            </f7-navbar>
            <f7-block>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, architecto. Cupiditate laudantium rem nesciunt numquam, ipsam. Voluptates omnis, a inventore atque ratione aliquam. Omnis iusto nemo quos ullam obcaecati, quod.</f7-block>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-popup>
 -->
    <!-- Login Screen -->
<!--     <f7-login-screen id="login-screen">
      <f7-view>
        <f7-pages>
          <f7-page login-screen>
            <f7-login-screen-title>Login</f7-login-screen-title>
            <f7-list form>
              <f7-list-item>
                <f7-label>Username</f7-label>
                <f7-input name="username" placeholder="Username" type="text"></f7-input>
              </f7-list-item>
              <f7-list-item>
                <f7-label>Password</f7-label>
                <f7-input name="password" type="password" placeholder="Password"></f7-input>
              </f7-list-item>
            </f7-list>
            <f7-list>
              <f7-list-button title="Sign In" close-login-screen></f7-list-button>
              <f7-list-label>
                <p>Click Sign In to close Login Screen</p>
              </f7-list-label>
            </f7-list>
          </f7-page>
        </f7-pages>
      </f7-view>
    </f7-login-screen> -->

  </div>
</template>

<script>
export default {}
</script>