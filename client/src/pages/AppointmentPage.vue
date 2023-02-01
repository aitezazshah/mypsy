<template>
    <q-page style="background-color:#E5E5E5;">
        <div class="main-container container">
            
            <FiltersComponent />
            <AppointmentComponent />
        </div>
        
        <FooterSection />
    </q-page>
</template>

<script setup>

import FooterSection from 'src/components/homePage/FooterSection.vue'
import FiltersComponent from 'src/components/appointmentPage/FiltersComponent.vue'
import AppointmentComponent from 'src/components/appointmentPage/AppointmentComponent.vue';
</script>
<style scoped>
.main-container{
border: 1px solid red;
display: flex;
height: 800px;
}
/* @media (max-width:1024px) {
    .main-container{
        flex-direction: column;
    }
} */
</style>
