<template>
  <div id="app">
    <div class="authorization" v-if="this.$store.state.signin">
      <!-- {{signin}} -->
      <form action="post">
        <h2>plaese login</h2>
        <input type="text" name id placeholder="name" @change="
successAuth($event)" />
        <input
          type="password"
          name
          id
          placeholder="password"
          @change="
        successPass($event)"
        />
      </form>
    </div>
    <div v-else>
      <div id="nav">
        <router-link to="/">Home</router-link>|
        <router-link to="/about">About</router-link>
      </div>
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      step1: false,
      step2: false
    };
  },
  methods: {
    signin() {
      return this.$store.state.signin;
    },
    successAuth(event) {
      console.log(event.target.value);
      if (event.target.value === this.$store.state.admin.name)
        console.log("1stepOK!");
      this.step1 = true;
    },
    successPass(event) {
      console.log(event.target.value);
      if (event.target.value === this.$store.state.admin.pass)
        console.log("2stepOK!");
      this.step2 = true;
      if (this.step2 && this.step1) {
        console.log("!");
        this.$store.commit("checkdata");
      }
    }
  }
};
</script>

<style lang="scss">
#app {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

form {
  width: 20vw;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: aliceblue;
box-shadow: 0px 11px 20px 0px #af8eef;
  h2 {
    color: rgb(71, 121, 121);
    font-family: sans-serif;
    // text-transform: uppercase;
  }
  input {
    margin: 10px;
    padding: 5px;
    &:hover{
     background-color: #f8e8fd;
    }
  }
}
.authorization {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(to right, rgb(241, 241, 241), rgb(120, 186, 206));
}
</style>
