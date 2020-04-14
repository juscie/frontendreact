import React from 'react';

import Header from './components/Header';


//primeiro componente, um componete sempre retorna um HTML
//Tudo no react é um componete
function App() {
  return (
    <>
      <Header title="Homepage">
        <ul>
          <li>Homepage</li>
          <li>Projects</li>
          <li>Login</li>
        </ul>
      </Header>
      <Header title="Projects" />
    </>
  );
}

export default App;