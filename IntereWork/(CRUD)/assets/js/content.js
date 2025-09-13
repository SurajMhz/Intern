// let StudentData = JSON.parse(localStorage.getItem("StudentData")) || [];
let StudentData=[];
let Edit=null;

function addData(e){
    e.preventDefault();
    const name = document.getElementById("Name").value;
    const email = document.getElementById("Email").value;
    const number = document.getElementById("Number").value;
    const course = document.getElementById("Course").value;

    if(Edit){ // editing existing
        StudentData = StudentData.map(s => s.id === Edit ? {id: Edit, name, email, number, course} : s);
        Edit = null;
    } else { // adding new
        let id = StudentData.length > 0 ? StudentData[StudentData.length - 1].id + 1 : 1;
        StudentData.push({id, name, email, number, course});
    }

    // reseting form
    document.getElementById("Name").value='';
    document.getElementById("Email").value='';
    document.getElementById("Number").value='';
    document.getElementById("Course").value='';

    displayAll();
}
function display(data){
let containTable=document.getElementById("Display");
containTable.innerHTML+=`
    <tr>
    <td>${data.id}</td>
    <td>${data.name}</td>
    <td>${data.email}</td>
    <td>${data.course}</td>
    <td><button onclick="deleteItem(${data.id})">Delete</button><button onclick="editData(${data.id})">Edit</button></td>
    </tr>
`;
}
function deleteItem(id){
    StudentData = StudentData.filter(p => p.id !== id);
    displayAll();
}
function displayAll(){
    let containTable=document.getElementById("Display");
    containTable.innerHTML=`
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
        <th>Course</th>
        <th>Action</th>
    </tr>
    `
    StudentData.forEach(data=>{  
    containTable.innerHTML+=`
        <tr>
        <td>${data.id}</td>
        <td>${data.name}</td>
        <td>${data.email}</td>
        <td>${data.course}</td>
        <td><button onclick="deleteItem(${data.id})">Delete</button><button onclick="editData(${data.id})">Edit</button></td>
        </tr>
    `;
    })
}
function editData(id){
    let data = StudentData.find(d => d.id === id);
    if(data){
        document.getElementById("Name").value = data.name;
        document.getElementById("Email").value = data.email;
        document.getElementById("Number").value = data.number;
        document.getElementById("Course").value = data.course;
        Edit = data.id;
    }
}
// function saveData(){
//     localStorage.setItem("StudentData", JSON.stringify(StudentData));
// }
StudentData.push({id:1, name:"Suraj", email:"Suraj@gmail.com", number:"9810101010", course:"bcsit"});
displayAll();
