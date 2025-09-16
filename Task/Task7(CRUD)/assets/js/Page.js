import { CardGen, DisplayAll } from "./ContentGen.js";
// CardGen();
// let StudentDetails=[];

let StudentDetails = JSON.parse(localStorage.getItem("Data")) || [{ id: 1, name: "Suraj Maharjan", course: "Computer Science", year: "2025", grade: "A+", gpa: 34, email: "Suraj@gmail.com" }];
DisplayAll(StudentDetails);

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
let EditStudentData = null;
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

    if (GPA >= 3.7 && GPA <= 4.0) Grade = "A+";
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
    if (EditStudentData) {
        const index = StudentDetails.findIndex(s => s.id == EditStudentData.id);
        StudentDetails[index] = TotalData;
        EditStudentData = null;
        localStorage.setItem("Data", JSON.stringify(StudentDetails));
        DisplayAll(StudentDetails);
        ResetForm();
        HidePopUp();
        ToAddNewStudent();
        return;
    }
    else
        if (StudentDetails.some(data => data.id == StudentID)) {
            alert("Data already exists.");
            error = true;
        }

    if (!error) {
        LoadData(TotalData);
        ResetForm();
        HidePopUp();
    }
}
function ResetForm() {
    document.querySelector(".FullName").value = "";
    document.querySelector(".Email").value = "";
    document.querySelector(".Course").value = "";
    document.querySelector(".StudentId").value = "";
    document.querySelector(".AcademicYear").value = "";
    document.querySelector(".GPA").value = "";
}
function LoadData(Data) {
    CardGen(Data);
    StudentDetails.push(Data);
    localStorage.setItem("Data", JSON.stringify(StudentDetails));
}
function DeleteCard(id) {
    StudentDetails = StudentDetails.filter(data => data.id != id);
    localStorage.setItem("Data", JSON.stringify(StudentDetails));
    DisplayAll(StudentDetails);
    HidePopUp(true);
}
function DeletePopUp(id) {
    const ConfirmDelete = document.querySelector(".ConfirmDelete");
    ConfirmDelete.classList.remove("DisplayNone");
    ConfirmDelete.innerHTML = `
            <div class="ConfirmBox">
                <p>Are you sure you want to delete this student?</p>
                <div class="ConfirmActions">
                    <button class="CancelBtn" onclick="HidePopUp(true)">Cancel</button>
                    <button class="DeleteBtn" onclick="DeleteCard(${id});">Delete</button>
                </div>
            </div>
            `
}

function EditForm(id) {
    ShowPopUp()
    StudentDetails.forEach(element => {
        if (element.id == id) {
            EditStudentData = element;
            document.querySelector(".FullName").value = element.name;
            document.querySelector(".Email").value = element.email;
            document.querySelector(".Course").value = element.course;
            document.querySelector(".StudentId").value = (element.id);
            document.querySelector(".StudentId").readOnly = true;
            document.querySelector(".AcademicYear").value = element.year;
            document.querySelector(".GPA").value = element.gpa;
            document.querySelector(".LowerForm").innerHTML = `
                <button>Cancel</button>
                <button type="submit" id="FormUpdateButton">Update Student</button>
                `
            document.querySelector(".UpperForm").innerHTML = `
            <label>Edit Student Data</label>
                <button>X</button>
            `
        }
    });

}
function ToAddNewStudent() {
    document.querySelector(".StudentId").readOnly = false;
    document.querySelector(".LowerForm").innerHTML = `
                <button>Cancel</button>
                <button type="submit" id="FormAddButton">Add Student</button>
                `
    document.querySelector(".UpperForm").innerHTML = `
            <label>Add New Student</label>
                <button>X</button>
            `
}
function ShowPopUp() {
    const PopUpModel = document.querySelector(".StudentPopUp");
    PopUpModel.classList.remove("DisplayNone");
    PopUpModel.classList.add("ShowPopUp");
    document.body.style.overflow = "hidden";
}
function HidePopUp(isactive) {
    if (isactive) {
        const ConfirmDelete = document.querySelector(".ConfirmDelete");
        ConfirmDelete.classList.add("DisplayNone");
    }
    else {
        ResetForm();
        const PopUpModel = document.querySelector(".StudentPopUp");
        PopUpModel.classList.add("DisplayNone");
        PopUpModel.classList.remove("ShowPopUp");
        document.body.style.overflow = "auto";
    }
}

/*
    function HidePopUp(card){
        const ConfirmDelete=document.querySelector(".ConfirmDelete");
        ConfirmDelete.classList.remove("DisplayNone");
    }
*/

//in module all functions are local so need to make functions global so contents genereted using js can get it
window.DeletePopUp = DeletePopUp;
window.DeleteCard = DeleteCard;
window.EditForm = EditForm;
window.ShowPopUp = ShowPopUp;
window.HidePopUp = HidePopUp;

