<template>

        <div class="filters q-mt-xl">
            <div class="filter-sec">
               
                <div class="input_group q-mt-lg">
                    <div class="q-px-sm">
                        <i class="fa fa-search" size=""></i>
                    </div>
                
                    <input type="text" class="search xs-text" placeholder="Search">
                </div>
                <div class="tab-area q-mt-lg">
                    <p style="font-size:16px; font-weight:600" class="q-px-sm">Filter:</p>
                <div class="filter-tabs q-mt-md q-mb-md" v-for="(text, index) in texts" :key="index"
                    >
                    
                    <div class="tab-content" @click="toggleTab(index)">
                        
                        <p class="heading-text">{{ text.heading }}</p>
                        <i class="icon q-px-md" :class="{ 'fa fa-angle-down': !openTabs.includes(index), 'fa fa-minus': openTabs.includes(index) }"
                            style="cursor:pointer;"></i>
                    </div>
                    
                    <transition>
                        <div class="faq-details" v-if="openTabs.includes(index)" :style="{display:text.heading=='Assistant'?'flex':'block'}">
                        <template v-if="text.heading!=='Assistant'">
                        <div v-for="paragraph in text.paragraphs" :key="paragraph.content" class="flex">
                            <input type="checkbox" @click.stop="" @click="paragraph.selected = !paragraph.selected"/>
                            <p :style="{ color: paragraph.selected ? '#00A18B' : '#51545C' }" class="psychologue-section q-px-sm q-py-sm" >{{ paragraph.content }}</p>
                            
                        </div>
                        
                        <hr />
                        </template>
                        
                        <template v-else>
                            <div v-for="paragraph in text.paragraphs" :key="paragraph.content" class="assistant-section">
                                <div class="assistant q-mt-sm" @click.stop="" @click="paragraph.selected = !paragraph.selected" :style="{ backgroundColor: paragraph.selected ? '#00A18B' : '#ffff' , color: paragraph.selected ? '#ffff' : '#51545C' }">{{ paragraph.content }}</div>
                            </div>
                            
                        </template>
                        </div>
                    </transition>
                </div>

                
            </div>
            </div>
            
        </div>
        

</template>

<script>
export default {
    data() {
        return {
            // showDetails: null,
            openTabs: [],
            
            texts: [{
                heading: 'Psychologue',
                paragraphs: [
                    { content: 'Psychologue', selected: false },
                    { content: 'Psychologue 2', selected: false },
                    { content: 'Psychologue 3', selected: false }
                ]
            },
                {
                    heading: 'Nutritioniste',
                    paragraphs: [
                        { content: 'Nutritioniste 1', selected: false },
                        { content: 'Nutritioniste 2', selected: false },
                        { content: 'Nutritioniste 3', selected: false }
                    ]
                },
                {
                    heading: 'Assistant',
                    paragraphs: [
                        { content: '1-2', selected: false },
                        { content: '3-5', selected: false },
                        { content: '6-10', selected: false }
                    ]
                }
           
            ],
          
        }
    },
    methods: {
        toggleTab(index) {
            const tabIndex = this.openTabs.indexOf(index);
            
            if (tabIndex === -1) {
                
                this.openTabs.push(index);
            } else {
                
                this.openTabs.splice(tabIndex, 1);
            }
        }
    }
    
    
}

</script>
<style scoped>
.filters{
    
    width: 30%;
    
}

.filter-sec{
    background-color: white;
    border-radius: 10px;
    width: 270px;
    margin: auto;
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;
}
.input_group {
    border-radius: 6px;
    border: 1px solid #E6EAF0;
    height: 48px;
    display: flex;
    align-items: center;
    width: 240px;
    
}
.input_group i {
    color: gray ;
}
.search {
    border: none;
    outline: none;
    border-radius: 6px;
    width: 100px;
}

.filter-tabs {
    width: 250px;
    height: auto;
    
    border-radius: 6px;
    background-color: white;
    display: flex;
    justify-content: left;
    flex-direction: column;
    padding: 10px;
}


.tab-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.heading-text{
    font-size: 14px;
    font-weight: 600;
    color: #1F2125;
}

hr{
    border: 1px solid #E6EAF0;
}
.assistant-section{
    width: 100%;
    
}

.assistant{
    width:53px;
    height: 32px;
    border-radius:8px ;
    border: 1px solid #E6EAF0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}
</style>
