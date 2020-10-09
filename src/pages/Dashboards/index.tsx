import React, { useState } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/github_explorer.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
    
    const [newRepo, setNewRepo] = useState('');
    const [repositories, setRepositories] = useState([]);

    function handleAddRepository() {
        console.log(newRepo)

    }
    
    return (
    <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore repositórios no Github</Title>;  
    
    <Form onSubmit={handleAddRepository}>
        <input 
            value={newRepo}
            onChange={(e) => setNewRepo(e.target.value)}
        placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
        <a href="teste">
            <img 
            src="https://avatars2.githubusercontent.com/u/29546044?s=400&u=257e541fd961366204cdadbdb9769dd2fdcfd108&v=4" 
            alt="Fabricio Benvindo"/>
            <div>
                <strong>rocketseat/unform</strong>
                <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
            </div>
        
            <FiChevronRight size={20}></FiChevronRight>        
        </a>

    </Repositories>
    </>
    );
};

export default Dashboard;