const user = localStorage.getItem("tempData1");
const total = parseInt(localStorage.getItem(`total${user}`));
function saveentry(){
    let amt = document.getElementById("inpt3").value;
    let amount = JSON.parse(localStorage.getItem(`amount${user}`));
    let description = JSON.parse(localStorage.getItem(`desc${user}`));
    let desc = document.getElementById("inpt5").value;
    let today = new Date().toLocaleDateString();
    let selected = document.querySelector(`input[name=owe]:checked`);
    if(amt == "" || selected == null){
        alert("Fill all details.");
    } else {
            if(selected.value == "red"){
                amount.push(parseInt(`-${amt}`));
            localStorage.setItem(`amount${user}`, JSON.stringify(amount));
            localStorage.setItem(`total${user}`, total - parseInt(amt));
        } else {
                amount.push(parseInt(`${amt}`));
            localStorage.setItem(`amount${user}`, JSON.stringify(amount));
            localStorage.setItem(`total${user}`, total + parseInt(amt));
        }
        description.push(`${desc} <br> Date - ${today}`);
        localStorage.setItem(`desc${user}`, JSON.stringify(description));
        window.location.href = "../details/details.html";
    }
    
};