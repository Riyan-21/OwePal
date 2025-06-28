var namebox = document.getElementById("name");
var amt = document.getElementById("amt");
var desc = document.getElementById("descriptionbox");
var sts = document.getElementById("sts");
var back = document.getElementById("back");
const temp2 = localStorage.getItem("tempData2");
const num2 = parseInt(temp2.replace(/\D/g, ""));
const num1 = localStorage.getItem("tempData1");
function firstname(fullname){
    fullname = fullname.trim();
    return fullname.split(" ")[0];
};

namebox.innerHTML = firstname(localStorage.getItem(`name${num1}`));
var amount = JSON.parse(localStorage.getItem(`amount${num1}`));
var currentAmt = amount[num2-1];

amt.innerHTML = Math.abs(currentAmt);
if(currentAmt >= 0){
    sts.setAttribute("class", "status green");
} else {
    sts.setAttribute("class", "status red");
};

var descriptions = JSON.parse(localStorage.getItem(`desc${num1}`));
var currentDesc = descriptions[num2-1];
desc.innerHTML = currentDesc;

back.addEventListener('click', () => {
    window.history.go(-1);
});