function muncul(){
    const pemunculElement = document.getElementById("pemuncul");
    const sidebarElement = document.getElementById('sidebar');
    const penghilangElement = document.getElementById("penghilang");


    if (sidebarElement) {
        sidebarElement.style.marginLeft = "0%";
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
        sidebarElement.style.marginLeft = "-30%";
    }
    if (pemunculElement) {
        pemunculElement.style.display = "block";
    }
    if (penghilangElement){
        penghilangElement.style.display = "none";
    }
}
