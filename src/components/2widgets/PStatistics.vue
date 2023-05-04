<script setup>
import PStatisticsItem from '@/components/4entities/PStatisticsItem.vue';

defineProps({
  time: {
    type: Number,
    required: true,
  },
  speed: {
    type: Number,
    required: true,
  },
  accuracy: {
    type: Number,
    required: true,
  },
});

</script>

<template>
  <div class="p-statistics">
    <p-statistics-item
      unit="sec"
      :statistics-value="time"
      statistics-name="Time"
      icon-url="src/assets/images/timer.png"
    />
    <p-statistics-item
      unit="char/min"
      :statistics-value="speed"
      statistics-name="Speed"
      icon-url="src/assets/images/clock.svg"
    />
    <p-statistics-item
      unit="%"
      :statistics-value="accuracy"
      statistics-name="Accuracy"
      icon-url="src/assets/images/statistics.svg"
    />
  </div>
</template>

<style lang="scss">
.p-statistics {
  background: rgba(242, 242, 242, 0.9);
  border-radius: 15px;
  padding: 16px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  max-width: 220px;
  min-width: 220px;
}
</style>