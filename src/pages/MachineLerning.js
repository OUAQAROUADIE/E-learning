import React from "react";
import Courses from "../components/Courses";
import Navbar from "../components/Navbar";
import MobileAppsData from "../data/MobileAppsData";
import Footer from "../components/Footer";



export default function MachineLerning(){
    const cour = MobileAppsData.map(item => {
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
                <h1>Machine Learning</h1>
                <section className="courses">
                {cour}
                </section>
            </div>
           <Footer></Footer>
        </div>
    )
}