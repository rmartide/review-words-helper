<template>
    <span class="clickable" @mouseover="hover=true" @mouseout="hover=false">{{ showMessage }}</span>
</template>

<script>
export default {
  name: "Display",
  props: ["value", "show"],
  data() {
    return {
      hover: false
    };
  },
  computed: {
    showMessage() {
      return this.show || this.hover ? this.value : "Show value";
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
  padding-top: 15px;
  padding-bottom: 15px;
}
</style>
