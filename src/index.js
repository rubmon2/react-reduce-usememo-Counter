import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { CallbackComponent } from './CallbackComponent';
import { ContadorCompuesto } from './ContadorCompuesto';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <CallbackComponent />
    <ContadorCompuesto/>
    </>
);

