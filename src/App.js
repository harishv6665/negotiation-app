import React from 'react';
import styles from './App.module.css';
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div>
      <Header />
      <main className={styles.container}>
          <Home />
      </main>
    </div>
  );
}

export default App;
