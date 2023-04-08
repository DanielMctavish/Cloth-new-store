const icon_menu_general = document.getElementById("icon-menu-general")
const _menuGeneral = document.querySelector("#_menuGeneral > ul")

icon_menu_general.addEventListener('click',()=>{
    _menuGeneral.classList.toggle('active')
})