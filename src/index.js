import './style.css';
import {templateList} from './templateList.js';
import {DATA} from './data.js';

function component() {
    let b = 19;
    let c = 40;
    let arr = [];
    let form = document.querySelector(".form-list_message");
    let app = document.querySelector(".form-list");
    let input = document.querySelector(".inputData");

    DATA.forEach((i, element) => {
        if (element <= b) {
            let inputMessages = templateList({content: DATA[element]});
            form.append(inputMessages);
        }
    });

    const scrollLoading = (event) => {
        let {scrollHeight, scrollTop, offsetHeight} = event.target;
        // console.log(scrollHeight, scrollTop, offsetHeight);
        if (scrollHeight < scrollTop + offsetHeight) {

            DATA.forEach((i, element) => {
                if (element > b && element < c) {
                    form.append(templateList({content: DATA[element]}));
                }
            });
            b = c;
            c += 20;
        }
    };
    const getMessages = () => {
        let newArray = input.value.trim().toLowerCase();
        let elementsForm = document.querySelectorAll(".form-list_message .form-list_message_number");
        elementsForm.forEach((elem) => {
            if (elem.innerHTML.toLowerCase().search(newArray.trim()) === -1) {
                elem.classList.add('hide');
            } else {
                elementsForm.forEach((elem) => {
                    elem.classList.remove('hide');
                })
            }
        });
    };
    app.addEventListener('scroll', scrollLoading);
    input.addEventListener('keyup', getMessages);
    return app;
}

document.body.appendChild(component());