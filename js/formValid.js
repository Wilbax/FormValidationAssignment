let x = document.forms["regForm"].getElementsByClassName("formElement");
for(let i=0; i<10;i++){
    x[i].addEventListener("click", function(){
        x[i].children[1].style.color = "black";
        x[i].children[1].value = "";
    });
}
function validForm(){
    let emptiness = emptyCheck();
    let validity = validateId() && validatePwd() && validateName() &&validateEmail();
    return !emptiness && validity;
}

function validateId(){
    let data = document.forms["regForm"];
    return data.uId.value.length > 8 && data.uId.value.length < 15;
}

function validatePwd(){
    let data = document.forms["regForm"];
    return data.pswd.value.length > 8 && data.pswd.value.length < 15;
}
function validateName(){
    let data = document.forms["regForm"];
    return /^[A-Za-z0-9]*$/.test(data.name.value);
}
function validateEmail(email){
    let data = document.forms["regForm"];
    let reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return reg.test(data.eMail.value);
}


function emptyCheck(){
    const warnings = [
        "required and must be of length 5 to 12",
        "required and must be of length 5 to 12",
        "Required and alphabets only",
        "Optional",
        "Required.Must select a country",
        "Optional",
        "Required.Must be a valid email",
        "Required",
        "Required",
        "Optional"
    ];
    let emt = false;
    for(let i=0; i<10;i++) {
        if (x[i].children[1].value === "" || x[i].children[1].value === "none") {
            if (i === 0) {
                document.getElementById("idWarning").innerHTML = warnings[0];
                document.getElementById("idWarning").style.color = "red";
                document.getElementById("idWarning").style.fontSize = "20px";
            } else if (i === 1) {
                document.getElementById("psWarning").innerHTML = warnings[1];
                document.getElementById("psWarning").style.color = "red";
                document.getElementById("psWarning").style.fontSize = "20px";
            } else if (i === 4) {
                document.getElementById("sWarning").innerHTML = warnings[7];
                document.getElementById("sWarning").style.color = "red";
                document.getElementById("sWarning").style.fontSize = "20px";
            } else if (i === 7) {
                continue
            }else if(i === 8){
                continue
            } else {
                x[i].children[1].value = warnings[i];
                x[i].children[1].style.color = "red";
            }
            emt = true;
        }
        console.log(i === 7 && !(document.getElementById("male").checked || document.getElementById("female").checked));
        if(i === 7 && !(document.getElementById("male").checked || document.getElementById("female").checked)){
            document.getElementById("sexWarning").innerHTML = warnings[7];
            document.getElementById("sexWarning").style.color = "red";
            document.getElementById("sexWarning").style.fontSize = "20px";
            emt = true;
        }
        if(i === 8 && !(document.getElementById("english").checked || document.getElementById("nEnglish").checked)){
            document.getElementById("langWarning").innerHTML = warnings[8];
            document.getElementById("langWarning").style.color = "red";
            document.getElementById("langWarning").style.fontSize = "20px";
            emt = true;
        }
    }
    return emt;
}


