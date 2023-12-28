<template>
  <div class="search bar7">
    <form>
      <input type="text" placeholder="Search" />
      <button type="submit"></button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchBox",
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

#container {
  width: 500px;
  height: 820px;
  margin: 0 auto;
}
div.search {
  padding: 30px 0;
}

form {
  position: relative;
  width: 300px;
  margin: 0 auto;
}

button {
  border: none;
  outline: none;
  height: 42px;
  width: 42px;
  cursor: pointer;
  position: absolute;
}

input {
  width: 100%;
  height: 42px;
  padding-left: 13px;
}

/*搜索框7*/
.bar7 form {
  height: 42px;
}
.bar7 input {
  width: 250px;
  border-radius: 42px;
  transition: 0.3s linear;
  float: right;
}
.bar7 input:focus {
  width: 300px;
}
.bar7 button {
  background: none;
  top: -2px;
  right: 0;
}
.bar7 button:before {
  content: "\f002";
  font-family: FontAwesome;
  color: #324b4e;
}
.bar7{
    margin-left: 30%;
}
</style>