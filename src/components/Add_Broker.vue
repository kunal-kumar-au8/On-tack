<template>
<div>
    <h1> Add Broker</h1>
    <form @submit="submitData" method="post">
        <input type="text" placeholder="Name" name="name" v-model="post.name"/><br><br>
        <input type="email" placeholder="Email"  name="email" v-model="post.email"/><br><br>
        <input type="number" placeholder="Phone"  name="phone" v-model="post.phone"/><br><br>
        <!-- <input type="number" placeholder="Alternate Phone"  name="alternate" v-model="post.alternate"/><br><br> -->
        <input type="text" placeholder="Jobs"  name="jobs" v-model="post.jobs"/><br><br>
        <input type="text" placeholder="tags"  name="tags" v-model="post.tags"/><br><br>
        <button type="submit">Submit</button>
    </form>
</div>
</template>

<script>
import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios,axios)
export default {
    name: "Add_Broker",
    data()
    {
        return {
            post:{
            name:null,
            email:null,
            phone:null,
            // alternate:null,
            jobs:null,
            tags:null
            }
        }
    },methods:
    {
        submitData(e)
        {
            this.axios.post('https://backend-bikex.herokuapp.com/api/broker',this.post)
            .then((result)=>{
                console.warn('result',result)
            })
            console.warn(this.post)
            e.preventDefault()
        }
    }
}
</script>