// const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

// accordionItemHeaders.forEach(accordionItemHeader => {
//   accordionItemHeader.addEventListener("click", event => {
    
//     const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
//     if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
//       currentlyActiveAccordionItemHeader.classList.toggle("active");
//       currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
//     }

//     accordionItemHeader.classList.toggle("active");
//     const accordionItemBody = accordionItemHeader.nextElementSibling;
//     if(accordionItemHeader.classList.contains("active")) {
//       accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
//     }
//     else {
//       accordionItemBody.style.maxHeight = 0;
//     }
    
//   });
// });



// <template>
//     <div>
//             <h1>FAQ</h1>
//         <p class="faq_head_p">Most frequent questions and answers</p>
//         <div class="accordion">
//             <div class="accordion-item" >
//                 <div class="accordion-item-header " v-for="(i) in data" v-bind:key="i.id">
//                     {{i.question}}
                  
//                 </div>  

//                 <div class="accordion-item-body">
//                 <div class="accordion-item-body-content" v-for="(i) in data" v-bind:key="i.id">
//                       {{i.answer}}
                    
//                 </div>
//                 </div>
//             </div>
//             </div>
//             <!-- <h2>
//                 FAQ
//             </h2>
//             <p>Most frequent questions and answers</p>
//             <div class="container">
//                 <h2 v-for="i in data" v-bind:key="i.id">
//                     <p>{{i.question}}</p>
//                     <p>{{i.answer}}</p>
//                 </h2>

//             </div> -->
//     </div>
// </template>
// <script>
// import Vue from "vue";
// import VueAxios from "vue-axios";
// import axios from "axios";
// Vue.use(VueAxios,axios)
// import "../assets/style/FAQ.css"
// export default {
//     name:"FAQ",
//     data()
//     {
//         return{
//             data:undefined
//         }
//     },
//     mounted()
//             {  
//                 Vue.axios.post('https://api.on-track.in/api/FAQList',{},{
//                 headers: {
//                     'Content-Type':  'application/json',
//                     'Authorization': 'Basic YWRtaW5BdXRoOnZpc2h1QDE5OTI='
//                     }})
//                     .then((response)=>{
//                         this.data=(response.data.FAQList)
//                      console.log(response.data.FAQList)
//                     })
//                     .catch(err=>{
//                         console.log(err)
//                     })
                   
//             },
//     methods:{
//        function () {
            
//          const accordionItemHeaders = document.querySelectorAll(".accordion-item-header")
//          accordionItemHeaders.forEach(accordionItemHeader => {
//         accordionItemHeader.addEventListener("onclick", (e) => {

//             const currentlyActiveAccordionItemHeader=document.querySelector(".accordion-item-header.active");
//             if(currentlyActiveAccordionItemHeader&&currentlyActiveAccordionItemHeader!==accordionItemHeader) {
//               currentlyActiveAccordionItemHeader.classList.toggle("active");
//               currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight=0;
//             }

//             accordionItemHeader.classList.toggle("active");
//             const accordionItemBody=accordionItemHeader.nextElementSibling;
//             if(accordionItemHeader.classList.contains("active")) {
//               accordionItemBody.style.maxHeight=accordionItemBody.scrollHeight+"px";
//             }
//             else {
//               accordionItemBody.style.maxHeight=0;

//             }

//           })
// })
//     }
//     }
// }

// </script>