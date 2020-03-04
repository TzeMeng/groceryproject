<template>
  <div id="app">    
    <app-header></app-header>
    <PageContent v-bind:itemsList = "itemsList"></PageContent>
    <app-footer></app-footer>
    
  </div>
</template>

<script>
//Registering components Locally
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import PageContent from './components/PageContent.vue'

export default {
  name: 'App',

  data(){
    return{
        itemsList: [{name:'Eggs',image:'./assets/eggs.jpg',show:true},
                    {name:'Bread',image:'/assets/bread.jfif',show:true},
                    {name:'Jam',image:'/assets/jam.jfif',show:true},
                    {name:'CornFlakes',image:'/assets/cornflakes.jfif',show:true},
                    {name:'Milk',image:'/assets/milk.jfif',show:true},
                    {name:'Juice',image:'/assets/juice.jfif',show:true}]
        }
  },
  components: {
    //Registering with a name
    'app-header':Header,
    'app-footer':Footer,
    //Registering without a name
    PageContent
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
