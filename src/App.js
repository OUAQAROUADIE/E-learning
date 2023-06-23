import './App.css';
import data from "./data/data";
import data1 from "./data/data1"
import data2 from "./data/data2"
import React from 'react';
import Navbar from './components/Navbar';
import Favcourses from './components/Favcourses';
import Next from './components/Next';
import Mostview from './components/Mostview';
import Carousel from "react-elastic-carousel";
import { Link } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  const cards = data.map(item => {
    return (
        <Next 
            key={item.id}
            {...item}
            
        />
        
    )
})
const favcourses = data1.map(item => {
  return (
      <Favcourses className="cont-fav"
          key={item.id}
          {...item}
          
      />
      
  )
})
const viewd = data2.map(item => {
  return (
      <Mostview 
          key={item.id}
          {...item}
          
      />
      
  )
})
const breakPoints = [
  {width: 1 , itemsToShow:1},
  {width: 550 , itemsToShow:2 },
  {width: 768 , itemsToShow:3},
 
]
  return (
    
      <div>
      <Navbar />
      <div className='cardss'>
      <h2>Welcome back, ready for your next lesson?</h2>

      <section className="card-container">
 <Carousel breakPoints={breakPoints} >
          {cards}
          </Carousel>
            </section>
            </div>
            <div className='favourite'>
              <h2>Choice favourite course from top category</h2>
            <section className='favourite_courses'>
            {favcourses}
            </section>
            </div>
            
            <div className='most-viewd'>
           
              <h2 >Most Viewd</h2>
              <section className='most-viewd_cards'>
                <Carousel breakPoints={breakPoints}>
                {viewd}
                </Carousel>
              </section>
              
            </div>
            <Footer></Footer>
     </div>
  
     
  )
}

export default App;
