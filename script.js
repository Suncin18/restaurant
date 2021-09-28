// const btnNav = document.getElementById('nav-menu');
const btnFilter = document.querySelectorAll('.btnJS');
const menuItem = document.querySelectorAll('.menu_items');
const menu = document.querySelector('.div_menu');

alert(window.screen.width);
// Botón del nav
document.addEventListener('click', (e)=>{
    if(e.target.closest('#nav-menu')){
        menu.classList.toggle('ocultarMenu');
        if(!menu.classList.contains('ocultarMenu')){
        }
    }else{
        menu.classList.add('ocultarMenu');
    }
});

// Filtrar menú
btnFilter.forEach(btn => {
    let className = btn.id;    
    btn.addEventListener('click', ()=>{
        menuItem.forEach(item => {
            if(className != 'all'){
                if(!item.classList.contains(className)){
                    item.classList.add('ocultar');
                }else{
                    item.classList.remove('ocultar');
                }
            }else{
                item.classList.remove('ocultar');
            }
        });
    });
});