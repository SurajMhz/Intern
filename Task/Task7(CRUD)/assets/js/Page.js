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
    Validation();
});
function Validation() {
    let Error = false;
    let Grade = "";
    const Name = document.querySelector(".FullName");
    const Email = document.querySelector(".Email");
    const Course = document.querySelector(".Course");
    const StudentID = document.querySelector(".StudentId");
    const AcademicYear = document.querySelector(".AcademicYear");
    const GPA = document.querySelector(".GPA");

    if (GPA.value.trim() >= 3.7 && GPA.value.trim() <= 4.0) Grade = "A+";
    else if (GPA.value.trim() >= 3.3) Grade = "A";
    else if (GPA.value.trim() >= 3.0) Grade = "B+";
    else if (GPA.value.trim() >= 2.7) Grade = "B";
    else if (GPA.value.trim() >= 2.3) Grade = "C+";
    else if (GPA.value.trim() >= 2.0) Grade = "C";
    else if (GPA.value.trim() >= 1.7) Grade = "D+";
    else if (GPA.value.trim()>= 1.0) Grade = "D";
    else Grade = "F";

    const TotalData = {
        name: Name.value.trim(),
        email: Email.value.trim(),
        course: Course.value.trim(),
        id: StudentID.value.trim(),
        year: AcademicYear.value.trim(),
        gpa: GPA.value.trim(),
        grade: Grade
    };

    const BelowName = document.getElementById("BelowName");
    const BelowEmail = document.getElementById("BelowEmail");
    const BelowId = document.getElementById("BelowId");
    const BelowCourse = document.getElementById("BelowCourse");
    const BelowYear = document.getElementById("BelowYear");
    const BelowGpa = document.getElementById("BelowGpa");

    // reset messages
    BelowName.textContent = "";
    BelowEmail.textContent = "";
    BelowId.textContent = "";
    BelowCourse.textContent = "";
    BelowYear.textContent = "";
    BelowGpa.textContent = "";

    if (!Name.value.trim()) {
        BelowName.textContent = "Name is required";
        Error = true;
    }

    if (!Email.value.trim()) {
        BelowEmail.textContent = "Email is required";
        Error = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Email.value)) {//regex pattern
        BelowEmail.textContent = "Enter a valid email";
        Error = true;
    }

    if (!Course.value.trim()) {
        BelowCourse.textContent = "Course is required";
        Error = true;
    }

    if (!AcademicYear.value.trim()) {
        BelowYear.textContent = "Academic year is required";
        Error = true;
    }

    if (!GPA.value.trim()) {
        BelowGpa.textContent = "GPA is required";
        Error = true;
    }

    if (EditStudentData) {
        const index = StudentDetails.findIndex(s => s.id == EditStudentData.id);
        StudentDetails[index] = TotalData;
        EditStudentData = null;
        localStorage.setItem("Data", JSON.stringify(StudentDetails));
        DisplayAll(StudentDetails);
        ResetForm();
        HidePopUp();
        return;
    } else if (!StudentID.value.trim()) {
        BelowId.textContent = "Student ID is required";
        Error = true;
    } else if (StudentDetails.some(data => data.id == StudentID.value.trim())) {
        BelowId.textContent = "Id already Used";
        Error = true;
    }

    if (!Error) {
        LoadData(TotalData);
        ResetForm();
        HidePopUp();
    }
}


// function CheckData() {
//     let error = false;
//     const Name = document.querySelector(".FullName").value.trim();
//     const Email = document.querySelector(".Email").value.trim();
//     const Course = document.querySelector(".Course").value.trim();
//     const StudentID = document.querySelector(".StudentId").value.trim();
//     const AcademicYear = document.querySelector(".AcademicYear").value.trim();
//     const GPA = document.querySelector(".GPA").value.trim();


//     /* //(.some() is better than forEach)
//         StudentDetails.forEach(data => {
//             if (StudentID.value == data.id) {
//                 alert("Data already exists.");
//                 error=true;
//             }
//         });
//     */
//     if (EditStudentData) {
//         const index = StudentDetails.findIndex(s => s.id == EditStudentData.id);
//         StudentDetails[index] = TotalData;
//         EditStudentData = null;
//         localStorage.setItem("Data", JSON.stringify(StudentDetails));
//         DisplayAll(StudentDetails);
//         ResetForm();
//         HidePopUp();
//         ToAddNewStudent();
//         return;
//     }
//     else
//         if (StudentDetails.some(data => data.id == StudentID)) {
//             alert("Data already exists.");
//             error = true;
//         }

//     if (!error) {
//         LoadData(TotalData);
//         ResetForm();
//         HidePopUp();
//     }
// }
function ResetForm() {
    document.querySelector(".FullName").value = "";
    document.querySelector(".Email").value = "";
    document.querySelector(".Course").value = "";
    document.querySelector(".StudentId").value = "";
    document.querySelector(".AcademicYear").value = "";
    document.querySelector(".GPA").value = "";
    ToAddNewStudent()
}
function LoadData(Data) {
    CardGen(Data);
    StudentDetails.push(Data);
    localStorage.setItem("Data", JSON.stringify(StudentDetails));
}
function DeleteCard(id) {
    // StudentDetails = StudentDetails.filter(data => data.id != id);
    // localStorage.setItem("Data", JSON.stringify(StudentDetails));
    // DisplayAll(StudentDetails);
    const card = document.querySelector(`.Card[data-id="${id}"]`);
    if (card) {
        card.classList.add("fade-out");
        card.addEventListener("transitionend", () => {
            StudentDetails = StudentDetails.filter(data => data.id != id);
            localStorage.setItem("Data", JSON.stringify(StudentDetails));
            card.remove(); //removes card with that id from the DOM or page
        }, { once: true });
        HidePopUp(true);
    }
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
                <button type="button" onclick="HidePopUp()">Cancel</button>
                <button type="submit" id="FormUpdateButton">Update Student</button>
                `
            document.querySelector(".UpperForm").innerHTML = `
            <label>Edit Student Data</label>
                <button type="button" onclick="HidePopUp()">X</button>
            `
        }
    });

}
function ToAddNewStudent() {
    document.querySelector(".StudentId").readOnly = false;
    document.querySelector(".LowerForm").innerHTML = `
                <button type="button" onclick="HidePopUp()">Cancel</button>
                <button type="submit" id="FormAddButton">Add Student</button>
                `
    document.querySelector(".UpperForm").innerHTML = `
            <label>Add New Student</label>
                <button type="button" onclick="HidePopUp()">X</button>
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


/*  function HidePopUp(card){
    const ConfirmDelete=document.querySelector(".ConfirmDelete");
    ConfirmDelete.classList.remove("DisplayNone");
}*/


//in module all functions are local so need to make functions global so contents genereted using js can get it
window.DeletePopUp = DeletePopUp;
window.DeleteCard = DeleteCard;
window.EditForm = EditForm;
window.ShowPopUp = ShowPopUp;
window.HidePopUp = HidePopUp;

