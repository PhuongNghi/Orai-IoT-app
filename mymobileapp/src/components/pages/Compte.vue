<style lang="scss">

.compte-page{
  .navbar{
      height: 193px;
      background: url('../../assets/account.svg');
      background-repeat: no-repeat;
      background-size: cover;

      &::after{
        display: none;
      }

      .right, .left{
        position: relative;
        top: -50px;
      }
  }

  .header-title-createEvent{
    top: 194px !important;
    border: none;
    background-color: rgba(255, 240, 222, 0.6);
    height: 51px;

    &::after{
      display: none;
    }

    .header-title-content{
      color: rgba(136, 80, 73, 0.5) !important;
      font-family: "Interstate-Light" !important;
      font-size: 14px;
      letter-spacing: 1px;
      padding: 0;
      line-height: 30px;

      .picto-deco{
        display: block;
        background-image: url('../../assets/icon/person.svg');
        background-repeat: no-repeat;
        width: 29px;
        height: 30px;
        background-size: 21px;
        float: left;
        background-position-y: 2px;
        margin-right: 6px;
        margin-left: 8px;
      }
    }
  }

  .compte-main-wrap{
   padding-top: 205px;

    h1{
      font-size: 24px;
      font-family: "Grifo-M-Bold" !important;
      letter-spacing: 1px;
      color: #9B3C80;
    }

    p{
      font-size: 17px;
      font-family: "Interstate-Light" !important;
      color: rgba(136, 80, 73, 0.5) !important;
      letter-spacing: 0.5px;
    }

    span{
      color: #9B3C80 !important;
    }
  }

  .compte-options{ 
    background: -webkit-linear-gradient(#FFF6EF, #FFFFFF) !important;
    background: linear-gradient(#FFF6EF, #FFFFFF) !important;
    height: 100px;

    .getfriends-wrap{
      padding-top: 19px;

      .getfriends{
        background-image: url('../../assets/icon/getfriends.svg');
        background-repeat: no-repeat;
        width: 29px;
        height: 30px;
        background-size: 24px;
        float: left;
      }

      .item-title{
        font-family: "Interstate-Light" !important;
        color: rgba(136, 80, 73, 0.5) !important;
        font-size: 17px;
        letter-spacing: 0.5px;
        width: 100vw;
        padding-left: 37px;
      }
    }
  }

  .page-content{
    padding-top: 37px;
  }
}

</style>

<template>  
  <f7-page class="compte-page">
    <f7-navbar title="" back-link="Back" sliding>
      <f7-nav-right>
        <f7-link icon="icon-bars" open-panel="right"></f7-link>
      </f7-nav-right>
      <f7-subnavbar class="header-title-createEvent">
      <f7-block class="header-title-content">
      <span class="picto-deco"></span> MON COMPTE</f7-block>
      </f7-subnavbar>
    </f7-navbar>

    <f7-block class="compte-main-wrap">
      <h1>Véro</h1>
      <p>Vous avez écoulé <span>5 min</span> d’attente sur votre sablier, félicitations !</p>
    </f7-block>

    <f7-block class="compte-options">
      <div class="item-content getfriends-wrap">
        <div class="item-media getfriends"></div>
        <div class="item-inner">
          <div class="item-title">Chercher des amis</div>
        </div>
      </div>
    </f7-block>

    <f7-button class="add-button" @click="logout">
       <span>Se déconnecter</span>
    </f7-button>

  </f7-page>
</template>

<script>

export default {

  methods: {
    logout(){
      sessionStorage.setItem("user", "Phuong-Nghi");
      location.reload();
      // console.log("COUCOU");
    }
  }

}
</script>

