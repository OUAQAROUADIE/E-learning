import React from "react";
import Courses from "../components/Courses";
import Navbar from "../components/Navbar";
import GameDevData from "../data/GameDevData";
import Footer from "../components/Footer";



export default function GameDevelopment(){
    const cour = GameDevData.map(item => {
        return (
            <Courses 
                key={item.id}
                {...item}
                
            />
            
        )
    })
    return(
        <div>
            <Navbar></Navbar>
            <div className="coursess">
                <h1>Game Development</h1>
                <section className="courses">
                {cour}
                </section>
            </div>
           <Footer></Footer>
        </div>
    )
}