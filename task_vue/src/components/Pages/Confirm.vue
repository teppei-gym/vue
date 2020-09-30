<template>
  <div class="fade">
    <inputForm header-title="以下の内容をご確認ください"></inputForm>
    <div class="btn-wrap">
      <BackBtnLink routeName="consultation"></BackBtnLink>
      <BtnLink routeName="" content="送信"></BtnLink>
    </div>
  </div>
</template>

<script>
import InputForm from '../Molecules/InputForm';
import BackBtnLink from '../Atoms/BackBtnLink';
import BtnLink from '../Atoms/BtnLink';

export default {
  components: {
    InputForm,
    BackBtnLink,
    BtnLink,
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
