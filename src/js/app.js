 import '../scss/app.scss'

 document.addEventListener('DOMContentLoaded', () => {

     let burger = document.querySelector('.navbar-burger');

     burger.addEventListener('click', () => {
         burger.classList.toggle('is-active');
         document.querySelector('.navbar-burger-menu').classList.toggle('is-active');
     })

     document.querySelectorAll('.navbar-burger-menu-desktop .navbar-item').forEach((el) => {
        el.addEventListener('click', () => {
            if (el.classList.contains('is-active')) {
                el.classList.remove('is-active')
            } else {
                document.querySelectorAll('.navbar-burger-menu-desktop .navbar-item').forEach((e) => {
                    e.classList.remove('is-active')
                });

                el.classList.add('is-active')
            }
        })
    });

 })
