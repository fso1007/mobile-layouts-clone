var searchMenu = document.getElementsByClassName("main__search-menu__item");

for (var i = 0; i < searchMenu.length; i++) {
  searchMenu[i].addEventListener("click", function() {
    var active = document.getElementsByClassName("active__search-menu-item");

    if (active.length > 0) {
      active[0].className = active[0].className.replace(" active__search-menu-item", "");
    }
    
    this.className += " active__search-menu-item";
  })
}