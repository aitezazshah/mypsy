<template>
  <div class="bg-secondary padding-y">
    <div :class="$q.screen.lt.md ? 'q-mx-md' : 'container'">
      <div class="text-center md-text">Price And Package</div>
      <div
        class="q-mt-xl q-pt-lg row"
        :style="$q.screen.gt.sm ? 'width: 85%; margin: 0 auto;' : ''"
      >
        <div class="col-xs-12 col-sm-12 col-md-4 q-my-md q-px-sm">
          <div
            class="bg-white rounded-border-sm q-px-md q-py-lg text-center relative-position"
            style="height: 450px; max-width: 350px; margin: 0 auto;"
          >
            <div class="sm-text">BASIC</div>
            <div class="md-2-text q-my-sm text-primary">3000 DA</div>
            <div style="border-bottom: 1px dashed #E3E4E5;"></div>
            <div class="q-mt-md text-dark xs-text">1 Heure</div>
            <div class="q-mt-md text-dark xs-text">250 objects per project</div>
            <div class="q-mt-md text-dark xs-text">One Active User</div>
            <div class="absolute-bottom q-mb-lg" style>
              <q-btn
                color="primary"
                outline
                label="Choisir ce plan"
                no-caps
                class="q-px-lg xs-text"
              />
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-4 q-my-md q-px-sm">
          <div
            class="bg-white rounded-border-sm q-px-md q-py-lg text-center relative-position"
            style="height: 450px; max-width: 350px; margin: 0 auto;"
          >
            <div
              class="absolute-top rounded-border bg-red-6 q-px-sm xs-text text-white"
              style="width: max-content; margin: 0 auto; margin-top: -10px;"
            >MOST POPULAR!</div>
            <div class="sm-text">SILVER</div>
            <div class="md-2-text q-my-sm text-primary">5000 DA</div>
            <div style="border-bottom: 1px dashed #E3E4E5;"></div>
            <div class="q-mt-md text-dark xs-text">2 Heure</div>
            <div class="q-mt-md text-dark xs-text">800 objects per project</div>
            <div class="q-mt-md text-dark xs-text">10 Active Users</div>
            <div class="q-mt-md text-dark xs-text">Team Collaboration</div>
            <div class="absolute-bottom q-mb-lg" style>
              <q-btn
                color="primary"
                label="Choisir ce plan"
                no-caps
                unelevated
                class="q-px-lg xs-text"
              />
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-4 q-my-md q-px-sm">
          <div
            class="bg-white rounded-border-sm q-px-md q-py-lg text-center relative-position"
            style="height: 450px; max-width: 350px; margin: 0 auto;"
          >
            <div class="sm-text">GOLD</div>
            <div class="md-2-text q-my-sm text-primary">8000 DA</div>
            <div style="border-bottom: 1px dashed #E3E4E5;"></div>
            <div class="q-mt-md text-dark xs-text">3 Heure</div>
            <div class="q-mt-md text-dark xs-text">Plan spécialisé pour vous</div>
            <div class="q-mt-md text-dark xs-text">Suivi par le même praticien</div>
            <div class="q-mt-md text-dark xs-text">Accès complet au site</div>
            <div class="q-mt-md text-dark xs-text">Support prioritaire</div>
            <div class="absolute-bottom q-mb-lg" style>
              <q-btn
                color="primary"
                outline
                label="Choisir ce plan"
                no-caps
                class="q-px-lg xs-text"
              />
            </div>
          </div>
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
