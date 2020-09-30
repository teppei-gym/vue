<template>
  <div class="content">
    <div class="content-tag">-性別-</div>
    <div class="answer">{{ data.sex }}</div>
    <div class="content-tag">-生年月日-</div>
    <div class="answer">{{ data.birthday }}</div>
    <div class="content-tag">-現在、生命保険に加入されていますか？-</div>
    <div class="answer">{{ data.q1 }}</div>
    <div class="content-tag">
      -現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術を勧められたことはありますか？-
    </div>
    <div class="answer">{{ data.q2 }}</div>
    <div class="content-tag">
      -過去５年以内に、病気やけがで、手術を受けたことまたは型軸して７日以上の入院をした事がありますか？-
    </div>
    <div class="answer">{{ data.q3 }}</div>
    <div class="content-tag">-ご相談内容-</div>
    <div class="answer">{{ data.consultation }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: this.$store.getters.getFormData,
    };
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
.answer {
  margin-left: 10px;
}
</style>
