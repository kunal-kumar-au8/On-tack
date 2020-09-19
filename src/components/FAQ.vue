<template>
    <div>
        <h2>
            FAQ
        </h2>
        <p>Most frequent questions and answers</p>
        <div class="container">
            <h2 v-for="i in data" v-bind:key="i.id">
                <p>{{i.question}}</p>
                <p>{{i.answer}}</p>
            </h2>

        </div>
    </div>
</template>
<script>
import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";
Vue.use(VueAxios,axios)
import "../assets/style/FAQ.css"
export default {
    name:"FAQ",
    data()
    {
        return{
            data:undefined
        }
    },
    mounted()
            {  
                Vue.axios.post('https://api.on-track.in/api/FAQList',{},{
                headers: {
                    'Content-Type':  'application/json',
                    'Authorization': 'Basic YWRtaW5BdXRoOnZpc2h1QDE5OTI='
                    }})
                    .then((response)=>{
                        this.data=(response.data.FAQList)
                     console.log(response.data.FAQList)
                    })
                    .catch(err=>{
                        console.log(err)
                    })
                   
            }
    }

</script>