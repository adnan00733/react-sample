import React from 'react';
import Home from './components/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import Shipment from './components/Shipment';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route path="/:id" component={Shipment} />
      </div>
    </BrowserRouter>
  );
}

export default App;
