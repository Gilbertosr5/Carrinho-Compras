const c = (el)=>document.querySelector(el);
const cs = (el)=>document.querySelectorAll(el);

modelsJson.map((item, index)=>{
    let modelsItem = c('.models .models-item').cloneNode(true);
    c('.models-area').append(modelsItem);
});