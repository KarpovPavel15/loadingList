import './style.css';
import {templateList} from './templateList.js';
import {DATA} from './data.js';

function component() {
    let b = 19;
    let c = 40;
    let form = document.querySelector(".form-list_message");
    let app = document.querySelector(".form-list");

    DATA.forEach((i, element) => {
        if (element <= b) {
            let inputMessages = templateList({content: DATA[element]});
            form.append(inputMessages);
        }
    });

    const scrollLoading = (event) => {
        let {scrollHeight, scrollTop, offsetHeight} = event.target;
        console.log(scrollHeight, scrollTop, offsetHeight);
        if (scrollHeight < scrollTop + offsetHeight) {

            DATA.forEach((i, element) => {
                if(element>b && element<c){
                    let inputMessages = templateList({content: DATA[element]});
                    form.append(inputMessages);
                }
            });
            b=c;
            c+=20;
        }

    };
    app.addEventListener('scroll', scrollLoading);

    return app;
}

document.body.appendChild(component());