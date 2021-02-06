import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Gallery from './Pages/gallery';

const routes = [
  {
    path: '/',
    exact: true,
    children: <Gallery />
  }
]

function App() {
  return (
    <Router>
      <div>
        <Switch>
          {
            routes.map(element=>{
              return(
                <Route 
                {...element}/>
              )
            })
          }
        </Switch>
      </div>
    </Router>
  );
}

export default App;