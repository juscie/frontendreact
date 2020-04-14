import React from 'react';

//outra forma de exportar componente
export default function Header({ title, children }) {
  return (
    <>
      <header>
        <h1>{ title }</h1>
      </header>
      { children }
    </>
  );

}