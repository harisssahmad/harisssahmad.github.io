function displayNone(){
    if(document.getElementById('nav-check').checked == false) {
        document.getElementById('nav-check').checked = true;
    }
    else if(document.getElementById('nav-check').checked == true) {
        document.getElementById('nav-check').checked = false; 
    } 
}