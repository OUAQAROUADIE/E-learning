import React, { useEffect } from 'react';

function Footer() {
  useEffect(() => {
    const handleScroll = () => {
      const leftDiv = document.getElementById('leftCoursespage');
      const footer = document.getElementById('footer');
      const windowHeight = window.innerHeight;
      const footerOffset = footer.offsetTop;

      if (window.pageYOffset + windowHeight > footerOffset) {
        leftDiv.classList.add('move-left');
      } else {
        leftDiv.classList.remove('move-left');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="Footer">
      <div style={{ backgroundColor: 'transparent', marginTop: '10vh' }}>
        <h1 style={{ backgroundColor: 'transparent', color: 'white', marginLeft: '8%' }}>CONTACT US</h1>
      </div>

      <div className="contactusLine">
        <div className="reseau">
          <img src='./images/Facebook.png' alt="" />
          <p>Check out our Facebook</p>
        </div>
        <div className="reseau">
          <img src='./images/Instagram.png' alt="" />
          <p>Join our Instagram</p>
        </div>
        <div className="reseau">
          <img src='./images/Twitter.png' alt="" />
          <p>See what we tweet about</p>
        </div>
        <div className="reseau">
          <img src='./images/Linkedin.png' alt="" />
          <p>Follow us on LinkedIn</p>
        </div>
      </div>
      
      <div className="infosFooter">
        <div className="aboutUsInfos">
          <h1>ABOUT US</h1>
          <p>Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page Ipsum est simplement du faux texte employé dans la composition et la mise.Lorem Ipsum est simplement du faux texte employé dans la composition  composition et la mise. et la mise en page Ipsum est simplement du faux texte employé dans la Lorem</p>
        </div>
        <div className="aboutUsInfos">
          <h1>COURSES</h1>
          <a href="">Web Dev</a>
          <a href="">Mobile Apps</a>
          <a href="">Backend Systems</a>
          <a href="">Data Science</a>
          <a href="">Machine Learning</a>
          <a href="">Game dev</a>
        </div>
        <div className="aboutUsInfos">
          <h1>COURSES</h1>
          <a href="">HTML</a>
          <a href="">CSS</a>
          <a href="">JavaScript</a>
          <a href="">React</a>
          <a href="">Angular</a>
          <a href="">Node.js</a>
        </div>
        <div className="aboutUsInfos">
          <h1>LEGAL</h1>
          <a href="">Find Developers</a>
          <a href="">Team</a>
          <a href="">Terms Of Use</a>
          <a href="">User Privacy Notice</a>
        </div>
      </div>
      <div id="leftCoursespage" className="move-left"></div>
      <div id="footer"></div>
    </div>
  );
}

export default Footer;