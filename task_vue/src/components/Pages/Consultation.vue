<template>
  <div class="fade">
    <InputForm header-title="ご相談内容をご記入ください"></InputForm>
    <div class="btn-wrap">
      <BackBtnLink routeName="questionnaire"></BackBtnLink>
      <BtnLink routeName="confirm" content="次へ進む"></BtnLink>
    </div>
  </div>
</template>

<script>
import InputForm from '../Molecules/InputForm';
import BtnLink from '../Atoms/BtnLink';
import BackBtnLink from '../Atoms/BackBtnLink';

export default {
  components: {
    InputForm,
    BtnLink,
    BackBtnLink,
  },
};
</script>

<style scoped>
.btn-wrap {
  width: 300px;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
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
