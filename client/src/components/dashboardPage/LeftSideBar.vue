<template>
<!-- <q-layout v-if="$q.screen.gt.sm" view="lHh" class="layout"> -->

    <q-drawer v-if="$q.screen.gt.sm"  show-if-above side="left" behavior="desktop" :width="250" class="colorBackground">
    
    
    <q-sidebar-left  ref="leftSidebar" class="sidebar q-px-sm q-py-lg" bg-color="primary" text-color="white">
        <q-item clickable class="my-menu-link">
        
            <q-item-section avatar>
                <q-icon name="fa fa-gauge" size="xs" />
            </q-item-section>
            <q-item-section>
                <q-item-label>Dashboard</q-item-label>
            </q-item-section>
        </q-item>

        <q-item clickable class="my-menu-link-1">
        
            <q-item-section avatar>
                <q-icon name="fa-regular fa-calendar" size="xs" />
            </q-item-section>
            <q-item-section>
                <q-item-label>Appointment</q-item-label>
            </q-item-section>
        </q-item>
        
        <q-item clickable class="my-menu-link-1">
        
            <q-item-section avatar>
                <q-icon name="fa-regular fa-clock" size="xs" />
            </q-item-section>
            <q-item-section>
                <q-item-label>Schedule Timings</q-item-label>
            </q-item-section>
        </q-item>
        
        <q-item clickable class="my-menu-link-1">
        
            <q-item-section avatar>
                <q-icon name="fa-regular fa-envelope" size="xs" />
            </q-item-section>
            <q-item-section>
                <q-item-label>Message</q-item-label>
            </q-item-section>
        </q-item>
        
        <q-item clickable class="my-menu-link-1">
        
            <q-item-section avatar>
                <q-icon name="fa-regular fa-credit-card" size="xs"  />
            </q-item-section>
            <q-item-section>
                <q-item-label>Payments</q-item-label>
            </q-item-section>
        </q-item><q-item clickable class="my-menu-link-1">
        
            <q-item-section avatar>
                <q-icon name="fa-regular fa-user" size="xs" />
            </q-item-section>
            <q-item-section>
                <q-item-label>My Patient</q-item-label>
            </q-item-section>
        </q-item><q-item clickable class="my-menu-link-1">
        
            <q-item-section avatar>
                <q-icon name="fa fa-gear" size="xs" />
            </q-item-section>
            <q-item-section>
                <q-item-label>Settings</q-item-label>
            </q-item-section>
        </q-item>
    </q-sidebar-left>
  
<!-- </q-layout> -->
</q-drawer>

    
</template>


<script setup>

</script>

<style lang="scss" scoped>
.my-menu-link {
    background-color: $primary;
    color: white;
    border-radius: 6px;
    font-size: 14px;
    
}
.my-menu-link-1 {

    color: $dark;
    border-radius: 6px;
    font-size: 14px;

}

.sidebar{
// width: 20%;
    display: flex;
    flex-direction: column;
   border-radius: 5px;
}
</style>
