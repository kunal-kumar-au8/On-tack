<template>
  <div class="faqs">
    <div class="col-md-12 p-4 mb-0 mt-4 col-12 mobile top-content">
      <div class="row">
        <div class="col-md-5 p-0 m-0 pl-4 text-left d-flex">
          <h5 class="header">
            <strong>FAQS</strong>
          </h5>
        </div>
        <div class="col-md-4 pt-1 mr-3 d-flex justify-content-between">
          <p
            class="p-0 m-0 pt-1 no-wrap"
          >Showing entries.</p>
          <!-- <div>
            <input type="text" v-model="search" placeholder="search here.." class="search ml-4" />
          </div> -->
        </div>
        <div class="col-md-2 p-0 m-0 text-right d-flex justify-content-end">
          <button class="btn round" >
            <i class="fa fa-plus" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-11 mt-0" style="margin:0 auto">
      <table class="table col-md-12">
        <tr>
          <th>INDEX</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <!-- <th>Alternate Phone</th> -->
          <th>Jobs</th>
          <th>Tags</th>
        </tr>
        <tr v-for="(item,index,) in list" v-bind:key="item.index">
          <td>{{index+1}}</td>
          <td class="no-wrap">{{item.name}}</td>
          <td>{{item.email}}</td>
          <td>{{item.phone}}</td>
          <!-- <td>Alternate Phone</td> -->
          <td>{{item.jobs}}</td>
          <td>{{item.tags}}</td>
          <td class="no-wrap">
            <div class="m-0 p-0">
              <button v-on:click="deleteBroker(item._id,index)" class="button btn round mr-2 m-0">
                <i class="fa fa-trash-o" aria-hidden="true">
                </i>
              </button>
              <button class="button btn round m-0">
                <i class="fa fa-pencil" aria-hidden="true"></i>
              </button>
            </div>
          </td>
        </tr>
        <!-- <tr>
                <td>demo</td>
                <td>demo</td>
                <td>demo</td>
                <td >
                    <div class="m-0 p-0">
                    <button class="button btn btn-primary mr-2 m-0"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                    <button class="button btn btn-primary m-0"><i class="fa fa-pencil" aria-hidden="true"></i></button>
                    </div>
                </td>
        </tr>-->
      </table>
      <div class="loader mt-5" style="min-height:200px;">
        <h5 class="pt-4">Fetching all Faq's.....</h5>
        
      </div>
      <div class="loader mt-5" style="min-height:200px;">
        <h5 class="pt-4">It seems that there are no datas here or server is down.....</h5>
        <h6>Try refreshing, or check your internet connectivity!</h6>
      </div>
    </div>

  </div>
</template>
<script>
import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios,axios)
export default {
  name: "Broker",
  data()
  {
      return{
           list:undefined,
           editBroker:null
      }
   
  },
  methods:{
    deleteBroker(_id,index){
      Vue.axios.delete('https://backend-bikex.herokuapp.com/api/broker/'+ _id) 
     .then((resp)=>{
       this.list.splice(index,1);
        console.warn(resp)
     })
    }
  },
  updateBroker(item,_id){
      Vue.axios.put('https://backend-bikex.herokuapp.com/api/broker/'+ _id) 
     .then((resp)=>{
       this.editBroker=null
        console.warn(resp)
     })
    },
  mounted()
  {
    Vue.axios.get('https://backend-bikex.herokuapp.com/api/broker')
     .then((resp)=>{
       this.list=resp.data
        console.warn(resp.data)
     })
  }
  
}

</script>

<style>
*{
    color: white;
}
.table td {
  padding: 5px;
  margin: 0;
  font-size: 14px;
}
.faqs {
  margin: 0 auto;
  font-size: 12px;
}
.button {
  border-radius: 50%;
  background-color: rgb(199, 38, 38);
  border: none;
}
.button1 {
  border-radius: 50px;
  background-color: rgb(199, 38, 38);
  border: none;
}
.modals {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 999999; /* Sit on top */
  padding-top: 10px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}
.displayModal {
  display: block !important;
}
/* modals Content */
.modals-content {
  background-color: black;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}

/* The Close Button */
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
#overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(233, 227, 227, 0.3);
  z-index: 2;
  cursor: pointer;
}

#text {
  position: absolute;
  top: 50%;
  left: 50%;
}
.no-wrap {
  overflow: hidden;
  white-space: nowrap; /* Don't forget this one */
  text-overflow: ellipsis;
}
table {
  border-collapse: separate;
  border-spacing: 0 1em;
  
}
.table td,
.table th {
  border: none;
  padding: 1.35rem;
  background: #1d2d50;
}
.table tr {
  background-color: rgba(248, 242, 242, 0.5);
  border-radius: 10px;
}
.top-content {
  background-color: black;
}
.header {
  font-size: 1.25rem;
  border-left: 4px solid #ffb52f;
  padding-left: 7px;
  padding-top: 3px;
}
.search {
  border-radius: 10px;
  border: 1px solid #ffb52f;
  padding: 5px;
  width: 100%;
}
.round {
  border-radius: 50%;
  background-color: #ffb52f;
  color: #133b5c;
}
.round {
  border-radius: 50%;
  background: linear-gradient(to left, #133b5c , #ffb52f 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  cursor: pointer;
  transition: all ease 0.1s;
  color: #000;
}
.round:hover {
  background-position: left bottom;
  color: #133b5c;
}
</style>
