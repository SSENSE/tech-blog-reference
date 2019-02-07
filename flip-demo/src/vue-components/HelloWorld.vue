<template>
  <div class="hello">
    <h2>Hi, this webpage is built with <span class="vue">VueJS</span></h2>
    <react-button class="react-button" text="But this button is written in React!" />
  </div>
</template>

<script>
import { Button } from "../../dist/vue/Button"
export default {
  name: 'HelloWorld',
  components: {
      reactButton: Button
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  background: whitesmoke;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.vue {
  color: #41B883
}

.react-button {
  color: white;
  font-size: 18px;
  font-weight: bold;
  background: cornflowerblue;
  border: none;
  padding: 20px;
  margin-top: 15px;
}
</style>
