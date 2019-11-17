import './style.css';
import {templateList} from './components/templateList.js';
import {DATA as INITIAL_DATA} from './data.js';
import {scrollLoading} from "./components/scroll";
import {searchMessages} from "./components/search";

function component() {
    let CURRENT_DATA = INITIAL_DATA;
    let countElemForFirstLoad = 19;
    const form = document.querySelector(".form-list_message");
    const app = document.querySelector(".form-list");
    const input = document.querySelector(".inputData");
    CURRENT_DATA
        .slice(0, countElemForFirstLoad)
        .forEach(element => form.append(templateList({content: element})));
    app.addEventListener('scroll', scrollLoading);
    input.addEventListener('keyup', searchMessages);
    return app;
}

document.body.appendChild(component());