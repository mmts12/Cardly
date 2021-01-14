import React from 'react';
import { boardService } from '../services/boardService.js';
import { Link } from 'react-router-dom';
export function Home() {
  return (
    <section className="home-page flex column justify-center align-center">
      <div className="home-title">Cardly</div>
      <p className="home-slogan">Get your work organized just how you like it</p>
      <Link to="/Cardly">
        <button className="home-btn">Get Started</button>
      </Link>
      <footer className="home-footer flex space-between">
        <Link to="/"><button className="btn1"><span className="btn1-span">about us</span></button></Link>
        <p className="footer-p">coffeerights 2021</p>
        </footer>
    </section>
  );
}
