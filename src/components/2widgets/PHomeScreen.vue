<script setup>
import PStartButton from '@/components/3features/PStartButton.vue';
import { useHomeScreenDisabledStore } from '@/stores/homeScreenDisabled';
import { useTimerStore } from '@/stores/timer';

const homeScreenDisabledStore = useHomeScreenDisabledStore();
const { toggleIsDisabled } = homeScreenDisabledStore;

const timer = useTimerStore();
const { start } = timer;
</script>

<template>
  <div class="p-start-screen">
    <h1 class="p-start-screen__text">
      Добро пожаловать! Наш тренажер поможет вам узнать, на что вы способны в слепом печатанье. Давайте начинать
    </h1>
    <p-start-button
      text="start"
      @click="toggleIsDisabled(); start()"
    />
  </div>
</template>

<style lang="scss">
.p-start-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 800px;
  width: 100%;
  padding: 25px;
  background: rgba(242, 242, 242, 0.9);
  border-radius: 15px;
  margin: 0 auto;

  &__text {
    font-weight: 700;
    text-align: center;
    max-width: 500px;
    font-size: 24px;
    line-height: 150%;
  }
}
</style>