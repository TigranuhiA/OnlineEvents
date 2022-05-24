import React from 'react';
import Header from './components/Header/header';
import Main from './components/Main/main';
import Footer from './components/Footer/footer';
import Questions from './components/Questions/questions'

function App() {
  return (
    <div className="App">
      <Header />
      <Main/>
      <Footer/>
      <Questions/>
      
    </div>
  );
}

export default App;
