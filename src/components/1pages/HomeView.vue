<script setup lang="ts">
import PHeader from '@/components/2widgets/PHeader.vue';
import PFooter from '@/components/2widgets/PFooter.vue';
import PInputTester from '@/components/2widgets/PInputTester.vue';
import PStatistics from '@/components/2widgets/PStatistics.vue';
import PHomeScreen from '@/components/2widgets/PHomeScreen.vue';
import { useHomeScreenDisabledStore } from '@/stores/homeScreenDisabled';
import { storeToRefs } from 'pinia';
import { useTimerStore } from "@/stores/timer";

const homeScreenDisabledStore = useHomeScreenDisabledStore();
const { isDisabled } = storeToRefs(homeScreenDisabledStore);

const timer = useTimerStore();
const { time } = storeToRefs(timer);

</script>

<template>
  <PHeader />
  <main class="main">
    <div class="container">
      <p-home-screen v-show="!isDisabled" />
      <p-input-tester v-if="isDisabled" />
      <p-statistics :time="time" v-if="isDisabled" />
    </div>
  </main>
  <PFooter />
</template>

<style lang="scss">
#app {
  width: 100vw;
  height: 100vh;
  background-image: url('src/assets/images/bg.png');
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.main {
  padding: 0 40px;

  & .container {
    display: flex;
    column-gap: 15px;
  }
}
</style>