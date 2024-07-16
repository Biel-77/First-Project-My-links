function toggleMode(){
     const html = document.documentElement
     html.classList.toggle('light')

     //pegar a tag img
     const img = document.querySelector('#profile img')

     //substituir a img
   if(html.classList.contains('light')) {
    //se estiver com light mode:
    img.setAttribute('src', './assets/avatar-light.png')

    }else{
    //se estiver sem light mode:
    img.setAttribute('src', './assets/avatar-dark-png.png')

    }
   
}