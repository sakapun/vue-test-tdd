<template>
  <div>
    <input
        type="text"
        v-model="text"
        class="new"
        @keyup.enter="submit" />
  </div>
</template>

<script>
  export default {
    name: "NewTodo",
    data () {
      return {
        text: "",
      }
    },
    methods: {
      submit () {
        this.$emit("createTodo", this.text)
      },
    },
  }
</script>

<style scoped>

</style>
