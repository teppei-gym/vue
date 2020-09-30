<template>
  <div class="content">
    <div class="content-tag">現在、生命保険に加入されていますか？</div>
    <div>
      <input
        type="radio"
        name="q1"
        value="はい"
        v-model="q1"
        @change="setQuestionnaire"
      />はい
      <input
        type="radio"
        name="q1"
        value="いいえ"
        v-model="q1"
        checked
        @change="setQuestionnaire"
      />いいえ
    </div>
    <div class="content-tag">
      現在入院中ですか。または、最近3ヶ月以内に医師の診察・検査の結果、入院・手術を勧められたことはありますか？
    </div>
    <div>
      <input
        type="radio"
        name="q2"
        value="はい"
        v-model="q2"
        @change="setQuestionnaire"
      />はい
      <input
        type="radio"
        name="q2"
        value="いいえ"
        v-model="q2"
        checked
        @change="setQuestionnaire"
      />いいえ
    </div>
    <div class="content-tag">
      過去５年以内に、病気やけがで、手術を受けたことまたは型軸して７日以上の入院をした事がありますか？
    </div>
    <div>
      <input
        type="radio"
        name="q3"
        value="はい"
        v-model="q3"
        @change="setQuestionnaire"
      />はい
      <input
        type="radio"
        name="q3"
        value="いいえ"
        v-model="q3"
        checked
        @change="setQuestionnaire"
      />いいえ
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      q1: 'いいえ',
      q2: 'いいえ',
      q3: 'いいえ',
      label: 'step2',
    };
  },
  methods: {
    setQuestionnaire() {
      const obj = {
        q1: this.q1,
        q2: this.q2,
        q3: this.q3,
      };
      this.$store.commit('setQuestionnaire', obj);
    },
  },
  created() {
    this.setQuestionnaire();
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
