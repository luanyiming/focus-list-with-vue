<template>
  <div id="app">
    <h1 v-html='msg'></h1>
    <ul>
      <li v-for='i in items' v-html='i.label' v-bind:class='{finish:i.isFinished}'></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
/*data:function(){

}*/
  data(){
    return{
      msg:'first',
      items:[
        {
          label:'coding',
          isFinished:false
        },
        {
          label:'eat',
          isFinished:true
        }
      ]
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
  color: green;
  font-weight: 700;
}
</style>
