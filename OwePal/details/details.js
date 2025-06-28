const temp3 = localStorage.getItem("tempData3");
const back = document.getElementById("back");
back.addEventListener( `click`, () => {
        window.location.href = "../home/home.html" 
});

function firstname(fullname){
    fullname = fullname.trim();
    return fullname.split(" ")[0];
};
function open(id){
    let num = parseInt(id.replace(/\D/g, ""));
    let total = parseInt(localStorage.getItem(`total${num}`));
    let name = localStorage.getItem(`name${num}`);
    name = firstname(name);
    document.getElementById("tbox").innerHTML = `Total -> ${Math.abs(total)}`
    if(total>=0){
        document.getElementById("dhead").innerHTML = `${name} owes you -`
        document.getElementById("totalbox").style.backgroundColor = "rgb(0, 202, 61)";
        document.getElementById("dheader").style.backgroundColor = "rgb(0, 202, 61)";
    } else {
        document.getElementById("dhead").innerHTML = `You owe ${name} -`
        document.getElementById("totalbox").style.backgroundColor = "rgb(255, 0, 0)";
        document.getElementById("dheader").style.backgroundColor = "rgb(255, 0, 0)";
    }
    let x = JSON.parse(localStorage.getItem(`amount${num}`));
    for(j=1; j<=x.length; j++){
        if(x[j-1] == 0){
            continue;
        };
        createDitems(x[j-1], j);
    };
    localStorage.setItem("tempData1", num);
   
};

function createDitems(amt, i){
    if(amt>=0){
        var sts = "green";
    } else {
        var sts = "red";
    };

    const html = `
        <div class="dlistitems">
              <div class="dholder" id= "amt${i}">
                <p class="amount">${Math.abs(amt)}</p>
                <div class="status ${sts}"></div>
              </div>
              <img src="../icons/icons8-three-dots-50.png" alt="" class="ditemmenu" id="ditemmenu${i}">
              <img src="../icons/icons8-delete-100.png" alt="" class="delete" id="delete${i}"> 
        </div>
    `;
    const temp = document.createElement("div");
    temp.setAttribute("class", "dlistitems");
    temp.innerHTML = html;
    const newElement = temp.firstElementChild;
    document.getElementById("dlist").appendChild(newElement);

    const dholders = document.querySelectorAll(".dholder");
    dholders.forEach(eldd => {
        eldd.addEventListener('click', () => {
            localStorage.setItem("tempData2", eldd.id);
            window.location.href = "../description/description.html"    
        });
    });
};
open(temp3);

const ditemmenu = document.querySelectorAll(".ditemmenu");
let y = 0;
ditemmenu.forEach(eldd => {
   eldd.addEventListener('click', () => {
        let num = parseInt(eldd.id.replace(/\D/g, ""));
        if( y == 0){
            document.getElementById(`amt${num}`).style.width = "70%";
            document.getElementById(`delete${num}`).style.display = "block";
            y = 1;

        } else {
            document.getElementById(`amt${num}`).style.width = "";
            document.getElementById(`delete${num}`).style.display = "none";
            y = 0;
        }

   });
});

const del = document.querySelectorAll(".delete");
del.forEach(el =>{
    el.addEventListener(`click`, () => {
        let id2 = parseInt(temp3.replace(/\D/g, ""));
        let num2 = parseInt(el.id.replace(/\D/g, ""));
        let arr = JSON.parse(localStorage.getItem(`amount${id2}`));
        console.log(num2);
        let newTotal = parseInt(localStorage.getItem(`total${id2}`)) - parseInt(arr[num2-1]);
        console.log(newTotal);
        localStorage.setItem(`total${id2}`, newTotal);
        
        arr[num2-1] = 0;
        localStorage.setItem(`amount${id2}`, JSON.stringify(arr));
        window.location.reload();
    });
});