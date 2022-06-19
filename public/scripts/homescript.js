const regionLeft = document.querySelector("#region-left");
const regionRight= document.querySelector("#region-right");
const contentCentral = document.querySelector("#central-content");
const bgCentral = document.querySelector("#background-central")



regionLeft.addEventListener("mouseover",()=>{
   // console.log("work_L");
    contentCentral.style.transform = "rotateZ(-10deg)";
    bgCentral.style.transform = "rotateZ(10deg)";
})

regionRight.addEventListener("mouseover",()=>{
    //console.log("work_R");
    contentCentral.style.transform = "rotateZ(10deg)";
    bgCentral.style.transform = "rotateZ(-10deg)";
})