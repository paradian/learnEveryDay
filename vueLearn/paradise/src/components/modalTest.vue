<template>
    <div class="modal" @click="closeModal" v-if="display">
        <div class="item">
            <h1>hello world</h1>
        </div>
    </div>
</template>
<script>
export default {
  name: "modalTest",
  data() {
    return {
      test: "你好"
    };
  },
  props: ['display'],
  methods: {
    closeModal() {
      this.$emit("event", false);
    }
  }
};
</script>
<style scoped>
.modal {
   position: absolute;
  top: 0%;
  left: 0%;
  right: 0%;
  bottom: 0%;
   background-color: rgba(0, 0, 0, 0.3);
   width: 100%;
   height: 100vh;
   align-items: center;
}
.item {
  position: relative;
  margin: auto;
  background-color: #fff;
  height: 200px;
  width: 300px;
}
</style>
