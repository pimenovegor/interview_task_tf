<template>
  <div class="box">
    <Light class="red trans" />
    <Light :time="time" class="yellow" />
    <Light class="green trans" />
  </div>
</template>

<script>
import defaultMixin from "@/mixins/defaultMixin";

export default {
  data: () => ({
    time: 3,
  }),
  created() {
    this.getPushPath();
  },
  methods: {
    getPushPath() {
      const { lastRoute } = localStorage;

      if(!lastRoute){
        this.pushPath = "/red";
      }

      if (lastRoute === "green") {
        this.pushPath = "/red";
      }

      if (lastRoute === "red") {
        this.pushPath = "/green";
      }
    },
  },
  mixins: [defaultMixin],
};
</script>
