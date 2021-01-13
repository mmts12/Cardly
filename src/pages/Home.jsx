import React from 'react';
import { boardService } from '../services/boardService.js';
import { Link } from 'react-router-dom';
export function Home() {
  return (
    <div>
      <h1>HOME PAGE</h1>
      <Link to="/Cardly">
        <button>Get Started</button>
      </Link>
    </div>
  );
}
