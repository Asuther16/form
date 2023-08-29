function saveData() {
    var firstName = document.getElementById("firstName");
    var lastName = document.getElementById("lastName")
    var number = document.getElementById("number")
    var cnic = document.getElementById("cnic")
    var  outputParagraph = document.getElementById("outputParagraph");

    if (firstName.value === "") {
        outputParagraph.innerHTML = "please type value in firstName";
        outputParagraph.style.color = "red"
        outputParagraph.style.display = "block";
        firstName.focus()
        setTimeout(() => {
            outputParagraph.style.display = "none";
        }, 2000);
    }
    else if(lastName.value === ""){
        outputParagraph.innerHTML = "please type value in LastName";
        outputParagraph.style.color = "red"
        outputParagraph.style.display = "block";
        lastName.focus()
        setTimeout(() => {
            outputParagraph.style.display = "none";
        }, 2000);
    }else if(number.value === ""){
        outputParagraph.innerHTML = "please type value in Mobile Number";
        outputParagraph.style.color = "red"
        outputParagraph.style.display = "block";
        number.focus()

        setTimeout(() => {
            outputParagraph.style.display = "none";
        }, 2000);
    }
        else if(cnic.value === ""){
        outputParagraph.innerHTML = "please type value in CNIC";
        outputParagraph.style.color = "red"
        outputParagraph.style.display = "block";
        cnic.focus()
        setTimeout(() => {
            outputParagraph.style.display = "none";
        }, 2000);
    }else {
        console.log(firstName.value);
        console.log(lastName.value);
        console.log(number.value)
        console.log(cnic.value)
        outputParagraph.innerHTML = "Data saved successfully: " ;
        outputParagraph.style.color = "green";
        outputParagraph.style.display = "block";
        setTimeout(() => {
            outputParagraph.style.display = "none";
        }, 2000);
        firstName.value = ""; 
        lastName.value = "";
        number.value = ""; 
        cnic.value = ""

    }
}
