<template>
  <div class="box">
    <Light :time="time" class="red" />
    <Light class="yellow trans" />
    <Light class="green trans" />
  </div>
</template>

<script>
import defaultMixin from "@/mixins/defaultMixin";

export default {
  data: () => ({
    time: 10,
  }),
  mixins: [defaultMixin],
};
</script>
