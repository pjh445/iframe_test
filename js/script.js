document.addEventListener("DOMContentLoaded", ()=>{
          

    
    
    /********************************/
    const ports = document.querySelectorAll("main> section"); //nodeList

    const p1Top = document.getElementById("port1").offsetTop -200;
    const p2Top = document.getElementById("port2").offsetTop -200;
    const p3Top = document.getElementById("port3").offsetTop -200;

    let y1 = Math.trunc(window.scrollY);//재할당 가능해야 함!
    const upSlide = ()=> {
        const y2 = Math.trunc(window.scrollY);
        const z = y2 - y1;
        console.log(y2);

        //코드 단순화
        const pp = ( i, y2, pTop, z) => {
            if( y2 >= pTop  && z > 0)       ports[i].classList.add("active");
            else if ( y2 < pTop && z <= 0 ) ports[i].classList.remove("active");
        }
        pp( 0, y2, p1Top, z);
        pp( 1, y2, p2Top, z);
        pp( 2, y2, p3Top, z);

        y1 = y2;
    }

    window.addEventListener("scroll" , upSlide );

    /*********************************** */
    const typeArea = document.querySelector("#typeArea h2");
    const type = "홍길동 홈페이지에 오신 것을 환영합니다!";   

    let t = 0;
    const typing = () => {
        if (t < type.length) {
            typeArea.textContent += type[t];
            t++;
            setTimeout( typing , 100 );//0.1초후에 typing함수 호출
        }
    }

    setTimeout( typing , 300 );//0.3초후에 typing함수 호출

});//프로그램끝.......