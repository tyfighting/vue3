<template>
  <div class="son">
    <input v-model="uname" @input="changeVal" />
  </div>
</template>

<script>
export default {
  name: "son",
  props: ["uname"],
  data() {
    return {};
  },
  methods: {
    changeval() {
      this.$emit("changeval", this.uname);
    }
  }
};
</script>