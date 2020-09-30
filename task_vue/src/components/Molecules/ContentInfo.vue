<template>
  <div class="content">
    <div class="content-tag">-性別-</div>
    <div>
      <input
        type="radio"
        name="sex"
        value="男性"
        v-model="sex"
        @change="setSex"
      />男性
      <input
        type="radio"
        name="sex"
        value="女性"
        v-model="sex"
        @change="setSex"
      />女性
    </div>
    <div class="content-tag">-生年月日-</div>
    <div class="select-date">
      <div>
        <select v-model="currentYear" @change="setBirthday">
          <option v-for="n of yearRoop" :key="n" :value="getMinYear() + n">
            {{
              `${getMinYear() + n}年 (${getJapaneseCalendar(getMinYear() + n)})`
            }}
          </option> </select
        >年
      </div>
      <div>
        <select v-model="currentMonth" @change="setBirthday">
          <option v-for="n of monthRoop" :key="n" :value="n">{{
            n
          }}</option> </select
        >月
      </div>
      <div>
        <select v-model="currentDay" @change="setBirthday">
          <option v-for="n of calculateTheDateByYear" :key="n" :value="n">{{
            n
          }}</option> </select
        >日
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      yearRoop: 80,
      monthRoop: 12,
      currentYear: '',
      currentMonth: 1,
      currentDay: 1,
      label: 'step1',
      sex: '',
    };
  },
  methods: {
    getMinYear() {
      return this.currentYear - this.yearRoop;
    },
    getJapaneseCalendar(year) {
      const date = new Date();
      date.setFullYear(year);
      return date.toLocaleDateString('ja-JP-u-ca-japanese', {
        year: 'numeric',
      });
    },
    setSex() {
      this.$store.commit('setSex', this.sex);
    },
    setBirthday() {
      const date = `${this.currentYear}年${this.currentMonth}月${this.currentDay}日`;
      this.$store.commit('setBirthday', date);
    },
  },
  computed: {
    calculateTheDateByYear() {
      const date = new Date();

      date.setFullYear(this.currentYear);
      date.setMonth(this.currentMonth);

      return new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    },
  },
  created() {
    this.currentYear = new Date().getFullYear();
    this.setBirthday();
    this.$emit('label', this.label);
  },
};
</script>

<style scoped>
.content {
  padding: 30px 50px;
}

.content-tag {
  color: #4b85ac;
}
.content > div {
  margin-bottom: 20px;
}
.content > div:last-child {
  margin: 0;
}
.select-date {
  display: flex;
}
.select-date > div {
  margin-right: 20px;
}
select {
  cursor: pointer;
  font-size: 1em;
  border-color: #238cd1;
  border-radius: 4px;
  padding: 0.5em 1em;
  margin-right: 10px;
}
.select-date > div:last-child {
  margin: 0;
}
input[type='radio'] {
  cursor: pointer;
}
</style>
