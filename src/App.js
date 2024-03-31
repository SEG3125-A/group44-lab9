import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavBar from './components/MyNavBar';
import { useState } from "react";
import ContactUsButton from './components/contactUsButton';

function App() {
  // default state is 1
  const [index, setIndex] = useState(1);

  return (
    <div>
      <MyNavBar />
      <ContactUsButton />
    </div>
  );
}

export default App;