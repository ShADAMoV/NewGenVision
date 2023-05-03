<script setup lang="ts">
import PStartButton from '@/components/3features/PStartButton.vue';
import { useHomeScreenDisabledStore } from '@/stores/homeScreenDisabled';

const homeScreenDisabledStore = useHomeScreenDisabledStore();
const { toggleIsDisabled } = homeScreenDisabledStore;
</script>

<template>
  <div class="p-input-tester">
    <div class="p-input-tester__text">
      Burgdoggen brisket cupim corned beef jowl venison rump leberkas alcatra ham doner turkey.
      Shoulder shankle brisket swine pig ham hock turducken strip steak, meatloaf sirloin buffalo chicken kevin.
      Ham beef boudin, beef ribs pork loin pork chop kevin filet mignon cow doner ground round tenderloin bresaola buffalo.
      Tail jerky drumstick ribeye filet mignon.
      Swine chuck burgdoggen landjaeger hamburger meatloaf meatball sirloin bacon capicola pancetta chicken.
      Strip steak chicken frankfurter short ribs biltong sausage picanha chislic corned beef turkey porchetta t-bone capicola ham brisket.
    </div>
    <div class="p-input-tester__button">
      <p-start-button
        text="restart"
        @click="toggleIsDisabled"
      />
    </div>
  </div>
</template>

<style lang="scss">
.p-input-tester {
  max-width: 960px;
  min-width: 620px;
  min-height: 300px;
  max-height: 550px;
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
