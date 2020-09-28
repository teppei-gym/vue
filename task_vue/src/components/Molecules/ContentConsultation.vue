<template>
  <div class="content">
    <div class="content-tag">-ご相談内容-</div>
    <div>
      <textarea name="" id="" cols="30" rows="10"></textarea>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      label: "step3",
    };
  },
  created() {
    this.$emit("label", this.label);
  },
};
</script>

<style scoped>
.content-tag {
  color: #4b85ac;
}
.content > div {
  margin-bottom: 20px;
}
.content > div:last-child {
  margin: 0;
}
textarea {
  width: 100%;
  height: 100%;
  border-color: #d2d2d2;
}
</style>
