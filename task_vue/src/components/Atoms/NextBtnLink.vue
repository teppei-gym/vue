<template>
  <router-link :to="{ name: routeName }"
    >次へ進む<span class="arrow"></span
  ></router-link>
</template>

<script>
export default {
  props: ["routeName"],
};
</script>

<style scoped>
a {
  color: #fff;
  background-color: #00d1b2;
  text-align: center;
  padding: 1em 1em 1em 1.5em;
  border-radius: 4px;
  display: inline-block;
  text-decoration: none;
}
.arrow {
  position: relative;
  display: inline-block;
  padding-left: 20px;
  vertical-align: middle;
  margin-left: 15px;
}
.arrow::before {
  content: "";
  width: 8px;
  height: 8px;
  border: 0px;
  border-top: solid 2px #fff;
  border-right: solid 2px #fff;
  -ms-transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  position: absolute;
  top: 50%;
  left: 0;
  margin-top: -8px;
}
</style>
