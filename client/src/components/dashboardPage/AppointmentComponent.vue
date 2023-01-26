
<template>
    <div class="appointments q-mt-lg">
        <div class="heading">
            <q-label class="app-req">Appointment Requests</q-label>
            <q-label class="view-all">View All <q-icon class="fa fa-caret-right" /></q-label>
        </div>
        <div class="appointment_list q-mt-md" style="background-color:white; height:auto; border-radius:10px;">
            <q-list class="q-py-sm">
                <div v-for="appointment in appointments" :key="appointment.id" class="list">
                    <div class="img_data">
                        <q-img :src="appointment.image" class="avatar rounded-image" />
                        <div class="data">
                            <label style="font-size:16px; color:#51545C">{{ appointment.name }}</label>
                            <label style="font-size:14px; color:#83878F">{{ appointment.date }}</label>
                        </div>
                    </div>

                    <div>
                        <button v-if="appointment.status === 'confirmed'" class="confirmed">Confirmed</button>
                        <button v-else class="declined">Declined</button>
                    </div>
                </div>
            </q-list>
        </div>
    </div>


</template>
<script>

import image from '../../assets/img-5.jpg';
import image_1 from '../../assets/img-1.jpg';
export default {

    data() {
        return {
            appointments: [
                { id: 1, name: 'Savannah Nguyen', date: '45 Male, 12 April, 9:30', status: 'declined', image: image },
                { id: 2, name: 'Jacob Jones', date: '45 Male, 12 April, 9:30', status: 'confirmed', image: image_1 },
                { id: 1, name: 'Cody Fisher', date: '45 Male, 12 April, 9:30', status: 'declined', image: image },
                { id: 2, name: 'Ronald Richards', date: '45 Male, 12 April, 9:30', status: 'confirmed', image: image_1 },
                { id: 1, name: 'Darlene Robertson', date: '45 Male, 12 April, 9:30', status: 'declined', image: image_1 },
                { id: 2, name: 'Floyd Miles', date: '45 Male, 12 April, 9:30', status: 'declined', image: image },
                { id: 1, name: 'Marvin McKinney', date: '45 Male, 12 April, 9:30', status: 'confirmed', image: image_1 },

                
            ]
        }
    }
}

</script>

<style lang="scss" scoped>
.appointments {
    height: 538px;
    width: 418px;
    margin-left: 260px;
    // overflow-y: scroll;
}

.heading {
    display: flex;
    justify-content: space-between;
}

.app-req {
    font-size: 18px;
    font-weight: 600;
}

.view-all {
    color: $primary;
}

.rounded-image {
    border-radius: 50%;
    width: 54px;
    height: 54px;
    background-size: cover;
    background-position: center;
}

.list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
}

.img_data {
    display: flex;
}

.data {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;
}

button {
    width: 82px;
    height: 30px;
    border-radius: 5px;
}

.confirmed {
    background-color: #00A18B1A;
    color: $primary;
    border: 1px solid $primary;


}

.declined {
    background-color: #FF52631A;
    
    color: #FF5263;
    border: 1px solid #FF5263;
}
</style>
