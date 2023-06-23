import React from "react";
import Courses from "../components/Courses";
import Navbar from "../components/Navbar";
import DevWebData from "../data/DevWebData";
import Footer from "../components/Footer";



export default function DevWeb(){
    const cour = DevWebData.map(item => {
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
                <h1>Dev Web</h1>
                <section className="courses">
                {cour}
                </section>
            </div>
            <Footer></Footer>
           
        </div>
    )
}