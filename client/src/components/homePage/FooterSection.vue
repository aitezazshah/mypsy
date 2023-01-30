<template>
  <div class="text-white q-py-xl q-px-md" style="background: #1F2125; position: relative;">
    <div v-if="$q.screen.gt.sm" style="position: absolute; left: 5.49%; top: 37.45%;">
      <img src="/images/footerIcon1.png" alt="icon" />
    </div>
    <div v-if="$q.screen.gt.sm" style="position: absolute; right: 3.6%; bottom: 8.04%;">
      <img src="/images/footerIcon2.png" alt="icon" />
    </div>
    <div class="text-center">
      <q-btn color="white" label="Features" no-caps flat size="md" class="xs-text" />
      <q-btn color="white" label="About" no-caps flat size="md" class="xs-text" />
      <q-btn color="white" label="Testimonials" no-caps flat size="md" class="xs-text" />
      <q-btn color="white" label="Contact" no-caps flat size="md" class="xs-text" />
      <q-btn color="white" label="Download" no-caps flat size="md" class="xs-text" />
    </div>
    <div class="q-my-md">
      <q-separator
        :style="$q.screen.lt.sm ? 'width: 90%; margin: 0 auto;' : 'width: 30%; margin: 0 auto;'"
        spaced
        inset
        color="grey-9"
      />
    </div>
    <div class="text-center xs-text">
      <div>1717 Harrison St, San Francisco, CA 94103, USA</div>
      <div class="q-mt-xs">© 2022 MyPsy. All rights reserved.</div>
    </div>
  </div>
</template>

<script setup>
</script>

<style>
</style>
