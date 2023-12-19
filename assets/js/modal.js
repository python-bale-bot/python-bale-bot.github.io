const linkModal = document.getElementById("link-modal");

const openLinkModal = document.getElementById("open-link-modal");

const span1 = document.getElementsByClassName("close")[0];

// link Modal Section
openLinkModal.onclick = function() {
  linkModal.style.display = "block";
}

span1.onclick = function() {
    linkModal.style.display = "none";
}
  
// Window Section
window.onclick = function(event) {
    if (event.target == linkModal) {
        linkModal.style.display = "none";
    }
}