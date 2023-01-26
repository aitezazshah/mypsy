<template>
    <q-layout class="layout">

        <LeftSideBar />
        <CardComponent />
        <ChartComponent />
    <div class="component">
        <AppointmentComponent/>
        <PatientStatsComponent />
        </div>
        
      


    </q-layout>
</template>

<script setup>
import LeftSideBar from 'src/components/dashboardPage/LeftSideBar.vue'
import CardComponent from 'src/components/dashboardPage/CardComponent.vue'
import ChartComponent from 'src/components/dashboardPage/ChartComponent.vue'
import AppointmentComponent from 'src/components/dashboardPage/AppointmentComponent.vue'
import PatientStatsComponent from 'src/components/dashboardPage/PatientStatsComponent.vue'


</script>
<style scoped>
.layout {
    background-color: #E5E5E5;
}
.component{
    border: 2px solid red;
    display: flex;
}

</style>
