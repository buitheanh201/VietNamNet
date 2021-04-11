window.addEventListener("DOMContentLoaded",(e) => {
   const navigation = document.querySelector('.navigation');
   const sticky = navigation.offsetTop;
   window.addEventListener('scroll',() => {
        const windowPageYOffset = window.pageYOffset;
        console.log(windowPageYOffset)
        if(windowPageYOffset > sticky) navigation.classList.add('sticky__nav')
        else navigation.classList.remove('sticky__nav')
   })
})