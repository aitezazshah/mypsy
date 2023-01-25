<template>
    <q-layout class="layout">

        <LeftSideBar />
        <CardComponent />
        <ChartComponent />


    </q-layout>
</template>

<script setup>
import LeftSideBar from 'src/components/dashboardPage/LeftSideBar.vue'
import CardComponent from 'src/components/dashboardPage/CardComponent.vue'
import ChartComponent from 'src/components/dashboardPage/ChartComponent.vue'


</script>
<style scoped>
.layout {
    background-color: #E5E5E5;
}
</style>
