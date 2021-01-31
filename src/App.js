import React from 'react';
// import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import Sections from './components/Sections';

export default function App() {
  return (
    <div>
      {/* <CssBaseline /> */}
      <Header />
      <Sections />
    </div>
  );
}