<template>
  <div class="content">
    <div class="content-tag">-ご相談内容-</div>
    <div>
      <textarea
        cols="30"
        rows="10"
        v-model="consultation"
        @change="setConsultation"
      ></textarea>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      consultation: '',
      label: 'step3',
    };
  },
  methods: {
    setConsultation() {
      this.$store.commit('setConsultation', this.consultation);
    },
  },
  created() {
    this.$emit('label', this.label);
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
