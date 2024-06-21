let qrimg =document.getElementById("qrl");
let imgbox=document.getElementById("imgbox");
const generatebtn=document.querySelector(".container button");
let inputbox = document.querySelector(".container input");

 

function getqrcode(){
    if(inputbox.value.length > 0){

        qrimg.src= "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputbox.value;
        imgbox.classList.add("show-img");
    }
    else{
        inputbox.classList.add('error');
        setTimeout(()=>{
            inputbox.classList.remove('error');
        },1000);
        imgbox.classList.remove("show-img");
    }
}
generatebtn.addEventListener("click",()=>{
    getqrcode();
})

inputbox.addEventListener("keyup",(e)=>{
    if(e.keyCode === 13){
        getqrcode();

    }
})