<template>
    <div class="cards">
        <q-card v-for="(card, index) in cards" :key="index" class="card">
            <q-card-section class="card-section q-px-md">
                <q-icon :name="card.icon" class="rounded-icon-1 text-white" size="24px"
                    :style="{ 'background-color': card.color }" />
                <div class="content q-px-md">
                    <span class="data" :style="{ 'color': card.color }">{{ card.data }}</span>
                    <br />
                    <span class="text">{{ card.text }}</span>
                </div>
            </q-card-section>
        </q-card>
        <q-space></q-space>
    </div>
</template>
<script>
export default {
    data() {
        return {
            cards: [
                {
                    data: '24.4K',
                    text: 'Appointments',
                    icon: 'event',
                    color: '#1EBCB4'
                },
                {
                    data: '166.6K',
                    text: 'Total Patient',
                    icon: 'fa fa-user',
                    color: '#A27FFF'
                },
                {
                    data: '28.0K',
                    text: 'Video Consulting',
                    icon: 'fa fa-video',
                    color: '#4EB2F9'
                },
                {
                    data: '53.5K',
                    text: 'Clinic Consulting',
                    icon: 'fa fa-hospital',
                    color: '#FFB201'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.cards {
    display: flex;
    margin-left: 250px;
    height: auto;
    padding: 10px;
}

.card {
    width: 280px;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: 20px;
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

@media (max-width:1290px) {
    .cards {
        flex-wrap: wrap;

    }

    .card {
        margin: 20px;
    }
}

@media (max-width:1022px) {
    .cards {
        margin-left: 0px;
        flex-wrap: nowrap;
    }

    .card {
        width: 165px;
        height: 100px;
        justify-content: center;


    }

    .rounded-icon-1 {
        border-radius: 50%;
        padding: 8px;
    }

    .data {

        font-size: 21px;
        font-weight: 700;
    }

}

@media (max-width:768px) {
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
