<template>
  <div>
    <button @click="setMessage('Hello World')">hello</button>
    <button @click="setMessage('Hello World 2')">hello2</button>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: ''
    };
  },
  methods: {
    setMessage(msg) {
      this.message = msg;
    }
  }
};
</script>