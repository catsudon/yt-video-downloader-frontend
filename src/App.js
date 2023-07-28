import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav.jsx'
import Downloader from './components/Downloader.jsx';
import Button from './components/Button';
import React from 'react';

function App() {
  const [count, setCount] = React.useState(2)
  const [components, setComponents] = React.useState([1]);

  function addComponent() {
    setComponents([...components, count]);
    setCount(count + 1);
  }

  return (
    <React.Fragment>
      <Nav/>
      <Button className="btn add-item-btn" onClick={addComponent} text="+" />
      <div className="center">
        {components.map((item) => (<Downloader key={item} num={item} />))}
      </div>
    </React.Fragment>

  );
}

export default App;
