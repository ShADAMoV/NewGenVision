<script lang="ts" setup>
defineProps({
  iconUrl: {
    type: String,
    required: true,
  },
  statisticsName: {
    type: String,
    required: true,
  },
  statisticsValue: {
    required: true,
  },
  unit: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <div class="p-statistics-item">
    <div class="p-statistics-item__icon">
      <img
        :src="iconUrl"
        :alt="`Printing ${statisticsName}`"
      >
    </div>
    <div class="p-statistics-item__text">
      {{ statisticsName }}
    </div>
    <div class="p-statistics-item__value">
      {{ statisticsValue }}<span>{{ unit }}</span>
    </div>
  </div>
</template>

<style lang="scss">
.p-statistics-item {
  display: flex;

  &__icon {
    width: 20px;
    height: 20px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  &__text {
    margin-left: 10px;
    margin-right: 10px;
    width: 78px;
    font-weight: 700;
    font-size: 16px;
  }

  &__value {
    font-weight: 700;
    font-size: 16px;

    span {
      font-size: 8px;
    }
  }
}
</style>