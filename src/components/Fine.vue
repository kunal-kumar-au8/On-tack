<template>
    <div class="container">
        <h2>On-Track</h2>
        <h4>Police Fine</h4>
         
                <input type="text" v-model="searchKey"/>
                <button v-on:click="searchVehicle">Search</button>
        <div class="Fine">     
               
                <table border="1px">
                    <tr v-for="i in list" v-bind:key="i.id">
                        <td>{{i.ViolationDate}}</td>
                        <td>Rs:{{i.FineAmount}}</td>
                    </tr>
                </table>
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
            list:undefined,
            searchKey:""
            
        }
    },
    methods:{
        searchVehicle()
    {
        Vue.axios.post("https://corsanywhere.herokuapp.com/https://www.karnatakaone.gov.in/PoliceCollectionOfFine/FineDetails?SearchBy=REGNO&SearchValue="+this.searchKey+"&ServiceCode=BPS")
        .then(response=>{
            
            this.list=(response.data.PoliceFineDetailsList);
            // this.search=(response.data.PoliceFineDetailsList)
        
            console.log(response.data.PoliceFineDetailsList);

        })
        
    }
}
}
</script>