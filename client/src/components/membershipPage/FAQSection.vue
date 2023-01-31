<template>
    <div class="padding-y" style="background-color:#E5E5E5">
        <div class="faqcontent container">
            <p class="faq">Frequently asked questions</p>
            <div class="tabs q-mt-xl q-py-lg q-pb-lg" v-for="(text,index) in texts" :key="index" @click="showDetails = showDetails === index ? null : index">
            <div class="tab-content">
                <i class="icon q-px-md" :class="{'fa fa-plus': showDetails!==index, 'fa fa-minus':showDetails==index}" style="cursor:pointer;"></i>
                <p class="heading-text">{{ text.heading }}</p>
            </div>
            <transition>
                <div class="faq-details q-px-xl" v-if="showDetails===index">
                    {{ text.paragraph }}
                </div>
            </transition>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showDetails: null,
            texts:[{
                heading:'How can i use landbook When should I use a Tag?',
                paragraph: 'Follow these 6 steps and you’ll get your Help Scout account up and running in no time. If youd like to get a full tour of Help Scout and all its features, attend one of our weekly live demos or take a video tour.'
            },
                {
                    heading: 'How can i use landbook When should I use a Tag?',
                    paragraph: 'Follow these 6 steps and you’ll get your Help Scout account up and running in no time. If youd like to get a full tour of Help Scout and all its features, attend one of our weekly live demos or take a video tour.'
                },
                {
                    heading: 'How can i use landbook When should I use a Tag?',
                    paragraph: 'Follow these 6 steps and you’ll get your Help Scout account up and running in no time. If youd like to get a full tour of Help Scout and all its features, attend one of our weekly live demos or take a video tour.'
                },
                {
                    heading: 'How can i use landbook When should I use a Tag?',
                    paragraph: 'Follow these 6 steps and you’ll get your Help Scout account up and running in no time. If youd like to get a full tour of Help Scout and all its features, attend one of our weekly live demos or take a video tour.'
                },
                {
                    heading: 'How can i use landbook When should I use a Tag?',
                    paragraph: 'Follow these 6 steps and you’ll get your Help Scout account up and running in no time. If youd like to get a full tour of Help Scout and all its features, attend one of our weekly live demos or take a video tour.'
                }]
        }
    },
}

</script>

<style>
.faq-details {
    font-size: 16px;
    color: #51545C;
}
.faqcontent{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.faq{
    font-size: 48px;
    font-weight: 600;
}
.tabs{
    height: auto;
    width: 100%;
    border-radius: 8px;
    background-color:white ;
    display: flex;
    justify-content: left;
    flex-direction: column;
}
.tab-content{
    display: flex;
    justify-content: left;
    align-items: center;
}
.heading-text{
    font-size: 20px;
    font-weight: 600;
}

@media (max-width:769px) {
    .faqcontent{
        margin: 20px;
    }
        .faq {
            font-size: 28px;
            font-weight: 600;
            text-align: center;
        }
    
}
</style>
