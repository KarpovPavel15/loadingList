
export const templateList=({content})=>{
    const templateListMessages=`
        <div class="form-list_message_number">${content}</div>
    `;
    return new DOMParser().parseFromString(templateListMessages, "text/html").querySelector(".form-list_message_number");
}