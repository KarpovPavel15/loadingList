import './style.css';
import {code} from './code.js';

function component() {
    const btn=document.createElement('button');
    btn.onclick=code;
    return btn
}

document.body.appendChild(component());