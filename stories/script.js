function clickFunction(element){
    return function(e){
        let popup = element.querySelector('.popup');
        let x = popup.querySelector('.x');
        popup.style.visibility = 'visible';
        popup.style.opacity = 1;
        x.onclick = function(){
            window.setTimeout(function(){
                popup.style.opacity = 0;
            }, 1);
            window.setTimeout(function(){
                popup.style.visibility = 'hidden';
            }, 500);
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