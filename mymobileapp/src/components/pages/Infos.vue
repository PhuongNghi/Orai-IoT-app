<style lang="scss">

.infos-page{
  .navbar{
      height: 193px;
      background: url('../../assets/informations.svg');
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
    top: 143px !important;
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
    }
  }
}

</style>

<template>  
  <f7-page class="infos-page">
    <f7-navbar title="" back-link="Back" sliding>
      <f7-nav-right>
        <f7-link icon="icon-bars" open-panel="right"></f7-link>
      </f7-nav-right>
      <f7-subnavbar class="header-title-createEvent">
      <f7-block class="header-title-content">INFORMATIONS</f7-block>
      </f7-subnavbar>
    </f7-navbar>

    <f7-block class="">
      
    </f7-block>

  </f7-page>
</template>

<script>

export default {


}
</script>

