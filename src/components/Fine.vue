<template>
    <div class="container">
        <h2>Fine</h2>
        <div class="Fine">
                    
                <h1>Police Fine Details List</h1>
                <ol v-if="list.length">
                    <li v-for="(i,index) in list" v-bind:key="index">
                        {{i.FineAmount}}
                    </li>
                    

                </ol>
                  
              
           
        </div>
    </div>

</template>
<script>
import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "axios";
Vue.use(VueAxios,axios)
import "../assets/style/Fine.css"
export default {
    name:"Fines",
    data()
    {
        return{
            list:undefined
        }
    },
    mounted()
    {
        Vue.axios.post("https://corsanywhere.herokuapp.com/https://www.karnatakaone.gov.in/PoliceCollectionOfFine/FineDetails?SearchBy=REGNO&SearchValue=KA51AF0173&ServiceCode=BPS")
        .then(response=>{
            
            this.list=(response.data.PoliceFineDetailsList);
        
            console.log(response.data.PoliceFineDetailsList);

        })
        
    }
}
</script>