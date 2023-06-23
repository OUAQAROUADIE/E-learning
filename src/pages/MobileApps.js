import React from "react";
import Courses from "../components/Courses";
import MobileAppsData from "../data/MobileAppsData";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function MobileApps(){
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
                <h1>Mobile Apps</h1>
                <section className="courses">
                {cour}
                </section>
            </div>
           <Footer></Footer>
        </div>
    )
}