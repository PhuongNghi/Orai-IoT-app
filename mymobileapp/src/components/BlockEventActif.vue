<style lang="scss">

</style>

<template>
  <div>
      <f7-list-group class="progress-event actif" v-for="event in events">
          <f7-link :href="event.url">
            <f7-block>
                <f7-progressbar :progress="event.progress" :color="event.color"></f7-progressbar>
            </f7-block>
            <f7-list-item :title="event.name">
            </f7-list-item>
          </f7-link>
      </f7-list-group>

  </div>
</template>

<script>
export default {

  data () {
    return {
      events: [
        {
          url: '/detail/1',
          name: 'Retour d\'Antoine',
          progress: 30,
          color: 'blue'
        }
      ]
    }
  }

}
</script>

