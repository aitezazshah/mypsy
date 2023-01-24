<template>
  <div class="padding-y bg-accent" style="position: relative;">
    <div v-if="$q.screen.gt.sm" style="position: absolute; bottom: 0px">
      <img src="/images/primaryIcon1.png" alt="icon" />
    </div>
    <div v-if="$q.screen.gt.sm" style="position: absolute; top: 0px; right: 0px;">
      <img src="/images/primaryIcon2.png" alt="icon" />
    </div>
    <div :class="$q.screen.lt.md ? 'q-mx-md ' : 'container'" class="row">
      <div class="col-xs-12 col-sm-12 col-md-4 text-center text-white q-my-md">
        <div>
          <q-avatar square size="45px">
            <img src="/images/icon3.png" alt="icon" />
          </q-avatar>
        </div>
        <div class="q-my-md sm-text">Primary Benefit One</div>
        <div class="xs-text">
          <div>Describe a key benefit that your product</div>
          <div>provides for your customers – and explain the</div>
          <div>impact it can have</div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-4 text-center text-white q-my-md">
        <div>
          <q-avatar square size="45px">
            <img src="/images/icon4.png" alt="icon" />
          </q-avatar>
        </div>
        <div class="q-my-md sm-text">Primary Benefit Two</div>
        <div class="xs-text">
          <div>Describe a key benefit that your product</div>
          <div>provides for your customers – and explain the</div>
          <div>impact it can have</div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-4 text-center text-white q-my-md">
        <div>
          <q-avatar square size="45px">
            <img src="/images/icon5.png" alt="icon" />
          </q-avatar>
        </div>
        <div class="q-my-md sm-text">Primary Benefit Three</div>
        <div class="xs-text">
          <div>Describe a key benefit that your product</div>
          <div>provides for your customers – and explain the</div>
          <div>impact it can have</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss">
</style>
