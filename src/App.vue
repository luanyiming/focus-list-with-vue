<template>
  <div id="app">
    <h1 v-html='msg'></h1>
    <input type="input" v-model='newItem' v-on:keyup.enter='addItem' name="">
    <ul>
      <li v-for='i in items' v-html='i.label' v-bind:class='[{finish:i.isFinished},listItem]' v-on:click='toggleFinish(i)'></li>
    </ul>
  </div>
</template>

<script>
import Storage from './storage.js';
export default {
  name: 'app',
/*data:function(){

}*/
  data(){
    return{
      msg:'What is your main focus for today?',
      listItem:'listItem',
      items:Storage.read()||[],
      newItem:''
    }
  },
  watch:{
    items:{
      handler:function(val){
        Storage.save(val)
      },
      deep:true
    }
  },
  methods:{
    toggleFinish: function(i){
      console.log(i);
      i.isFinished?i.isFinished = false:i.isFinished = true;
    },
    addItem: function(){
      this.items.push({
        label:this.newItem,
        isFinished:false
      }),
      this.newItem = '';
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.finish{
   text-decoration:line-through;
}
.listItem{
  cursor: pointer;
}
</style>
