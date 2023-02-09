
// Variables
const menuMobile = document.querySelector('#menuMobile')
const itemMobile = document.querySelectorAll('.mobile__navegacion-item')

const navLink = document.querySelectorAll('a.nav-link')
const contentItem = document.querySelectorAll('.services__content')

const body = document.querySelector('body')



// Funciones
addEventListener('resize', () => {
    if(innerWidth >= 1000) {
        menuMobile.classList.remove('active');
        menuToggle.classList.remove('active');
    }
})


for( let i = 0; i < itemMobile.length; i++ ) {
    itemMobile[i].addEventListener('mouseenter', function(e) {
        for( let j = 0; j < itemMobile.length; j++) {
            itemMobile[j].classList.remove('active')
        }

        this.classList.add('active')
    })

    itemMobile[i].addEventListener('click', function() {
        menuMobile.classList.remove('active');
        menuToggle.classList.remove('active');
    })
}


for(let i = 0; i < navLink.length; i++){
    navLink[i].addEventListener('click', function(){
        for(let j = 0; j <navLink.length; j++){
            navLink[j].classList.remove('active');
        }
        this.classList.add('active');

        const dataFilter = this.getAttribute('data-filter')

        for( let k = 0; k < contentItem.length; k++){
            contentItem[k].classList.remove('show');
            contentItem[k].classList.add('hide');
            if(contentItem[k].getAttribute('data-item') === dataFilter ){
                contentItem[k].classList.remove('hide');
                contentItem[k].classList.add('show');
            }
        }
})
}

const tabla = document.querySelector('#tabla');

    tabla.addEventListener("scroll", scrollTabla);
    
    function scrollTabla() {
        if( tabla.scrollTop >= 1){
            tabla.classList.add('active')
        }

        else if (tabla.scrollTop <= 1) {
          tabla.classList.remove('active')
        }
    }

let menuToggle = document.querySelector('.toggle');

    menuToggle.addEventListener('click', () =>{
        menuMobile.classList.toggle('active');
        menuToggle.classList.toggle('active')
        body.classList.toggle('fijar-body')
    });

    