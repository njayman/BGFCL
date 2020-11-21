import { Fragment } from 'react';
import './App.scss';
import MainBody from './components/layouts/MainBody';
import NavBar from './components/layouts/NavBar';

function App() {
  return (
    <Fragment>
      <NavBar />
      <MainBody />
    </Fragment>
  );
}

export default App;
