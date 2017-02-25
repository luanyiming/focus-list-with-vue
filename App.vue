<template>
  <div id="app">
    <div class="time" v-text='time'></div>
    <div class="list">
      <div class="list_title" v-html='msg'></div>
      <input class="list_input" type="text" v-model='newItem' v-on:keyup.enter='addItem' name="">
      <ul class="listWrap">
        <li v-for='i in items' v-html='i.label' v-bind:class='[{finish:i.isFinished},listItem]' v-on:click='toggleFinish(i)'></li>
      </ul>
    </div>
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
      newItem:'',
      time:''
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
  mounted:function(){
    this.$nextTick(function () {
        this.currentTime();
    })
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
        },
        currentTime:function(){
          var _this = this;
            setTimeout(function(){
                _this.time = Storage.currentTime();
                setInterval(function(){
                    _this.time = Storage.currentTime();
                }, 60000);
            }, 0)
        }
    }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
html{
  height: 100%;
}
body{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #000 url('./assets/bg.jpg') center no-repeat;
  background-size: cover;
  min-height: 100%;
}
#app {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 10;
  text-align: center;
  color: #fff;
  height: 100%;
  width: 100%;
}
.time{
  position: absolute;
  left: 50%;
  top: 13%;
  transform: translate(-50%,-50%);
  font-size: 120px;
}
.list{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
.list_title{
  font-size: 32px;
}
.list_input{
  border: none;
  outline: none;
  border-bottom: 2px solid #fff;
  background: 0;
  width: 500px;
  height: 42px;
  line-height: 42px;
  font-size: 32px;
  text-align: center;
  color: #fff;
}
.listWrap{
  list-style: none;
  margin: 12px 0 0 0;
}
.listItem{
  cursor: pointer;
  font-size: 20px;
  line-height: 30px;
  height: 30px;
}
.finish{
   text-decoration:line-through;
}
</style>
