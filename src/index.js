import './style.css';
import {templateList} from './templateList.js';
import {DATA as INITIAL_DATA} from './data.js';

let CURRENT_DATA = INITIAL_DATA;

function component() {
    let countElemForFirstLoad = 29;
    let countLastElemForLoad = 60;
    const app = document.querySelector(".form-list");
    const input = document.querySelector(".inputData");
    const messages = document.getElementsByClassName("form-list_message_number");

    CURRENT_DATA
        .slice(0, countElemForFirstLoad)
        .forEach(element => app.append(templateList({content: element})));

    const scrollLoading = event => {
        const {scrollHeight, scrollTop, offsetHeight} = event.target;
        if (scrollHeight < scrollTop + offsetHeight) {
            CURRENT_DATA.slice(countElemForFirstLoad, countLastElemForLoad)
                .forEach(element => app.append(templateList({content: element})));
            countElemForFirstLoad = countLastElemForLoad;
            countLastElemForLoad += 30;
        }
    };
    const clear = () => {
        let elements = messages;
        while (elements.length > 0) {
            elements[0].parentNode.removeChild(elements[0]);
        }
    };
    const searchMessages = event => {
        clear();
        let inputValue = input.value.trim().toLowerCase();
        const includeElements = INITIAL_DATA.filter(
            element => element.toLowerCase().includes(inputValue)
        );
        const {scrollHeight, scrollTop, offsetHeight} = event.target;
        if (scrollHeight < scrollTop + offsetHeight) {
            includeElements
                .slice(0, 20)
                .forEach(element => app.append(templateList({content: element})));
            CURRENT_DATA = includeElements;
        }
    };
    app.addEventListener('scroll', scrollLoading);
    input.addEventListener('keyup', searchMessages);
    return app;
}

document.body.appendChild(component());