let Data=[
    {id:1,name:"Suraj",age:19,course:"BCSIT",email:"Suraj@gmail.com"},
    {id:2,name:"Shyam",age:20,course:"BBA",email:"shyam20@gmail.com"},
    {id:3,name:"Hari",age:21,course:"Engineering",email:"hari@gmail.com"},
    {id:4,name:"Sita",age:18,course:"Nursing",email:"sita@gmail.com"},
    {id:5,name:"Gita",age:22,course:"Management",email:"gita@gmail.com"},
    {id:6,name:"Maya",age:23,course:"Law",email:"maya@gmail.com"},
    {id:7,name:"Kiran",age:24,course:"MBA",email:"kiran@gmail.com"},
    {id:8,name:"Abishek",age:19,course:"BCS",email:"abishek@gmail.com"},
    {id:9,name:"Shreya",age:20,course:"BCSIT",email:"shreya@gmail.com"},
    {id:10,name:"Gray",age:18,course:"BIT",email:"gray@gmail.com"}
];
let TableData = document.querySelector(".TableData");
    Data.forEach((p,i)=>{
        TableData.innerHTML+=`
        <tr>
            <td>${p.id}</td>
            <td>${p.name}</td>
            <td>${p.age}</td>
            <td>${p.course}</td>
            <td>${p.email}</td>
            <td><button class="genBtn" onclick="CheckGen(${i})">genZ?</button></td>
        </tr>
    `
    })

    // document.querySelectorAll(".genBtn").forEach((btn, i)=>{
    // btn.addEventListener("click", ()=>{
    //     let detail = Data[i];
    //     if(detail.age>=13 && detail.age<=28){
    //         console.log(detail.name + " is Gen Z");
    //          }
    //     });
    // });

function CheckGen(p){
console.log(p);
let detail = Data[p];
    if(detail.age>=13 && detail.age<=28){
        console.log("IS Gen-Z")
        alert(detail.name+" is Gen-Z")
    }
    else{
        console.log("IS not Gen-Z")
        alert("Not Gen-Z")
    }
}
let AverageOption=document.querySelector(".AverageAge");
let Average=0;
Data.forEach(
    p=>{
        Average+=p.age;
    }
)
Average=Average/(Data.length);


    function AverageShow(){
        AverageOption.innerHTML=`
        <p>${Average}</p>
        `
    }