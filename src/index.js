import './style.css';
import {templateList} from './templateList.js';
import {DATA} from './data.js';

function component() {
    let i;
    let b=20;
    let form = document.querySelector(".form-list_message");
    let app = document.querySelector(".form-list");
    for (i = 0; i < b; i++) {
        let inputMessages = templateList({content: DATA[i]});
        form.append(inputMessages);
    }
    const scrollLoading = (event) => {
        let {scrollHeight, scrollTop, offsetHeight} = event.target;
        console.log(scrollHeight, scrollTop, offsetHeight);
        if (scrollHeight < scrollTop + offsetHeight) {
            for (; i < b + b; i++) {
                if(i>=DATA.length){
                    break
                }
                let inputMessages = templateList({content: DATA[i]});
                form.append(inputMessages);
            }
            b=b+20;
        }

    };
    app.addEventListener('scroll', scrollLoading);

    return app;
}

document.body.appendChild(component());