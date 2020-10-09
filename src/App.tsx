import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Routes from './routes';

// Sempre que eu precisar colocar um elemento abaixo do outro e não dentro, preciso criar um frangmento, como descrito abaixo
const App: React.FC = () => (
<>
    <BrowserRouter>
        <Routes /> 
    </BrowserRouter>
    <GlobalStyle />
</>

);

export default App;

