import {templateList} from "./templateList";
import {FORM} from "../constants/constant";
import {CURRENT_DATA} from "../index"
let countElemForFirstLoad = 19;
let countLastElemForLoad = 40;

export const scrollLoading = (event,CURRENT_DATA) => {
    const {scrollHeight, scrollTop, offsetHeight} = event.target;
    if (scrollHeight < scrollTop + offsetHeight) {
        CURRENT_DATA
            .slice(countElemForFirstLoad, countLastElemForLoad)
            .forEach(element=> FORM.append(templateList({content:element})));
        countElemForFirstLoad = countLastElemForLoad;
        countLastElemForLoad += 20;
    }
};