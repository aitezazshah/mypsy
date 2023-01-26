
<template>
    <div class="patientstats">
    <div class="patients q-mt-md q-ml-lg">
        <div class="heading">
            <q-label class="patient-req">Patients</q-label>
        <select  class="menu">
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
        </select>
    </div>
        <div class="patient_list q-mt-md" style="background-color:white; height:auto; border-radius:10px;">
            <q-list class="q-py-sm">
                <div v-for="appointment in appointments" :key="appointment.id" class="list">
                    <div class="img_data">
                        <!-- <q-img :src="appointment.icon" class="avatar rounded-image" /> -->
                        <q-icon :name="appointment.icon" class="rounded-icon-1" size="24px" :style="{ 'background-color': appointment.color, 'color': appointment.iconcolor }"/>
                        <div class="data">
                            <label style="font-size:22px; font-weight: 600; color:#1F2125">{{ appointment.data }}</label>
                            <label style="font-size:14px; color:#83878F">{{ appointment.status }}</label>
                        </div>
                    </div>

                    <div>
                        <q-label style="color:#00A18B">15% <q-icon class="fa fa-caret-up" /></q-label>
                    </div>
                </div>
            </q-list>
        </div>
        
    </div>
    

    <!-- Gender Chart -->
    <div class="patients q-mt-md q-ml-lg">
        <div class="heading">
            <q-label class="patient-req">Gender</q-label>
            <select class="menu">
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
            </select>
        </div>
        <div class="patient_chart q-mt-md" style="background-color:white; height:auto; border-radius:10px;">
            <apexchart width="260" height="218" type="donut" :options="options" :labels="labels" :legends="legends" :series="series"  ></apexchart>
            <div class="btn-class">
            <div class="labels">
                <q-icon name="circle" :size="8" class="btn-male" />
                <p>Male</p>
                
            </div>
            <div class="labels">
            
            <q-icon name="circle" :size="8" class="btn-female" />
                <p>Female</p>
            
            </div>
            <div class="labels">
            
                <q-icon name="circle" :size="8" class="btn-child" />
                <p>Child</p>
            
            </div>

        </div>
    </div>
    </div>
    </div>
</template>
<script>


export default {

    data() {
        return {
            appointments: [
                { id: 1, data: '24.4K', status: 'New Patients', icon: 'fa fa-user', color: '#00A18B1A', iconcolor:'#00A18B'},
                { id: 2, data: '166.3K', status: 'Old Patients', icon: 'fa fa-user', color: '#ffd889', iconcolor: '#FFA900' }
            ],
            options: {
                // dataLabels: {
                //     enabled: false},
                labels: [],
                legend: {show:false},
                chart: {
                    colors: ['#ffd889', 'red', '#00ff00']
                },
                
            },
            series: [45, 30, 24]
        }
    }
}

</script>

<style lang="scss" scoped>
.patients{
    height: 220px;
    width: 258px;
}

.heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
}
.menu{
    border: none;
    outline: none;
    border-radius: 5px;    
    width: 83px;
    height: 36px;
  
}


.patient-req {
    font-size: 18px;
    font-weight: 600;
}


.rounded-icon-1 {
    border-radius: 50%;
    width: 48px;
    height: 48px;

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
.patient_chart{
    display: flex;
    flex-direction: column;
}
.btn-class{
    display: flex;
    justify-content: space-between;
    margin: 15px;
}
.labels{
    display: flex;
    justify-content: center;
    align-items: center;
}

.btn-male{
    color: #FFA900;
}
.btn-female{
    color: #796EFF;
}
.btn-child{
   color:$primary;
}
</style>
