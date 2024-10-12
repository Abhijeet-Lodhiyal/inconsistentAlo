// src/app/pages/index.tsx

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import './styles/globals.css';


export default function Home() {
  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main>
          <h1>Welcome to My Blogging Site</h1>
          <p>This is the home page.</p>
        </main>
      </div>
    </div>
  );
}
