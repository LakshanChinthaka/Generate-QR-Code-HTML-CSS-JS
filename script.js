
document.addEventListener("DOMContentLoaded", function() {
    let imgBox = document.getElementById("imgBox");
    let qrimage = document.getElementById("qrImage");
    let qrText = document.getElementById("qrText");
    let generateButton = document.getElementById("generateButton");
    let errorMsg = document.getElementById("error-msg");

    function generateQr() {
        if(qrText.value.length > 0){
            qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        
            imgBox.classList.add("show-img")
            errorMsg.textContent = "";
        }else{
            qrText.classList.add('error');
            setTimeout(() => {
                qrText.classList.remove('error');
            }, 1000);
            errorMsg.textContent = "Please enter any text or URL...!"
        }
       
    }
    generateButton.addEventListener("click", generateQr);
});