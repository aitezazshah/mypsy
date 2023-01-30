<template>
  <q-page>
    <first-section />
    <praticiens-section class="q-my-xl layout-container" />
    <how-it-works-section class="layout-container" />
    <votre-section class="layout-container" />
    <primary-benefit-section class="layout-container" />
    <users-say-section class="layout-container" />
    <package-section class="layout-container" />
    <free-trial-section class="layout-container" />
    <follow-us-section />
    <footer-section />
  </q-page>
</template>

<script setup>
import FirstSection from 'src/components/homePage/FirstSection.vue'
import PraticiensSection from 'src/components/homePage/PraticiensSection.vue'
import HowItWorksSection from 'src/components/homePage/HowItWorksSection.vue'
import VotreSection from 'src/components/homePage/VotreSection.vue'
import PrimaryBenefitSection from 'src/components/homePage/PrimaryBenefitSection.vue'
import UsersSaySection from 'src/components/homePage/UsersSaySection.vue'
import PackageSection from 'src/components/homePage/PackageSection.vue'
import FreeTrialSection from 'src/components/homePage/FreeTrialSection.vue'
import FollowUsSection from 'src/components/homePage/FollowUsSection.vue'
import FooterSection from 'src/components/homePage/FooterSection.vue'

</script>
