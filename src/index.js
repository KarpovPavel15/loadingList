import './style.css';
import {templateList} from './templateList.js';
import {DATA as INITIAL_DATA} from './data.js';

let CURRENT_DATA = INITIAL_DATA;

function component() {
    let countElemForFirstLoad = 19;
    let countLastElemForLoad = 40;
    const form = document.querySelector(".form-list_message");
    const app = document.querySelector(".form-list");
    const input = document.querySelector(".inputData");
    const messages = document.getElementsByClassName("form-list_message_number");

    CURRENT_DATA.slice(0, countElemForFirstLoad).forEach(element => form.append(templateList({content: element})));

    const scrollLoading = event => {
        const {scrollHeight, scrollTop, offsetHeight} = event.target;
        if (scrollHeight < scrollTop + offsetHeight) {
            CURRENT_DATA.slice(countElemForFirstLoad, countLastElemForLoad)
                .forEach(element => form.append(templateList({content: element})));
            countElemForFirstLoad = countLastElemForLoad;
            countLastElemForLoad += 20;
        }
    };
    const clear = () => {
        let elements = messages;
        while (elements.length > 0) {
            elements[0].parentNode.removeChild(elements[0]);
        }
    };
    const searchMessages = (event) => {
        clear();
        let inputValue = input.value.trim().toLowerCase();
        const includeElements = INITIAL_DATA.filter(
            element => element.toLowerCase().includes(inputValue)
        );
        const {scrollHeight, scrollTop, offsetHeight} = event.target;
        let countElemForFirstLoadSearch=0;
        let countLastElemForLoadSearch=20;
        if (scrollHeight < scrollTop + offsetHeight) {
            includeElements.slice(countElemForFirstLoadSearch, countLastElemForLoadSearch)
                .forEach(element => form.append(templateList({content: element})));
            CURRENT_DATA = includeElements;
        }
    };
    app.addEventListener('scroll', scrollLoading);
    input.addEventListener('keyup', searchMessages);
    return app;
}

document.body.appendChild(component());