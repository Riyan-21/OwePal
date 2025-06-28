var x = parseInt(localStorage.getItem("tempData4"));
document.getElementById("inpt1").value = localStorage.getItem(`name${x}`);
document.getElementById("inpt2").value = localStorage.getItem(`num${x}`);
function saveEdit(){
    let name = document.getElementById("inpt1").value;
    let num = document.getElementById("inpt2").value;
    if(name == "" || num == ""){
        alert("Fill all details.");
    } else {
        localStorage.setItem(`name${x}`, name);
        localStorage.setItem(`num${x}`, num);
        window.location.href = "../home/home.html";
    }

};