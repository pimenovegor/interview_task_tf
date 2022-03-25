import Light from "@/components/Light";

export default {
  components: {
    Light,
  },
  data: () => ({
    time: 0,
    pushPath: "yellow",
  }),
  created() {
    this.getTime();
    localStorage.currentRoute = this.$route.name;
    this.mainFunc();
  },
  methods: {
    mainFunc() {
      const interval = setInterval(() => {
        this.time -= 1;
        localStorage.time = this.time;

        if (this.time === 0) {
          localStorage.lastRoute = this.$route.name;
          this.$router.push(this.pushPath);
          clearInterval(interval);
        }
      }, 1000);
    },
    getTime() {
      const { currentRoute } = localStorage;
      if (currentRoute === this.$route.name) {
        const { time } = localStorage;
        time ? (this.time = time) : time;
      }
    },
  },
};
