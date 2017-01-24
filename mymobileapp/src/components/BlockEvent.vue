<style lang="scss">

</style>

<template>
  <div>
    <f7-list-group class="progress-event" v-for="event in events">
      <f7-link :href="event.url">
        <f7-block>
            <f7-progressbar :progress="event.progress" :color="event.color"></f7-progressbar>
        </f7-block>
        <f7-list-item :title="event.name">
        <f7-button class="btn-send-to-sablier">Sablier</f7-button>
        </f7-list-item>
      </f7-link>
    </f7-list-group>
  </div>
</template>

<script>
export default {

  data () {
    return {
      timeRemaining: '',
      events: [
        {
          url: '/detail/2',
          name: 'Dessins animés Camille',
          progress: 100,
          color: 'orange'
        },
        {
          url: '/detail/3',
          name: 'La sortie du nouveau Zelda',
          progress: 10,
          color: 'red'
        }
      ]
    }
  }

}
</script>

