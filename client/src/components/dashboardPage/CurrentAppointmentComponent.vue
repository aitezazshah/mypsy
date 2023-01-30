
<template>
    <div class="today_appointments q-mt-lg q-ml-lg">
        <div class="heading">
            <q-label class="app-req">Today Appointments</q-label>
        </div>
        <div class="today_appointment_list q-mt-md" style="background-color:white; height:auto; border-radius:10px;">
            <q-list class="q-py-sm">
                <div v-for="appointment in appointments" :key="appointment.id" class="list"
                    :class="{ 'primary': appointment.status === 'Ongoing' }">
                    <div class="img_data">
                        <q-img :src="appointment.image" class="avatar rounded-image" />
                        <div class="data">
                            <label style="font-size:16px; color:#51545C">{{ appointment.name }}</label>
                            <label style="font-size:14px; color:#83878F">{{ appointment.type }}</label>
                        </div>
                    </div>

                    <div>
                        <button v-if="appointment.status === 'Ongoing'" class="ongoing">{{ appointment.status }}</button>
                        <button v-else class="time">{{ appointment.status }}</button>
                    </div>
                </div>
            </q-list>
        </div>

        <div class="schedule q-mt-md">
            <div class="content">
                <div>
                    <p style="font-size:18px; color:white; font-weight: 600;">Next Week</p>
                    <p style="font-size:14px;color:#E5E5E5;">Upcoming Schedules-2</p>
                </div>
                <button class="open">Open</button>
            </div>
        </div>
    </div>


</template>
<script>

import image from '../../assets/apt-1.jpg';
import image_1 from '../../assets/apt-2.jpg';
import image_2 from '../../assets/apt-3.jpg';
import image_3 from '../../assets/apt-4.jpg';
export default {

    data() {
        return {
            appointments: [
                { id: 1, name: 'Jhon Smith', type: 'Clinic Consulting', status: 'Ongoing', image: image },
                { id: 2, name: 'Frank Murray', type: 'Video Consulting', status: '10:25', image: image_1 },
                { id: 3, name: 'Robert Fox', type: 'Clinic Consulting', status: '10:25', image: image_2 },
                { id: 4, name: 'Savannah Nguyen', type: 'Clinic Consulting', status: '10:25', image: image_3 }
            ]
        }
    }
}

</script>

<style lang="scss" scoped>
.today_appointments {
    height: auto;
    width: 374px;
}

.heading {
    display: flex;
    justify-content: space-between;
}

.app-req {
    font-size: 18px;
    font-weight: 600;
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

.ongoing {
    color: $primary;
    border: none;
    background-color: transparent;
}

.time {
    color: #B7BCC7;
    border: none;
    background-color: transparent;
}

.primary {
    background-color: #00A18B1A;
    border-radius: 10px;
    padding: 5px;
}

.schedule {
    width: 374px;
    height: 91px;
    border-radius: 10px;
    background-color: #1B2432;
    display: flex;
    justify-content: center;
    align-items: center;
}

.content {
    width: 320px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.open {
    width: 67px;
    height: 34px;
    background-color: $primary;
    color: white;
    border: none;
}

@media (min-width: 1024px) and (max-width:1164px) {
    .today_appointments {
        margin-left: 260px;
    }
}

@media (max-width:956px) {
    .today_appointments {

        width: 324px;

    }

    .schedule {
        width: 324px;
       
    }
        .content {
            width: 290px;
            
        }
}
@media (max-width:768px){
    .today_appointments {

        margin-top: 120px;

    }
}
@media (max-width:320px){
.today_appointments {

        width: 310px;
        margin-left: 0px;

    }

    .schedule {
        width: 310px;
        height: 75px;
    }
}
</style>
