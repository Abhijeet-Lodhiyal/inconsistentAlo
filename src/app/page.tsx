// src/app/pages/index.tsx

import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import './styles/globals.css';


export default function Home() {
  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <HomePage />
      </div>
    </div>
  );
}
