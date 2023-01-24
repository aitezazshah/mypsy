<template>
  <div class :class="$q.screen.lt.md ? 'q-mx-md q-py-xl' : 'container padding-y q-px-md'">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-6 text-center">
        <!-- <img style="max-width: 80%; margin: 0 auto;" src="/images/groupIcon3.png" alt="icon" /> -->
        <img style="max-width: 80%; margin: 0 auto;" src="/images/Group.svg" alt="icon" />
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6">
        <div style="width: max-content; margin: 0 auto;">
          <div class="md-text q-pt-xl text-dark-page">
            <div>Votre praticien à</div>
            <div>porter de main</div>
          </div>
          <div class="q-mt-xl xs-text">
            <div>Plus besoin de vous déplacer pour votre consultation, un</div>
            <div>praticien spécialisé est dans votre poche, ou vous voulez,</div>
            <div>quand vous voulez !</div>
          </div>
        </div>
      </div>
    </div>
    <div class="row" :class="$q.screen.lt.md ? '' : 'q-mt-xl'">
      <div
        v-if="$q.screen.lt.md"
        class="col-xs-12 col-sm-12 col-md-6 text-center"
        :class="$q.screen.lt.md ? 'q-mt-xl' : ''"
      >
        <img style="max-width: 80%; margin: 0 auto;" src="/images/groupIcon4.png" alt="icon" />
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6">
        <div style="width: max-content; margin: 0 auto;">
          <div class="md-text q-pt-xl text-dark-page">
            <div>En toute discrétion!</div>
          </div>
          <div class="q-mt-xl xs-text">
            <div>Notre plateforme garantie une discrétion maximum pour</div>
            <div>vos informations ainsi que la téléconsultation ...</div>
          </div>
        </div>
      </div>
      <div
        v-if="$q.screen.gt.sm"
        class="col-xs-12 col-sm-12 col-md-6 text-center"
        :class="$q.screen.lt.md ? 'q-mt-xl' : ''"
      >
        <img style="max-width: 80%; margin: 0 auto;" src="/images/groupIcon4.png" alt="icon" />
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss">
</style>
