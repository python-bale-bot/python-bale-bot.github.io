const linkModal = document.getElementById("link-modal");
const DevelopersModal = document.getElementById("developers-modal");

const openLinkModal = document.getElementById("open-link-modal");
const openDevelopersModal = document.getElementById("open-developers-modal");

const span1 = document.getElementsByClassName("close")[0];
const span2 = document.getElementsByClassName("close")[1];

// link Modal Section
openLinkModal.onclick = function() {
  linkModal.style.display = "block";
}

span1.onclick = function() {
    linkModal.style.display = "none";
}

// developers Modal Section
openDevelopersModal.onclick = function() {
    DevelopersModal.style.display = "block";
}
  
span2.onclick = function() {
    DevelopersModal.style.display = "none";
}
  
// Window Section
window.onclick = function(event) {
    if (event.target == DevelopersModal) {
        DevelopersModal.style.display = "none";
    }

    else if (event.target == linkModal) {
        linkModal.style.display = "none";
    }
}