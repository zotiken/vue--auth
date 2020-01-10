<template>
  <form class="about" @submit.prevent="onAddGostList">
    <h1>add gost</h1>
    <input type="text" name id placeholder="text" />
    <input type="email" name id placeholder="email" />
    <input type="password" name id placeholder="password" />
    <button class="addgost">add gost</button>
    <button type="submit">send</button>
    <ul>
      <li v-for="(item,index) of gostList" v-bind:key="index">
        <p>
          <span>{{ item.id }}.</span>
          {{ item.title }}
        </p>
      </li>
    </ul>
    <div id="circle">+</div>
  </form>
</template>

<style lang="scss" scoped>
form {
  width: 30vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 5px 20px 20px 12px #33333338;
  padding: 30px;
  h1 {
    text-transform: uppercase;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 20px;
  }

  input {
    margin: 20px;
    padding: 11px;
    border: none;
    border-bottom: 1px solid #534590;
  }
  button {
    width: 10vw;
    padding: 10px;
  }

  .addgost {
    padding: 10px;
    background-color: #42b983;
    text-align: center;
    border: none;
    margin: 10px;
  }
}
ul {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  li {
    margin: 0;
    width: 100%;
    list-style: none;
  }
}

p {
  margin: 0;
}
</style>

<script>
export default {
  data() {
    return {
      gostList: 1,
      todo: 1
    };
  },
  methods: {
    onAddGostList() {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => (this.gostList = json))
        .then(json => console.log(json));
      this.gostList++;
    }
  }
};
</script>
