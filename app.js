const sidelink=document.querySelectorAll('.sidebar .sidemenu li a:not(.logout)');

sidelink.forEach(item =>{
   const li = item.parentElement;
   item.addEventListener('click',() =>{
       sidelink.forEach(i => {
             i.parentElement.classList.remove('active');
       })
       li.classList.add('active');

   })
});

const menubar=document.querySelector('.content nav .bx.bx-menu');

const sidebar=document.querySelector('.sidebar');

menubar.addEventListener('click',()=>{
  sidebar.classList.toggle('close');
});


const searchbtn =document.querySelector('.content nav form .forminput button');
const searchbtnicon =document.querySelector('.content nav form .forminput button .bx');
const searchform =document.querySelector('.content nav form');

searchbtn.addEventListener('click',function(e){
    if(window.innerWidth < 576){
        e.preventDefault;
        searchform.classList.toggle('show');
        if(searchform.classList.contains('show')){
            searchbtnicon.classList.replace('bx-search', 'bx-x');
        }
        else{
            searchbtnicon.classList.replace('bx-x','bx-search')
        }
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        sidebar.classList.add('close');
    } else {
        sidebar.classList.remove('close');
    }
    if (window.innerWidth > 576) {
        searchbtnicon.classList.replace('bx-x', 'bx-search');
        searchform.classList.remove('show');
    }
});

const toggler=document.getElementById('theme-toggle');

toggler.addEventListener( 'change', function(){
    if(this.checked){
        document.body.classList.add('dark')
    }
    else{
        document.body.classList.remove('dark');
    }

})


