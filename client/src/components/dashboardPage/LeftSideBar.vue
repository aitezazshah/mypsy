<template>
    <q-drawer v-if="$q.screen.gt.sm" show-if-above side="left" behavior="desktop" :width="250" class="colorBackground">
        <q-sidebar-left ref="leftSidebar" class="sidebar q-px-sm q-py-lg" bg-color="primary" text-color="white">
                <q-item v-for="item in menuItems" :key="item.id" clickable
                    :class="{'my-menu-link': item.id === 1, 'my-menu-link-1': item.id !== 1}">
                <q-item-section avatar>
                    <q-icon :name="item.icon" size="xs" />
                </q-item-section>
                <q-item-section>
                    <q-item-label>{{ item.label }}</q-item-label>
                </q-item-section>
            </q-item>
        </q-sidebar-left>
    </q-drawer>
</template>

<script>
export default {
    data() {
        return {
            menuItems: [
                {
                    id: 1,
                    label: 'Dashboard',
                    icon: 'fa fa-gauge',
                },
                {
                    id: 2,
                    label: 'Appointment',
                    icon: 'fa-regular fa-calendar',
                },
                {
                    id: 3,
                    label: 'Schedule Timings',
                    icon: 'fa-regular fa-clock',
                },
                {
                    id: 4,
                    label: 'Message',
                    icon: 'fa-regular fa-envelope',
                },
                {
                    id: 5,
                    label: 'Payments',
                    icon: 'fa-regular fa-credit-card',
                },
                {
                    id: 6,
                    label: 'My Patient',
                    icon: 'fa-regular fa-user',
                },
                {
                    id: 7,
                    label: 'Settings',
                    icon: 'fa fa-gear',
                }
            ]
        }
    }
}
</script>


<style lang="scss" scoped>
.my-menu-link {
    background-color: $primary;
    margin-top:5px;
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
