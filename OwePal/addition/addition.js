var counter = localStorage.getItem("counter");
function save(){
    let name = document.getElementById("inpt1").value;
    let num = document.getElementById("inpt2").value;
    let amt = document.getElementById("inpt3").value;
    let amount = [];
    let description = [];
    let desc = document.getElementById("inpt5").value;
    let today = new Date().toLocaleDateString();
    let selected = document.querySelector(`input[name=owe]:checked`);
    if(name == "" || num == "" || amt == "" || selected == null){
        alert("Fill all details.");
    } else {
            if(selected.value == "red"){
                amount.push(parseInt(`-${amt}`));
            localStorage.setItem(`amount${counter}`, JSON.stringify(amount));
            localStorage.setItem(`total${counter}`, `-${amt}`);
        } else {
                amount.push(parseInt(amt));
            localStorage.setItem(`amount${counter}`, JSON.stringify(amount));
            localStorage.setItem(`total${counter}`, `${amt}`);
        }
        description.push(`${desc} <br> Date - ${today}`)
        localStorage.setItem(`desc${counter}`, JSON.stringify(description));
        localStorage.setItem(`name${counter}`, name);
        localStorage.setItem(`num${counter}`, num);
        localStorage.setItem("counter", parseInt(counter)+1);
        window.location.href = "../home/home.html";
    }

}

//localStorage.setItem("counter", 1);