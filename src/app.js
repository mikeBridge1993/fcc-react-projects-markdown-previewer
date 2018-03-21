import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import MarkdownElement from './components/MarkdownElement';
import Header from './components/Header';

const App = () => {
  return (
    <div>
      <Header />
      <MarkdownElement />
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById("app"));
