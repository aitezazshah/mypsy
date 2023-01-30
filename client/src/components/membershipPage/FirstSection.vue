<template>
    <div class="q-py-xl" style="background-color: #C0F0E9">
        <div :class="$q.screen.lt.md ? 'q-mx-md' : 'first-section-container'">
            <div class="row" v-if="$q.screen.lt.md ? 'q-pb-xl' : 'q-mt-xl'">
                <div class="col-xs-12 col-sm-12 col-md-12" style="position: relative;">
                    <div v-if="$q.screen.gt.sm" style="position: absolute; left: 145px; top: -20px;">
                        <img src="images/headerIcon1.png" alt="icon" />
                    </div>
                    <div v-if="$q.screen.gt.sm" style="position: absolute; bottom: 10px; right: 140px;">
                        <img src="images/headerIcon2.png" alt="icon" />
                    </div>
                    <div class="text-bold lg-text text-dark-page text-center" :class="$q.screen.lt.md ? '' : 'q-pt-xl'">
                        <div>Membership Price & Plan</div>
                        
                    </div>
                    <div class="xs-text black-text text-center q-pb-xl">
                        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</div>
                        
                    </div>
                    
                </div>
                
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>

</style>
