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
    }
  }

  .page-content{
    padding-top: 239px;
  }

  h1{
    font-family: "Grifo-M-Bold" !important;
    letter-spacing: 1px;
    margin-bottom: 0;
    color: rgba(136, 80, 73, 0.5) !important;
  }

  h2{
    margin: 0;
    font-family: "Interstate-Light" !important;
    color: #c4a5a0 !important;
    font-size: 11px;
    letter-spacing: 0.8px;
  }

  h3{
    font-family: "Interstate-Light" !important;
    color: #caa5a4;
    margin-bottom: 10px;
    letter-spacing: 0.8px;

    &.createur{
      margin-top: 26px;
    }
  }

  li{
    font-family: "Interstate-Light" !important;
    color: rgba(49, 37, 37, 0.5) !important;
    letter-spacing: 1.3px;
    list-style: none;
  }

  ul{
    padding: 0;
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

      <h1>Orai</h1>
      <h2>2017 - Gobelins, l’école de l’image</h2>

      <h3 class="createur">Créateurs</h3>
      <ul>
        <li>Anaïs Maxin - Designer</li>
        <li>Aurélie Rémina - Designer</li>
      </ul>
      <ul>
        <li>Phuong Nghi Nguyen - Développeuse</li>
        <li>Kévin Moutier - Développeur</li>
      </ul>

      <h3>Remerciements</h3>
      <ul>
        <li>Véronique Ficara</li>
        <li>Julien Mahe</li>
      </ul>

      
    </f7-block>

  </f7-page>
</template>

<script>

export default {


}
</script>

