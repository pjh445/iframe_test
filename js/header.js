document.addEventListener("DOMContentLoaded", ()=>{
          
    const nav = document.querySelector("header nav");            
    const menu = document.getElementById("menu");
    const header = document.getElementsByTagName("header")[0];
    const iframeH = window.parent.document.querySelector("iframe#header"); 
    
    let n = 0;
    const navSlide = () => {

        //1.▤모양이 X로 전환된다.
        //2. 내비게이션이 아래로 내려오거나 올라간다.
        if(n == 0 ) {
            menu.textContent = "close";
            nav.classList.add("active");
            iframeH.classList.add('h');
            n++;
        } else {
            menu.textContent = "menu";
            nav.classList.remove("active");
            iframeH.classList.remove('h');
            document.body.style.overflow="auto";
            n = 0;
        }
    }
    //alert(menu.children);
    const item = Array.from( nav.children );
    if( window.innerWidth<= 600  ){
        item.forEach( i => {
            i.addEventListener("click", ()=>{
                navSlide();
            });
        });
    }

    menu.addEventListener("click", navSlide );
        
});
