<template>
  <div class="content">
    <div class="content-tag">現在、生命保険に加入されていますか？</div>
    <div>
      <input type="radio" name="join" />はい
      <input type="radio" name="join" checked />いいえ
    </div>
    <div class="content-tag">
      現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術を勧められたことはありますか？
    </div>
    <div>
      <input type="radio" name="surgey" />はい
      <input type="radio" name="surgey" checked />いいえ
    </div>
    <div class="content-tag">
      過去５年以内に、病気やけがで、手術を受けたことまたは型軸して７日以上の入院をした事がありますか？
    </div>
    <div>
      <input type="radio" name="hospitalization" />はい
      <input type="radio" name="hospitalization" checked />いいえ
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      label: 'step2',
    };
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
</style>
