<template>
  <div class="fade">
    <InputForm header-title="お客様の情報を入力してください"></InputForm>
    <div class="btn-wrap">
      <BtnLink routeName="questionnaire" content="次へ進む"></BtnLink>
    </div>
  </div>
</template>

<script>
import BtnLink from '../Atoms/BtnLink';
import InputForm from '../Molecules/InputForm';

export default {
  components: {
    BtnLink,
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
