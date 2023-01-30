<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white text-black q-py-sm">
      <!-- <q-toolbar :class="$q.screen.lt.md ? 'q-px-md' : ' container q-px-none'"> -->
      <q-toolbar :class="layoutClass" class="q-px-none">
        <img src="/images/mainLogo2.png" style="height: 40px" alt />

        <q-toolbar-title
          v-if="$q.screen.gt.sm"
          class="text-center text-body1 q-gutter-lg"
        >
          <q-btn flat label="Services" no-caps class="xs-text" />
          <q-btn flat label="Prix" no-caps class="xs-text" />
          <q-btn flat label="Praticien" no-caps class="xs-text" />
          <q-btn flat label="Faq" no-caps class="xs-text" />
        </q-toolbar-title>
        <q-space v-if="$q.screen.lt.md"></q-space>
        <div>
          <q-btn
            v-if="$q.screen.gt.sm"
            color="primary"
            label="Log in"
            class="q-px-lg xs-text"
            no-caps
            unelevated
            onclick="location.href='/#/signin'"
          />
          <q-btn v-else color="black" round flat icon="menu" dense>
            <q-menu>
              <q-list style="min-width: 140px">
                <q-item clickable v-close-popup>
                  <q-item-section class="text-center xs-text"
                    >Services</q-item-section
                  >
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section class="text-center xs-text"
                    >Prix</q-item-section
                  >
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section class="text-center xs-text"
                    >Particien</q-item-section
                  >
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section class="text-center xs-text"
                    >Faq</q-item-section
                  >
                </q-item>
                <q-item clickable v-close-popup>
                  <q-item-section class="text-center">
                    <q-btn
                      color="primary"
                      label="Log in"
                      class="q-px-lg xs-text"
                      no-caps
                      unelevated
                    />
                  </q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "MainLayout",

  components: {},
  computed: {
    layoutClass() {
      if (this.$q.screen.width >= 1024 && this.$q.screen.width <= 1439) {
        return "container";
      } else if (this.$q.screen.width >= 1440) {
        return "layout-container header-padding";
        // return 'container'
      }
      return "q-px-md";
    },
  },
  created() {
    console.log(this.$q.screen.width);
  },

  setup() {
    return {};
  },
});
</script>
