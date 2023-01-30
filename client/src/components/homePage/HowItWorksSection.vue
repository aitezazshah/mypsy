<template>
  <div
    class="padding-y-md bg-secondary rounded-border"
    :class="$q.screen.lt.md ? 'q-mx-md' : 'container'"
    style="position: relative;"
  >
    <div v-if="$q.screen.gt.sm" style="position: absolute; top: -40px;">
      <img src="/images/howItWorksIcon1.png" alt="icon" />
    </div>
    <div v-if="$q.screen.gt.sm" style="position: absolute; bottom: 20px; right: -30px;">
      <img src="/images/howItWorksIcon2.png" alt="icon" />
    </div>
    <div class="text-center text-bold md-text">How it works</div>
    <div class="row" style="width: 90%; margin: 0 auto; margin-top: 40px;">
      <div class="col-xs-12 col-sm-12 col-md-4" :class="$q.screen.lt.md ? 'text-center' : ''">
        <div>
          <q-avatar square style="width: 58px; height: 60px;">
            <img src="/images/icon1.png" alt="icon" />
          </q-avatar>
          <div class="q-my-md sm-text">Inscrivez-vous!</div>
          <div class="xs-text text-dark">
            <div>Inscrivez-vous en 2 clics, et</div>
            <div>commencer votre bien être journey.</div>
          </div>
        </div>
      </div>
      <div
        class="col-xs-12 col-sm-12 col-md-4"
        :class="$q.screen.lt.md ? 'text-center q-my-lg' : ''"
      >
        <q-avatar square style="width: 58px; height: 60px;">
          <img src="/images/icon6.png" alt="icon" />
        </q-avatar>
        <div class="q-my-md sm-text">Choisissez votre Praticien</div>
        <div class="xs-text text-dark">
          <div>Choisir votre praticien parmi les</div>
          <div>dizaines de praticiens disponible sur</div>
          <div>notre platefome.</div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-4" :class="$q.screen.lt.md ? 'text-center' : ''">
        <q-avatar square style="width: 58px; height: 60px;">
          <img src="/images/icon2.png" alt="icon" />
        </q-avatar>
        <div class="q-my-md sm-text">Prenez rendez-vous!</div>
        <div class="xs-text text-dark">
          <div>Sélectionner la date disponible qui</div>
          <div>vous convient et confirmer la par un</div>
          <div>paiement sécurisé avec votre carte.</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>
