<script setup lang="ts">
import PStartButton from '@/components/3features/PStartButton.vue';
import { useHomeScreenDisabledStore } from '@/stores/homeScreenDisabled';
import { useTextsStore } from "@/stores/texts";
import { computed, onMounted } from "vue";
import { useTimerStore } from "@/stores/timer";

const timer = useTimerStore();
const { stop } = timer;

const homeScreenDisabledStore = useHomeScreenDisabledStore();
const { toggleIsDisabled } = homeScreenDisabledStore;

const store = useTextsStore();
const getText = computed(() => {
  return store.getText[0];
});
onMounted(() => {
  store.fetchText();
});
</script>

<template>
  <div class="p-input-tester">
    <div class="p-input-tester__text">
      {{ getText }}
    </div>
    <div class="p-input-tester__button">
      <p-start-button
        text="restart"
        @click="toggleIsDisabled(); stop()"
      />
    </div>
  </div>
</template>

<style lang="scss">
.p-input-tester {
  max-width: 960px;
  min-width: 620px;
  min-height: 300px;
  max-height: 650px;
  background: rgba(242, 242, 242, 0.9);
  border-radius: 15px;
  padding: 15px;
  display: flex;
  flex-direction: column;

  &__text {
    font-weight: 700;
    font-size: 24px;
    line-height: 40px;
    letter-spacing: 0.1em;
    margin-bottom: 15px;

    @media (max-width: 1440px) {
      font-size: 18px;
      line-height: 24px;
    }
  }

  &__button {
    display: flex;
    justify-content: flex-end;
    margin-top: auto;
  }
}
</style>
