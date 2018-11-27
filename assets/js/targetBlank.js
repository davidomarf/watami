let aHrefElements = document.getElementsByTagName("a");

for (let i = 0; i < aHrefElements.length; i++){
    if (aHrefElements[i].target == "_blank"){
        aHrefElements[i].innerHTML += ' <i class="fas fa-external-link-alt fa-xs"></i>';
    }
}