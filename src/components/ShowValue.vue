<template>
    <span class="clickable" @mouseover="show=true" @mouseout="show=false">{{ showMessage }}</span>
</template>

<script>
export default {
  name: "ShowValue",
  props: ["word"],
  data() {
    return {
      show: false
    };
  },
  computed: {
    showMessage() {
      return this.show ? this.word : "Show value";
    }
  }
};
</script>

<style lang="scss" scoped>
.clickable {
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
  display:block;
}
</style>
