// var h1=document.createElement('h1')
// h1.innerHTML='Hello From JS '
// document.body.appendChild(h1)

import second from './app.js'   //import name can be anything because app.js only export one thing due to default function 
console.log(second);

import {user} from './app.js'  //the name should be same because it is calling from Named Default function 
console.log(user); 