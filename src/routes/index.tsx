import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

// return automático, ou seja, sem precisar colocar () => { return (); }

// para acessar alguma rota, somente com o path, ele não verificar se o caminho é igual e sim se inclui.
// para verificar se é exatamente o caminho, é necessário o exact
const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    {/* + = tudo que vier depois da primeira barra é o nome do repositório */}
    <Route path="/repositories/:repository+" exact component={Repository} />
  </Switch>
);

export default Routes;
