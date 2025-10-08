import "./page.css"
import Header from "../Header/header";
import Footer from "../Footer/footer";
import AtomicHabit from "../images/AtomicHabit.jpg";
function MainPage(){
    return(
        <>
        <Header/>
        <div className="BookContainer">

            <div className="BookCard">
                <img src={AtomicHabit} className="BookImage" />
                <h1 className="BookName">Atomic Habits</h1>
                <h1 className="BookAuthor"> Author:Prince Penman</h1>
                <h2 className="BookGenre">Genre: Self-help book</h2>
            </div>
        
        
            <div className="BookCard">
                <img src={AtomicHabit} className="BookImage" />
                <h1 className="BookName">Atomic Habits</h1>
                <h1 className="BookAuthor"> Author:Prince Penman</h1>
                <h2 className="BookGenre">Genre: Self-help book</h2>
            </div>
        
         
            <div className="BookCard">
                <img src={AtomicHabit} className="BookImage" />
                <h1 className="BookName">Atomic Habits</h1>
                <h1 className="BookAuthor"> Author:Prince Penman</h1>
                <h2 className="BookGenre">Genre: Self-help book</h2>
            </div>
            
        </div>
        <Footer/>
        </>
    )
}
export default MainPage;