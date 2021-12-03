import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import TodosView from './Views/TodosView';


const App = () => (
  <>
    <ul>
      <li>
        <Link to="/todos">Заметки</Link>
      </li>
    </ul>

    <Switch>
      <Route path="/todos">
        <TodosView />
      </Route>
    </Switch>
  </>
);

export default App;
