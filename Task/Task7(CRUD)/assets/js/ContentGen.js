export function CardGen(Data) {
    const Container = document.querySelector(".DataContainer");
    // Container.innerHTML = ""; // Clear old cards
    const Card = document.createElement('div');
    Card.classList.add("Card");
    Card.dataset.id=Data.id;

    const TopData = document.createElement('div');
    TopData.classList.add("TopData");

    const Name = document.createElement('h3');
    Name.innerText = Data.name;
    TopData.appendChild(Name);

    const MiddleData = document.createElement('div');
    MiddleData.classList.add("MiddleData");

    const Table = document.createElement('table');
    const row1 = document.createElement('tr');
    const Course = document.createElement('td');
    Course.textContent = "Course";
    const CourseDetail = document.createElement('td');
    CourseDetail.textContent = Data.course;
    row1.appendChild(Course);
    row1.appendChild(CourseDetail);

    const row2 = document.createElement('tr');
    const Year = document.createElement('td');
    Year.textContent = "Year";
    const YearDetail = document.createElement('td');
    YearDetail.textContent = Data.year;
    row2.appendChild(Year);
    row2.appendChild(YearDetail);

    const row3 = document.createElement('tr');
    const Grade = document.createElement('td');
    Grade.textContent = "Grade";
    const GradeDetail = document.createElement('td');
    GradeDetail.textContent = Data.grade;
    // Course.innerHTML=`<span>`
    row3.appendChild(Grade);
    row3.appendChild(GradeDetail);

    const row4 = document.createElement('tr');
    const GPA = document.createElement('td');
    GPA.textContent = "GPA";
    const GPADetail = document.createElement('td');
    GPADetail.textContent = Data.gpa;
    row4.appendChild(GPA);
    row4.appendChild(GPADetail);

    Table.appendChild(row1);
    Table.appendChild(row2);
    Table.appendChild(row3);
    Table.appendChild(row4);

    const Email = document.createElement('p');
    Email.textContent = Data.email;

    MiddleData.appendChild(Table);
    MiddleData.appendChild(Email);

    const BottomData = document.createElement('div');
    BottomData.classList.add("BottomData");
    BottomData.innerHTML = `
        <input type="button" onclick="EditForm(${Data.id})" value=" Edit">
        <input type="button" onclick="DeletePopUp(${Data.id})" value="Delete">
    `
    // const DeleteButton = document.createElement("button");
    // DeleteButton.textContent = "Delete";
    // DeleteButton.type = "button";
    // DeleteButton.addEventListener("click", () => DeleteCard(id));
    // BottomData.appendChild(DeleteButton);

    Card.appendChild(TopData);
    Card.appendChild(MiddleData);
    Card.appendChild(BottomData);

    Container.appendChild(Card);
}

export function DisplayAll(StudentDetails){
    document.querySelector(".DataContainer").innerHTML="";
    StudentDetails.forEach(element => {
    CardGen(element);
    });
}