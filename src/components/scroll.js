import {templateList} from "./templateList";
import {DATA as INITIAL_DATA} from '../data.js';
import {FORM} from "../constants/constant";

let CURRENT_DATA = INITIAL_DATA;
let countElemForFirstLoad = 19;
let countLastElemForLoad = 40;

export const scrollLoading = (event) => {
    let {scrollHeight, scrollTop, offsetHeight} = event.target;
    if (scrollHeight < scrollTop + offsetHeight) {
        CURRENT_DATA
            .slice(countElemForFirstLoad, countLastElemForLoad)
            .forEach((element, index) => FORM.append(templateList({content: CURRENT_DATA[index]})));
        countElemForFirstLoad = countLastElemForLoad;
        countLastElemForLoad += 20;
    }
};