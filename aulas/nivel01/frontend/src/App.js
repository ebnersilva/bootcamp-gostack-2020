import React, { useState, useEffect } from 'react';

import './App.css';

import Header from './components/Header';

import api from './services/api';

export default function App() {
  const [projects, setProjects ] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      console.log(response.data)
      setProjects(response.data)
    })
  }, [])

  async function handleAddProject() {
    const response = await api.post('projects', {
      title: `Novo Projeto ${Date.now()}`,
      owner: 'Ebner Silva'
    })
    
    setProjects([...projects, response.data])
  }

  return (
    <>
      <Header width={400} title="Projects" />
            
      <ul>
        {projects.map(project => (
          <li key={project.id}>{project.title}</li>
        ))}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
    </>
  );
}
