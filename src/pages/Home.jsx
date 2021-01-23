import React from 'react';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <section className="hero">
      <div className="home-container">
        <div className="home-content">
          <div className="home-words">
            <h1>Cardly</h1>
            <p className="p1">Get your work organized just how you like it.</p>
            <p className="p2">Cardly's boards, lists, and cards enable teams to organize and prioritize projects in a fun, flexible, and rewarding way.</p>
            <div className="btn">
            <Link to="/Cardly">
              <button className="home-btn">Get Started</button>
            </Link>
          </div>
          </div>
          <div className="home-img">
            <img src="https://res.cloudinary.com/drak3llqt/image/upload/v1611398666/undraw_teamwork_hpdk_qoijno.svg" className="cardly-img" />
          </div>
          
        </div>
      </div>
      <footer className="home-footer flex space-between">
        <Link to="/">
          <button className="btn1">
            <span className="btn1-span">about us</span>
          </button>
        </Link>
        <p className="footer-p">coffeerights 2021</p>
      </footer>
    </section>
  )
}

// export function Home() {
//   return (
//     <section className="home-page flex column justify-center align-center">
//       <div className="home-container">
//         <div className="home-title">Cardly</div>
//         <p className="home-slogan">
//           Get your work organized just how you like it
//       </p>
//         <p className="subtitle">Cardly's boards, lists, and cards enable teams to organize and prioritize projects in a fun, flexible, and rewarding way.</p>
//         <Link to="/Cardly">
//           <button className="home-btn">Get Started</button>
//         </Link>
//       </div>
//       <footer className="home-footer flex space-between">
//         <Link to="/">
//           <button className="btn1">
//             <span className="btn1-span">about us</span>
//           </button>
//         </Link>
//         <p className="footer-p">coffeerights 2021</p>
//       </footer>
//     </section>
//   );
// }
