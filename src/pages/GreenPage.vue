<template>
  <div class="box">
    <Light class="red trans" />
    <Light class="yellow trans" />
    <Light :time="time" class="green" />
  </div>
</template>

<script>
import defaultMixin from "@/mixins/defaultMixin";

export default {
  data: () => ({
    time: 15,
  }),
  mixins: [defaultMixin],
};
</script>
