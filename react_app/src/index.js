import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import'bootstrap/dist/css/bootstrap.css'
import * as serviceWorker from './serviceWorker';

let product=[{Brand:"Asus",RAM:'8GB',Price:71000,Name:"Asus Zenfone 7 Pro",storage:'256GB',OS:'Android 10',img:'../assets/asus1.jpg'},
{Brand:"Asus",RAM:'8GB',Price:49999,Name:"Asus Rog Phone 3",storage:'128GB',OS:'Android 10',img:'../assets/asus2.jpg'},
{Brand:"Asus",RAM:'6GB',Price:27999,Name:"Asus 6Z",storage:'64GB',OS:'Android 9 pie',img:'../assets/asus3.jpg'},
{Brand:"Google",RAM:'6GB',Price:37990,Name:"Google Pixel 4a 5G",storage:'128GB',OS:'Android 11',img:'../assets/google1.jpg'},
{Brand:"Google",RAM:'4GB',Price:44290,Name:"Google Pixel 3a XL",storage:'64GB',OS:'Android 9 pie',img:'../assets/google2.png'},
{Brand:"Google",RAM:'4GB',Price:13999,Name:"Google Pixel XL",storage:'32GB',OS:'Android 7.1',img:'../assets/google3.jpg'},
{Brand:"Samsung",RAM:'6GB',Price:15499,Name:"Samsung Galaxy F41",storage:'64GB',OS:'Android 10',img:'../assets/samsung1.jpg'},
{Brand:"Samsung",RAM:'6GB',Price:56290,Name:"Samsung Galaxy S20 FE 5G",storage:'128GB',OS:'Android 10',img:'../assets/samsung2.jpg'},
{Brand:"Samsung",RAM:'12GB',Price:104999,Name:"Samsung Galaxy Note 20 Ultra 5G",storage:'128GB',OS:'Android 10',img:'../assets/samsung3.jpg'}]

ReactDOM.render(
  <React.StrictMode>
    <App products={product}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
