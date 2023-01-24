<template>
  <div class="q-py-xl bg-info">
    <div :class="$q.screen.lt.md ? 'q-mx-md' : 'first-section-container'">
      <div class="row" :class="$q.screen.lt.md ? '' : 'q-mt-xl'">
        <div class="col-xs-12 col-sm-12 col-md-6" style="position: relative;">
          <div v-if="$q.screen.gt.sm" style="position: absolute; left: -35px; top: -20px;">
            <img src="images/headerIcon1.png" alt="icon" />
          </div>
          <div v-if="$q.screen.gt.sm" style="position: absolute; bottom: 10px; right: 10px;">
            <img src="images/headerIcon2.png" alt="icon" />
          </div>
          <div class="text-bold lg-text text-dark-page" :class="$q.screen.lt.md ? '' : 'q-pt-xl'">
            <div>Votre santé mentale</div>
            <div>à quelques clics</div>
          </div>
          <div class="q-mt-xl xs-text black-text">
            <div>Consulter un(e) psychologue ou un assistant(e) en toute sécurité avec</div>
            <div>notre service. Pas besoin de vous déplacer pour être traité...</div>
          </div>
          <div class="q-mt-lg">
            <q-btn
              color="accent"
              class="q-px-xl q-py-md xs-text"
              unelevated
              label="PRENDRE RENDEZ-VOUS"
            />
          </div>
        </div>
        <div
          class="col-xs-12 col-sm-12 col-md-6 text-center"
          :class="$q.screen.lt.md ? 'q-mt-xl' : ''"
        >
          <img style="max-width: 80%; margin: 0 auto;" src="/images/groupIcon2.png" alt="icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>
