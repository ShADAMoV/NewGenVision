<script setup>
import { computed, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import PHeader from '@/components/2widgets/PHeader.vue';
import PFooter from '@/components/2widgets/PFooter.vue';
import PInputTester from '@/components/2widgets/PInputTester.vue';
import PStatistics from '@/components/2widgets/PStatistics.vue';
import PHomeScreen from '@/components/2widgets/PHomeScreen.vue';
import { useHomeScreenDisabledStore } from '@/stores/homeScreenDisabled';
import { useTextsStore } from '@/stores/texts';
import { useTimerStore } from '@/stores/timer';
import { usePrintingTestStore } from '@/stores/printingTest';

const printingTest = usePrintingTestStore();
const { printingIncorrect, printingCorrect } = printingTest;
const { correctInputs, incorrectInputs } = storeToRefs(printingTest);

const homeScreenDisabledStore = useHomeScreenDisabledStore();
const { isDisabled } = storeToRefs(homeScreenDisabledStore);

const texts = useTextsStore();
const text = computed(() => {
  return texts.getText[0];
});

onMounted(() => {
  texts.fetchText();
});

const timer = useTimerStore();
const { time } = storeToRefs(timer);

const textChars = computed(() => {
  return texts.getText[0].split('').reverse();
});

const speed = computed(() => {
  return Math.floor(correctInputs.value / (time.value / 60));
});

const accuracy = computed(() => {
  return Math.round(100 - (incorrectInputs.value / (textChars.value.length / 100)));
});
function inputTest(event) {
  const lastChar = textChars.value[textChars.value.length - 1];

  if (event.key === 'Shift') {
    return;
  }

  if (lastChar === event.key) {
    console.log('Верный символ');
    textChars.value.pop();
    printingCorrect();
  } else {
    console.log('Неправильный символ');
    printingIncorrect();
  }
}
</script>

<template>
  <PHeader />
  <main class="main">
    <div class="container">
      <input
        v-if="isDisabled"
        v-focus
        onblur="this.focus()"
        type="text"
        placeholder="Enter KeyWords"
        class="hiddenInput"
        @keyup="inputTest"
      >
      <p-home-screen v-show="!isDisabled" />
      <p-input-tester
        v-if="isDisabled"
        :text="text"
      /> 
      <p-statistics
        v-if="isDisabled"
        :time="time"
        :speed="speed"
        :accuracy="accuracy"
      />
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

.hiddenInput {
  position: absolute;
  z-index: -1;
}
</style>