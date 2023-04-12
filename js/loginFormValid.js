let x = document.forms["logForm"].getElementsByClassName("formElement");
// for(let i=0; i<10;i++){
//     x[i].addEventListener("click", function(){
//         x[i].children[1].style.color = "black";
//         x[i].children[1].value = "";
//     });
// }
function logValidForm(){
    let emptiness = emptyCheck();
    let validity = validateId() && validatePwd();
    return !emptiness && validity;
}

function validateId(){
    let data = document.forms["logForm"];
    return data.uId.value.length > 8 && data.uId.value.length < 15;
}

function validatePwd(){
    let data = document.forms["logForm"];
    return data.pswd.value.length > 8 && data.pswd.value.length < 15;
}

function emptyCheck(){
    const warnings = [
        "required",
        "required and must be of length 5 to 12",
        "Required",
    ];
    let emt = false;
    for(let i=0; i<3;i++) {
        if (x[i].children[1].value === "" || x[i].children[1].value === "none") {
            if (i === 0) {
                document.getElementById("userTypeWarning").innerHTML = warnings[0];
                document.getElementById("userTypeWarning").style.color = "red";
                document.getElementById("userTypeWarning").style.fontSize = "20px";
            } else if (i === 1) {
                console.log(document.getElementById("uIdWarning"));
                document.getElementById("uIdWarning").innerHTML = warnings[1];
                document.getElementById("uIdWarning").style.color = "red";
                document.getElementById("uIdWarning").style.fontSize = "20px";
            } else if (i === 2) {
                document.getElementById("passWarning").innerHTML = warnings[2];
                document.getElementById("passWarning").style.color = "red";
                document.getElementById("passWarning").style.fontSize = "20px";
            }
            emt = true;
        }
    }
    return emt;
}


