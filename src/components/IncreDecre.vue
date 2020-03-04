<template>
    <div>
        {{count}}
        <button v-on:click= "increment"> + </button>
        <button v-on:click= "decrement"> - </button>

        
    </div>
</template>

<script>
export default {
    data(){
        return {
        count: 0
            }
    },

    methods:{
        increment : function(){
            return this.count++;
        
        },

        decrement : function(){
            if(this.count == 0) {
                return this.count
            }
            else{
                return this.count--
            }
        }
    }
}
</script>