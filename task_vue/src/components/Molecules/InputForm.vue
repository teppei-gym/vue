<template>
  <div class="input-form">
    <div class="header">
      <span>{{ step }}</span>
      <p>{{ headerTitle }}</p>
    </div>
    <div class="content">
      <router-view @label="step = $event"></router-view>
    </div>
  </div>
</template>

<script>
export default {
  props: ['header-title'],
  data() {
    return {
      step: '',
    };
  },
};
</script>

<style scoped>
.header {
  background-color: #d7f3f3;
  position: relative;
  font-size: 12px;
  line-height: 16px;
  border-bottom: solid 1.2px #3ab4b4;
  text-align: center;
}

span {
  background-color: #3298dc;
  color: #fff;
  padding: 0 0.5em;
  border-radius: 4px;
  position: absolute;
  top: 0;
  left: 0;
}

p {
  line-height: 40px;
  font-size: 20px;
  margin: 0;
}

.input-form {
  margin: 0 auto;
  width: 70%;
  border: solid 1.2px #3ab4b4;
  border-radius: 4px;
}
.content {
  padding: 30px 50px;
}
</style>
