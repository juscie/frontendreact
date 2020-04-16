import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';

import Header from './components/Header';


//primeiro componente, um componete sempre retorna um HTML
//Tudo no react é um componete
function App() {

  //const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);
  const [projects, setProjects] = useState([]);


  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    })
  }, []);

  //POST, adicionar um novo projeto
  async function handleAddProject() {

    const response = await api.post('projects', {
      title: `Novo projeto ${Date.now()}`,
      owner: "Carlos Fernandes"
    });

    const project = response.data;

    setProjects([...projects, project]);

  }
  return (
    <>
      <Header title="Homepage" />

      <ul>
        { projects.map(project => <li key={ project.id }> { project.title } </li>) }
      </ul>


      <button type="button" onClick={ handleAddProject }>Adicionar projeto</button>
    </>
  );
}

export default App;
//uso do map() para pecorrer a variavel,sempre retornar algo

/**
 * 3 forma de retorno
 *
 * 1.
 * <ul>
        { projects.map(project => {
          return ...;
        } )}
    </ul>

    2.
    <ul>
        { projects.map(project => (
          ...colcoar o conteúdo aqui
        ) )}
    </ul>

    3. quando for só uma linha

      <ul>
        { projects.map(project => <li> {project} </li>)}
    </ul>
 */