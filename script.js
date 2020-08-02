// Generate pin starts 
function pin() {
    for(var i = 0; i < 4; i++) {
         var tagNumber = Math.floor(Math.random()*9000)
        var total = tagNumber + 1000 }
        return total
}
var generatePinButtonType = document.getElementById("generatePinButton")
generatePinButtonType.addEventListener("click",function(){
    var generateInputType = document.getElementById("generateInput");
    generateInputType.value = pin();
})

// Calculate display starts
let newVal = "";
let prevVal = "";
function numButPress(num){
    if(prevVal){
        
        newVal = num;
        prevVal = "";
    }  else {
            newVal += num;
        }
        var number = document.getElementById("displayEntry").value = newVal;  
}
// clear button starts
function clearButtonPress(){
    prevVal="";
    newVal = "";
    document.getElementById("displayEntry").value = "";
}
// Delete button starts
function deleteButtonPres() {
    var number = document.getElementById("displayEntry").value.toString().slice(0,-1);
    document.getElementById("displayEntry").value = newVal = number;
}
// Submit button starts
var submitButtonType = document.getElementById("submitButton");
submitButtonType.addEventListener("click", function() {
    var input = document.getElementById("generateInput").value;
    var display = document.getElementById("displayEntry").value;
    if(display == "") {
        var notifyButtonRightType = document.getElementById("notifyButtonRight")
        notifyButtonRightType.style.display = "none"
    }
    else if(input == display) {
        var notifyButtonRightType = document.getElementById("notifyButtonRight")
        notifyButtonRightType.style.display = "block"
    }
    else {
        var notifyButtonCrossType = document.getElementById("notifyButtonCross")
        notifyButtonCrossType.style.display = "block"
        var submitType = document.getElementById("submitTry");
        submitType.innerText = parseInt(submitType.innerText) -1;
        if(submitType.innerText == 0) {
            submitButtonType.disabled = true;
        }
    }
    
})
