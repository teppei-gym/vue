<template>
  <div class="fade">
    <InputForm header-title="お客様の情報を入力してください"></InputForm>
    <div class="btn-wrap">
      <NextBtnLink routeName="questionnaire"></NextBtnLink>
    </div>
  </div>
</template>

<script>
import NextBtnLink from '../Atoms/NextBtnLink';
import InputForm from '../Molecules/InputForm';

export default {
  components: {
    NextBtnLink,
    InputForm,
  },
};
</script>

<style scoped>
.btn-wrap {
  text-align: center;
  margin-top: 20px;
}

.fade {
  animation: fade-in 1s;
}
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
