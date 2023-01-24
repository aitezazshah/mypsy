<template>
  <div class :class="$q.screen.lt.md ? 'q-mx-md q-py-xl' : 'container padding-y'">
    <div class="row">
      <div v-if="$q.screen.gt.sm" class="col-xs-12 col-sm-12 col-md-6 text-center">
        <img style="max-width: 80%; margin: 0 auto;" src="/images/groupIcon1.png" alt="icon" />
      </div>
      <div class="col-xs-12 col-sm-12 col-md-6">
        <div :class="$q.screen.sm ? 'text-center' : ''">
          <div class="md-text text-h4">
            <div>Start Your Free Trial</div>
          </div>
          <div class="q-mt-md text-dark xs-text">
            <div>Signup Now. Its free and takes less than 3 minutes</div>
          </div>
        </div>
        <div
          class="q-mt-lg"
          style="max-width: 500px"
          :style="$q.screen.sm ? 'max-width: 500px; margin: 0 auto; margin-top: 20px;': ''"
        >
          <q-form>
            <div>
              <div class="text-dark xs-text">
                FULL NAME
                <sup>*</sup>
              </div>
              <div class="q-mt-xs">
                <q-input v-model="fullName" type="text" outlined dense />
              </div>
            </div>
            <div class="q-mt-md">
              <div class="text-dark xs-text">
                EMAIL
                <sup>*</sup>
              </div>
              <div class="q-mt-xs">
                <q-input v-model="email" type="text" outlined dense placeholder="e.g:" />
              </div>
            </div>
            <div class="q-mt-md">
              <div class="text-dark xs-text">
                PASSWORD
                <sup>*</sup>
              </div>
              <div class="q-mt-xs">
                <q-input v-model="password" type="password" outlined dense placeholder="xxxxxxxx" />
              </div>
            </div>
            <div class="q-mt-md">
              <q-btn
                color="primary"
                class="q-px-lg xs-text"
                label="GET STARTED FOR FREE"
                unelevated
              />
            </div>
          </q-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const fullName = ref('')
const email = ref('')
const password = ref('')
</script>

<style>
</style>
