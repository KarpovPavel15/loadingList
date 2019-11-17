import {templateList} from "./templateList";
import {FORM} from "../constants/constant";
import {CURRENT_DATA} from "../index"
let countElemForFirstLoad = 19;
let countLastElemForLoad = 40;

export const scrollLoading = event => {
    const {scrollHeight, scrollTop, offsetHeight} = event.target;
    if (scrollHeight < scrollTop + offsetHeight) {
        CURRENT_DATA
            .slice(countElemForFirstLoad, countLastElemForLoad)
            .forEach(_,index => FORM.append(templateList({index})));
        countElemForFirstLoad = countLastElemForLoad;
        countLastElemForLoad += 20;
    }
};