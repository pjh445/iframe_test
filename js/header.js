document.addEventListener("DOMContentLoaded", ()=>{
          
    const nav = document.querySelector("header nav");            
    const menu = document.getElementById("menu");
    const header = document.getElementsByTagName("header")[0];
    const parentHeight = top.innerHeight;
    let n = 0;
    const navSlide = () => {

        //1.▤모양이 X로 전환된다.
        //2. 내비게이션이 아래로 내려오거나 올라간다.
        if(n == 0 ) {
            menu.textContent = "close";
            nav.classList.add("active");
            header.style.height= `${parentHeight}px`;
            document.body.style.overflow="hidden";            
            n++;
        } else {
            menu.textContent = "menu";
            nav.classList.remove("active");
            header.style.height= "100px";
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