import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Routes from "./routes/Routes";

function App() {
  return (
    <Routes/>
  );
}
export default App;
