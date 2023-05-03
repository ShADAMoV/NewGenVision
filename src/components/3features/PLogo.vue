<template>
  <div class="p-logo">
    <img
      class="p-logo__image"
      src="src/assets/images/logo.svg"
      alt="Logo"
    >
    <div class="p-logo__text">
      print speed test
    </div>
  </div>
</template>

<style lang="scss">
.p-logo {
  display: flex;
  column-gap: 10px;
  align-items: flex-start;

  &__image {
    width: 50px;
    height: 42px;
  }

  &__text {
    width: min-content;
    font-weight: 700;
    font-size: 14px;
    line-height: 15px;
    letter-spacing: 0.1em;
    color: #000000;
  }
}
</style>