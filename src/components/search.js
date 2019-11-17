import {DATA as INITIAL_DATA} from "../data";
import {templateList} from "./templateList";
import {MESSAGE,FORM,INPUT} from "../constants/constant";
import {CURRENT_DATA} from "../index"
const form = FORM;
const messages = MESSAGE;
const input = INPUT;

const clear = () => {
    let elements = messages;
    while (elements.length > 0) {
        elements[0].parentNode.removeChild(elements[0]);
    }
};

export const searchMessages = () => {
    clear();
    let inputValue = input.value.trim().toLowerCase();
    const includeElements = INITIAL_DATA.filter(
        element => element.toLowerCase().includes(inputValue)
    );
    includeElements
        .forEach((element, index) => {
            form.append(templateList({content: includeElements[index]}))
        });
    CURRENT_DATA = includeElements;
};