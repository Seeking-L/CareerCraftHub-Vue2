<template>
  <div class="search bar7">
    <form onsubmit="return false;">
      <input type="text" placeholder="Search" v-model="content" @keyup.enter="submit"/>
      <button type="button" @click="submit"></button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchBox",
  data(){
    return{
      content:"",
    }
  },
  methods:{
    submit(){
      this.listNowChange(this.content)
    }
  },
  props:{
    listNowChange:{
      type: Function,
      require: true,
      default: null,
    },
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
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
  top: -1px;
  right: 0;
}
.bar7 button:before {
  content: "\f002";
  font-family: FontAwesome;
  /* color: #324b4e; */
  color: #c65417;
}
.bar7{
  position: fixed;
  top: 30px; /* 调整为希望的垂直位置，单位可以是 px、em、rem 等 */
  left: 85%;
  transform: translateX(-50%);
  z-index: 100; /*通过 z-index 设置层级，确保搜索框显示在其他元素之上*/
    /* margin-top: 20%;
    margin-right: 30%; */
}
</style>
