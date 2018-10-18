<template>
    <div class="modal" @click="closeModal" v-if="modalState">
        <div class="item">
            <h1>hello world</h1>
        </div>
    </div>
</template>
<script>
export default {
name:"modalTest",
  data() {
    return {
      test: "你好",
      modalState: false
    };
  },
  props: ["modalState"],
  methods: {
    closeModal() {
      this.$emit("event", false);
    }
  }
};
</script>