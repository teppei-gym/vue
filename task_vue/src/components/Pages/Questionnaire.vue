<template>
  <div class="fade">
    <InputForm header-title="以下にお答えください"></InputForm>
    <div class="btn-wrap">
      <BackBtnLink routeName="info"></BackBtnLink>
      <NextBtnLink routeName="consultation"></NextBtnLink>
    </div>
  </div>
</template>

<script>
import InputForm from "../Molecules/InputForm";
import NextBtnLink from "../Atoms/NextBtnLink";
import BackBtnLink from "../Atoms/BackBtnLink";

export default {
  components: {
    InputForm,
    NextBtnLink,
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
