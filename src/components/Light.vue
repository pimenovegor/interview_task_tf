<template>
  <div v-bind:class="{ blink: time <= 3 && time!==0}" class="light">
    <h1 v-if="time" class="time">{{ time }}</h1>
  </div>
</template>

<script>
export default {
  props: {
    time: {
      type: Number,
      default: 0,
    },
  },
};
</script>

