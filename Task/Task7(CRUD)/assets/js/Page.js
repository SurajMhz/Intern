import { CardGen } from "./ContentGen.js";
// CardGen();
// let StudentDetails=[];

let StudentDetails = JSON.parse(localStorage.getItem("Data")) || [{ id: 1, name: "Suraj Maharjan", course: "Computer Science", year: "2025", grade: "A+", gpa: 34, email: "Suraj@gmail.com" }];
StudentDetails.forEach(element => {
    CardGen(element);
});

// CardGen({name:"Suraj Maharjan",course: "Computer Science", year: "3rd Year",grade: "A+",gpa: 34,email: "Suraj@gmail.com"});
// CardGen({name:"Suraj Maharjan",course: "Computer Science", year: "3rd Year",grade: "A+",gpa: 34,email: "Suraj@gmail.com"});
// CardGen({name:"Suraj Maharjan",course: "Computer Science", year: "3rd Year",grade: "A+",gpa: 34,email: "Suraj@gmail.com"});


// This makes the button work but not a submit one. Cant make it check form entries
/*
document.getElementById("FormAddButton").addEventListener("click", (e)=>{
    e.preventDefault(); 
    CheckData(); 
});
*/

//Makes the button submit making it check form entries default one with required
const StudentForm = document.getElementById("Form");
StudentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    CheckData();
});

function CheckData() {
    let error = false;
    const Name = document.querySelector(".FullName").value.trim();
    const Email = document.querySelector(".Email").value.trim();
    const Course = document.querySelector(".Course").value.trim();
    const StudentID = document.querySelector(".StudentId").value.trim();
    const AcademicYear = document.querySelector(".AcademicYear").value.trim();
    const GPA = document.querySelector(".GPA").value.trim();

    let Grade = "";

    if (GPA >= 3.7 && gpa <= 4.0) Grade = "A+";
    else if (GPA >= 3.3) Grade = "A";
    else if (GPA >= 3.0) Grade = "B+";
    else if (GPA >= 2.7) Grade = "B";
    else if (GPA >= 2.3) Grade = "C+";
    else if (GPA >= 2.0) Grade = "C";
    else if (GPA >= 1.7) Grade = "D+";
    else if (GPA >= 1.0) Grade = "D";
    else Grade = "F";

    const TotalData = { name: Name, email: Email, course: Course, id: StudentID, year: AcademicYear, gpa: GPA, grade: Grade };
    /* //(.some() is better than forEach)
        StudentDetails.forEach(data => {
            if (StudentID.value == data.id) {
                alert("Data already exists.");
                error=true;
            }
        });
    */
    if (StudentDetails.some(data => data.id == StudentID)) {
        alert("Data already exists.");
        error = true;
    }

    if (!error) {
        LoadData(TotalData);
        document.querySelector(".FullName").value = "";
        document.querySelector(".Email").value = "";
        document.querySelector(".Course").value = "";
        document.querySelector(".StudentId").value = "";
        document.querySelector(".AcademicYear").value = "";
        document.querySelector(".GPA").value = "";
    }
}
function LoadData(Data) {
    CardGen(Data);
    StudentDetails.push(Data);
    localStorage.setItem("Data",JSON.stringify(StudentDetails));
}
function DeleteCard(id){
    
}