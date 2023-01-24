<template>
  <div class="q-py-xl bg-accent text-white">
    <div
      v-if="$q.screen.gt.sm"
      :class="$q.screen.lt.md ? 'q-mx-md' : 'first-section-container'"
      class="row"
    >
      <div class="col-xs-12 col-sm-12 col-md-8">
        <div class="row">
          <div class="col-auto q-px-xs q-pt-xs xs-text">Follow us:</div>
          <div class="col-auto q-px-xs">
            <q-btn color="primary" size="sm" icon="fa-brands fa-facebook" round unelevated />
          </div>
          <div class="col-auto q-px-xs">
            <q-btn class="follow-btn-bg" size="sm" icon="fa-brands fa-twitter" round unelevated />
          </div>
          <div class="col-auto q-px-xs">
            <q-btn class="follow-btn-bg" size="sm" icon="fa-brands fa-instagram" round unelevated />
          </div>
          <div class="col-auto q-px-xs">
            <q-btn class="follow-btn-bg" icon="fa-brands fa-youtube" size="sm" round unelevated />
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-4 text-right">
        <div class="row">
          <div class="col-auto q-px-xs q-pt-sm xs-text">Get the Newsletter</div>
          <div class="col q-px-xs">
            <q-input
              v-model="text"
              dense
              label-color="white"
              bg-color="follow-btn-bg"
              type="text"
              color="white"
              label="Your email address"
              outlined
              class="text-white newsletter"
            >
              <template v-slot:append>
                <q-btn color="primary" label="Subscribe" no-caps unelevated />
              </template>
            </q-input>
          </div>
        </div>
      </div>
    </div>
    <div v-if="$q.screen.lt.md" class="text-center">
      <div class="text-center sm-text">Follow us:</div>
      <div class="q-mt-md q-gutter-x-sm">
        <q-btn color="primary" size="sm" icon="fa-brands fa-facebook" round unelevated />
        <q-btn class="follow-btn-bg" size="sm" icon="fa-brands fa-twitter" round unelevated />
        <q-btn class="follow-btn-bg" size="sm" icon="fa-brands fa-instagram" round unelevated />
        <q-btn class="follow-btn-bg" icon="fa-brands fa-youtube" size="sm" round unelevated />
      </div>
      <div class="text-center sm-text q-mt-lg">Get the Newsletter</div>
      <div class="q-px-md q-mt-md">
        <q-input
          v-model="text"
          dense
          label-color="white"
          bg-color="follow-btn-bg"
          type="text"
          color="white"
          label="Your email address"
          outlined
          class="text-white newsletter"
        />
        <q-btn
          color="primary"
          label="Subscribe"
          no-caps
          unelevated
          class="full-width q-mt-sm q-py-sm xs-text"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style>
.newsletter.q-field--outlined .q-field__control {
  border-radius: 4px;
  padding: 0 12px;
  padding-right: 3px;
  border: 1px solid white;
}
</style>
