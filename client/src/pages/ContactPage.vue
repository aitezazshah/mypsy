<template>
    <q-layout class="layout">
        <ContactComponent/>
        <FooterSection/>
    </q-layout>
</template>

<script setup>
import ContactComponent from 'src/components/contactPage/ContactComponent.vue'
import FooterSection from 'src/components/homePage/FooterSection.vue'
</script>
<style scoped>
.layout{
    width:100vw;
    height: 100vh;
}
</style>
