<template>

     
         <div class="faq-container">
          <div class="faq-head">
            <h2 class="faq-title" >FAQ</h2>
            <p class="faq-sub">Most frequently asked question</p>
          </div>
            <div class="faq-question" v-on:click="toggle(index+1)" v-for="(item, index) in data" v-bind:key="index">
                <div class="faq-description"><span class="faq-number">{{index + 1 }}.</span>{{item.question}}<span>+</span></div>
                 <div class="faq-question" v-on:click="toggle(index)" v-for="(item, index) in data" v-bind:key="index">
                <div class="faq-content" style="display: none;">
                    <p>{{item.answer}}</p>
                </div>
                 </div>
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
                   
            },

         methods: 
         {
             toggle: function(num) {
                if (this.$el.children[num].classList.contains('open')) {
                    this.$el.children[num].classList.remove('open')

                    this.$el.children[num].querySelectorAll('.faq-content')[0].style.display = 'none'
                } 
                else {
                    var prevFaqQuestion = this.$el.querySelectorAll('.open')
                    if (prevFaqQuestion.length !== 0) {

                    prevFaqQuestion[0].classList.remove('open')

                    prevFaqQuestion[0].querySelectorAll('.faq-content')[0].style.display = 'none'

                    }

                    this.$el.children[num].classList.add('open')
                    this.$el.children[num].querySelectorAll('.faq-content')[0].style.display = ''

                }

    },
  },
        
}

</script>