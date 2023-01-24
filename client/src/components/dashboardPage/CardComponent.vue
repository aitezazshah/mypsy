<template>
    <div class="cards">
        <q-card class="card">
            <q-card-section class="card-section q-px-md">
                <q-icon name="event" class="rounded-icon-1 text-white" size="24px" style="background-color:#1EBCB4" />
                <div class="content q-px-md">
                    <span class="data" style="color:#1EBCB4">24.4K</span>
                    <br />
                    <span class="text">Appointments</span>
                </div>
            </q-card-section>
        </q-card>
        <q-space></q-space>
        <q-card class="card">
            <q-card-section class="card-section q-px-md">
                <q-icon name="fa fa-user" class="rounded-icon-1 text-white" size="24px"
                    style="background-color:#A27FFF" />
                <div class="content q-px-md">
                    <span class="data" style="color:#A27FFF">166.6K</span>
                    <br />
                    <span class="text">Total Patient</span>
                </div>
            </q-card-section>
        </q-card>
        <q-space></q-space>
        <q-card class="card">
            <q-card-section class="card-section q-px-md">
                <q-icon name="fa fa-video" class="rounded-icon-1 text-white" size="24px"
                    style="background-color:#4EB2F9" />
                <div class="content q-px-md">
                    <span class="data" style="color:#4EB2F9">28.0K</span>
                    <br />
                    <span class="text">Video Consulting</span>
                </div>
            </q-card-section>
        </q-card>
        <q-space></q-space>
        <q-card class="card">
            <q-card-section class="card-section q-px-md">
                <q-icon name="fa fa-hospital" class="rounded-icon-1 text-white" size="24px"
                    style="background-color:#FFB201" />
                <div class="content q-px-md">
                    <span class="data" style="color:#FFB201">53.5K</span>
                    <br />
                    <span class="text">Clinic Consulting</span>
                </div>
            </q-card-section>
        </q-card>



    </div>


</template>


<script setup>

</script>

<style lang="scss" scoped>
.cards {
    // border: 2px solid red;
    display: flex;
    margin-left: 250px;
    height: auto;
    padding: 10px;

}

.card{
    width: 240px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.card-section {
    display: flex;
    justify-content: center;
    align-items: center;

}

.rounded-icon-1 {
    border-radius: 50%;
    padding: 14px;
}

.data {

    font-size: 24px;
    font-weight: 700;
}

.text {
    font-size: 14px;
}

@media (max-width:1022px) {
    .cards {
        margin-left: 0px;
    }
        .card {
            width: 185px;
            height: 100px;
            
        }

    // .card {
    //     margin: 5px;
    // }

}

@media (max-width:750px) {
    .cards {
        flex-direction: column;
    }

    .card {
        margin: auto;
        margin-bottom: 10px;
        width: 100%;
    }
}
</style>
