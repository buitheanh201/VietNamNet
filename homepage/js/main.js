window.addEventListener("DOMContentLoaded",(e) => {
   const navigation = document.querySelector('.navigation');
   window.addEventListener('scroll',() => {
        const windowPageYOffset = window.pageYOffset;
        const sticky = navigation.offsetTop;
        if(windowPageYOffset > sticky) navigation.classList.add('sticky__nav')
        else navigation.classList.remove('sticky__nav')
   })
})