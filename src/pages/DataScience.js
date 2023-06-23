import React from "react";
import Courses from "../components/Courses";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import DataScienceData from "../data/DataScienceData";

export default function DataScience(){
    const cour = DataScienceData.map(item => {
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
                <h1>Data Science</h1>
                <section className="courses">
                {cour}
                </section>
            </div>
            <Footer></Footer>
           
        </div>
    )
}