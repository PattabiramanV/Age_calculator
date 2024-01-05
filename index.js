"use strict"

// let input_box=document.querySelector("input");
// let caluculate_btn=document.querySelector("button");
// let output_show_content=document.querySelector("p");
// let All_span_tag=document.querySelectorAll("span");

// let current_date=new Date().getDate();
// let current_month=new Date().getMonth()+1;
// let current_year=new Date().getFullYear();
// input_box.setAttribute("max",`${current_year}-${current_month}-${current_date}`);

// caluculate_btn.addEventListener("click",()=>{

// let past_date=input_box.value.split("-");
// console.log(new Date(input_box.value).getDate());
// console.log(past_date);
// let current_date=new Date().getDate();
// let current_month=new Date().getMonth()+1;
// let current_year=new Date().getFullYear();

// let get_year=0;
// let get_month=0;
// let get_days=0;
// if(past_date[1]<current_month){
//  get_year=current_year-past_date[0];
//  get_month=current_month-past_date[1];
// }
// else if(past_date[0]==current_year &&  current_month==past_date[1]) { 

//     get_year=0; 
//     get_month=0;
// }
// else{

//     console.log("hii");
// current_year--;
//     get_year=current_year-past_date[0];
//     get_month=12-past_date[1]+current_month;
// }

// // let particular_day=0

// if(past_date[2]>current_date){
//     if(current_month!=past_date[1]){
//         current_month--;

//     }
// get_month--;
//     get_days=new Date(current_year,current_month,0).getDate();
//     get_days=get_days-past_date[2]+current_date;
  
// }
// else{
//     get_days=current_date-past_date[2];

// }

// All_span_tag[0].innerHTML=get_year;
// All_span_tag[1].innerHTML=get_month;
// All_span_tag[2].innerHTML=get_days;
// All_span_tag[0].parentElement.style.display="block";
// setTimeout(()=>{
//     All_span_tag[0].parentElement.style.display="none";
// },2000)

// });



//....................................Another method......................//


let input_box=document.querySelector("input");
let caluculate_btn=document.querySelector("button");
let output_show_content=document.querySelector("p");
let All_span_tag=document.querySelectorAll("span");

let current_date=new Date().getDate();
let current_month=new Date().getMonth()+1;
let current_year=new Date().getFullYear();
input_box.setAttribute("max",`${current_year}-${current_month}-${current_date}`);

caluculate_btn.addEventListener("click",()=>{

let past_date=input_box.value.split("-");
console.log(new Date(input_box.value).getDate());
console.log(past_date);
let current_date=new Date().getDate();
let current_month=new Date().getMonth()+1;
let current_year=new Date().getFullYear();

let get_year=current_year-past_date[0];
let get_month=current_month-past_date[1];
let get_days=current_date-past_date[2];
if(past_date[1]>=current_month){
get_year--;
get_month=12-past_date[1]+current_month;

}
 if(current_date<past_date[2]){

    get_month--;
    current_month--;
    get_days=new Date(past_date[0],past_date[1],0).getDate();
    get_days=get_days-past_date[2]+current_date;

}

else if(past_date[0]==current_year &&  current_month==past_date[1]) { 

    get_year=0; 
    get_month=0;
}

All_span_tag[0].innerHTML=get_year;
All_span_tag[1].innerHTML=get_month;
All_span_tag[2].innerHTML=get_days;
All_span_tag[0].parentElement.style.display="block";
setTimeout(()=>{
    All_span_tag[0].parentElement.style.display="none";
},2000)

});

//.........................chatGpt Code.................................//

// const inputBox = document.querySelector("input");
// const calculateBtn = document.querySelector("button");
// const outputShowContent = document.querySelector("p");
// const allSpanTags = document.querySelectorAll("span");

// const getCurrentDate = () => {
//   const currentDate = new Date();

// console.log("hello");

//   return {
//     year: currentDate.getFullYear(),
//     month: currentDate.getMonth() + 1,
//     date: currentDate.getDate(),
//   };

// };

// const calculateDifference = () => {
//   const pastDate = inputBox.value.split("-").map(Number)
// console.log(pastDate);
// console.log("hi");

//   const { year: currentYear, month: currentMonth, date: currentDate } = getCurrentDate();
//   console.log("what");

//   let getYear = 0;
//   let getMonth = 0;
//   let getDays = 0;
// // console.log(year);
//   if (pastDate[1] < currentMonth) {
//     getYear = currentYear - pastDate[0];
//     getMonth = currentMonth - pastDate[1];
//   } else if (pastDate[0] === currentYear && currentMonth === pastDate[1]) {
//     getYear = 0;
//     getMonth = 0;
//   } else {
//     currentYear--;
//     getYear = currentYear - pastDate[0];
//     getMonth = 12 - pastDate[1] + currentMonth;
//   }

//   if (pastDate[2] > currentDate) {
//     if (currentMonth !== pastDate[1]) {
//       currentMonth--;
//     }
//     getMonth--;
//     getDays = new Date(currentYear, currentMonth, 0).getDate();
//     getDays = getDays - pastDate[2] + currentDate;
//   } else {
//     getDays = currentDate - pastDate[2];
//   }

//   return { getYear, getMonth, getDays };
// };

// calculateBtn.addEventListener("click", () => {
//   const { getYear, getMonth, getDays } = calculateDifference();

//   allSpanTags[0].innerHTML = getYear;
//   allSpanTags[1].innerHTML = getMonth;
//   allSpanTags[2].innerHTML = getDays;

//   allSpanTags[0].parentElement.style.display = "block";
  
//   setTimeout(() => {
//     allSpanTags[0].parentElement.style.display = "none";
//   }, 2000);
// });

