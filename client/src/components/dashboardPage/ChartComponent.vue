<template>

    <div class="chart-component q-mt-lg">
        <div v-if="$q.screen.gt.xs" class="chart">

            <apexchart height="350" width="650" type="line" :options="options" :series="series"></apexchart>



        </div>

        <div class="calendar q-px-md q-mt-md">
            <q-date v-model="date" minimal />
        </div>

    </div>
</template>
<script>
import { defineComponent } from 'vue'
export default defineComponent({
    data() {
        return {

            options: {
                title: {
                    text: 'Monthly Progress',
                    align: 'left'
                },
                chart: {
                    id: 'apex-line'
                },
                colors: ['#0F76F5'],
                markers: {
                    size: 2,
                    hover: {
                        sizeOffset: 2
                    }
                },
                xaxis: {
                    categories: ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
                }
            },
            series: [{
                name: 'series-1',
                data: [0, 30, 45, 50, 49, 60, 70, 91]
            }]
        }
    }
})

</script>



<style lang="scss" scoped>
.chart {
    // border: 2px solid red;
    border-radius: 3px;

    width: 680px;
    height: 350px;
    margin-left: 260px;
    background-color: white;
}

.chart-component {
    display: flex;
    justify-content: space-between;
    
}

@media (max-width:1024px) {
    .chart {
        // margin-left: 0px;
        // margin: auto;
    }

    .chart-component {
        flex-direction: column;
        flex-wrap: wrap;
        

    }

    .calendar {
        margin: auto;
    }

}
@media (max-width:900px){
    .chart {
            margin-left: 0px;
            margin: auto;
        }
}
</style>