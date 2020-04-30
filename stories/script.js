function clickFunction(element){
    return function(e){
        let popup = element.querySelector('.popup');
        let x = popup.querySelector('.x');
        popup.style.display = 'block';
        popup.style.opacity = '1';
        console.log(x);
        x.onclick = function(){
            popup.style.opacity = '0';
            window.setTimeout(function(){
                popup.style.display = 'none';
            }, 200);
        }
    }
}
function load(){
    let sections = document.querySelectorAll('section');
    for(let i = 0; i < sections.length; i++){
        sections[i].onclick = clickFunction(sections[i]);
    }
}
load()