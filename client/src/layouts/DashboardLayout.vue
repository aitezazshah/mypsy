<template>
    <q-layout view="lHh Lpr lFf">
        <q-header class="bg-white text-black q-py-sm" style=" border-bottom: 1px solid #D2D3D6;">
            <!-- <q-toolbar :class="$q.screen.lt.md ? 'q-px-md' : ' container q-px-none'"> -->
            <q-toolbar :class="layoutClass" class="q-px-none">
                <img src="/images/mainLogo2.png" style="height: 40px" alt />

                <q-toolbar-title v-if="$q.screen.gt.sm" class="q-gutter-lg">
                    <div class="search-bar q-px-xl flex" v-if="$q.screen.gt.sm">
                        <div class="input_group flex">
                            <div class="q-px-sm">
                                <i class="fa fa-search" size=""></i>
                            </div>

                            <input type="text" class="search xs-text" placeholder="Search Appointments, Patient or etc."
                                style="width:260px">
                        </div>
                    </div>
                </q-toolbar-title>
                <q-space v-if="$q.screen.lt.md"></q-space>
                <div class="menu-bar">
                    <q-icon name="fa-regular fa-bell q-px-xs" size="xs" style="color:lightslategrey" />
                    <q-icon v-if="$q.screen.gt.sm" name="fa-regular fa-question-circle  q-px-md" size="xs"
                        style="color:lightslategrey" />

                    <div class="image-div"></div>
                    <div v-if="$q.screen.gt.sm" class="bio q-px-sm">
                        <p class="name">Stephen Conley</p>
                        <p class="profession">Cardiologist</p>
                    </div>
                    <i v-if="$q.screen.gt.sm" class="fa fa-caret-down q-px-sm" style="color:lightslategrey"></i>

                    <q-btn v-else color="black" round flat icon="menu" dense>
                        <q-menu>
                            <q-list style="min-width: 140px">
                                <q-item clickable v-close-popup>
                                    <q-item-section class="text-center xs-text">Dashboard</q-item-section>
                                </q-item>
                                <q-item clickable v-close-popup>
                                    <q-item-section class="text-center xs-text">Appointment</q-item-section>
                                </q-item>
                                <q-item clickable v-close-popup>
                                    <q-item-section class="text-center xs-text">Schedule Timings</q-item-section>
                                </q-item>
                                <q-item clickable v-close-popup>
                                    <q-item-section class="text-center xs-text">Message</q-item-section>
                                </q-item>
                                <q-item clickable v-close-popup>
                                    <q-item-section class="text-center xs-text">Payments</q-item-section>
                                </q-item>
                                <q-item clickable v-close-popup>
                                    <q-item-section class="text-center xs-text">Settings</q-item-section>
                                </q-item>
                                <q-item clickable v-close-popup>
                                    <q-item-section class="text-center">
                                        <q-btn color="primary" label="Log Out" class="q-px-lg xs-text" no-caps
                                            unelevated />
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
    name: "DashboardLayout",

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
<style scoped>
.search {
    border: none;
    outline: none;
    border-radius: 15px;
}

.input_group {
    border-radius: 15px;
    border: 1px solid gray !important;
}

.input_group i {
    color: gray !important;
}

.menu-bar {
    display: flex;
    justify-content: center;
    align-items: center;
}

.image-div {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    background-image: url(../assets/doctor-1.jpg);
    background-size: cover;
    background-position: top center;

}

.name {
    font-size: 14px;
    color: black;
    font-weight: 600;
}

.profession {
    font-size: 12px;
    color: #8A99B5;
    font-weight: 400;
}
</style>
