import React from "react";
import Courses from "../components/Courses";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import backendData from "../data/backendData";

export default function BackendSystems(){
    const cour = backendData.map(item => {
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
                <h1>Back-end Systems</h1>
                <section className="courses">
                {cour}
                </section>
            </div>
           <Footer></Footer>
        </div>
    )
}