var selectMenu = document.getElementsByClassName("menu__content__link");

for (var i = 0; i < selectMenu.length; i++) {
  selectMenu[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");}
      
      this.className += " active";
  })
}