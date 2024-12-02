




let nextdom=document.getElementById("next");
let prevdom=document.getElementById("pre");
let carouseldom=document.querySelector(".carousel");
let lidom=document.querySelector(".carousel .list");
let tdom=document.querySelector(".carousel .thumbnail");

nextdom.onclick = function() {
    showSlider("next");
}
prevdom.onclick = function() {
    showSlider("prev");
}
let timer=3000;
let timert= 7000;
let runTimeOut;
let autorun = setTimeout(()=>{
        nextdom.click();
    },timert);


function showSlider(type) {
    let islider= document.querySelectorAll(".carousel .list .items");
    let ithumbnail=document.querySelectorAll(".carousel .thumbnail .items");

    if (type === "next") {
        lidom.appendChild(islider[0]);
        tdom.appendChild(ithumbnail[0]);
        carouseldom.classList.add('next');
    }else{
        let PLI=islider.length-1;
        lidom.prepend(islider[PLI]);
        tdom.prepend(ithumbnail[PLI]);
        carouseldom.classList.add("prev");
    }

    clearTimeout(runTimeOut);
    runTimeOut=setTimeout(()=>{
        carouseldom.classList.remove("next");
        carouseldom.classList.remove("prev"); 
    },timer);

    clearTimeout(autorun);
    autorun = setTimeout(()=>{
        nextdom.click();
    },timert);
}
