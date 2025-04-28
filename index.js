function muncul(){
    const pemunculElement = document.getElementById("pemuncul");
    const sidebarElement = document.getElementById('sidebar');
    const penghilangElement = document.getElementById("penghilang");


    if (sidebarElement) {
        sidebarElement.style.marginTop = "0";
    }

    if (pemunculElement) {
        pemunculElement.style.display = "none";
    }

    if (penghilangElement){
        penghilangElement.style.display = "block";
    }
}
function hilang(){
    const penghilangElement = document.getElementById("penghilang");
    const pemunculElement = document.getElementById("pemuncul");
    const sidebarElement = document.getElementById('sidebar');

    if (sidebarElement) {
        sidebarElement.style.marginTop = "-300px";
    }
    if (pemunculElement) {
        pemunculElement.style.display = "block";
    }
    if (penghilangElement){
        penghilangElement.style.display = "none";
    }
}


let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})