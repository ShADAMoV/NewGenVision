<script setup lang="ts">
import PStatisticsItem from '@/components/4entities/PStatisticsItem.vue';

const props = defineProps({
  time: {
    type: String,
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
      statistics-value="0"
      statistics-name="Speed"
      icon-url="src/assets/images/clock.svg"
    />
    <p-statistics-item
      unit="char/min"
      statistics-value="0"
      statistics-name="Record"
      icon-url="src/assets/images/person.svg"
    />
    <p-statistics-item
      unit="%"
      statistics-value="0"
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
}
</style>