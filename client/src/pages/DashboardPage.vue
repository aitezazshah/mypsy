<template>
    <q-layout class="layout">

        <LeftSideBar />
        <CardComponent />
        <ChartComponent />
        <div class="component">
            <AppointmentComponent />
            <PatientStatsComponent />
            <CurrentAppointmentComponent/>
        </div>




    </q-layout>
</template>

<script setup>
import LeftSideBar from 'src/components/dashboardPage/LeftSideBar.vue'
import CardComponent from 'src/components/dashboardPage/CardComponent.vue'
import ChartComponent from 'src/components/dashboardPage/ChartComponent.vue'
import AppointmentComponent from 'src/components/dashboardPage/AppointmentComponent.vue'
import PatientStatsComponent from 'src/components/dashboardPage/PatientStatsComponent.vue'
import CurrentAppointmentComponent from 'src/components/dashboardPage/CurrentAppointmentComponent.vue'


</script>
<style scoped>
.layout {
    background-color: #E5E5E5;
    height: auto;
}

.component {
    display: flex;
    justify-content: space-between;
    
}

@media(min-width: 1024px) and (max-width:1164px) {
    .component {
        flex-wrap: wrap;


    }

}

@media(max-width: 768px) {
    .component {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}
</style>
