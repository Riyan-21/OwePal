
var counter = parseInt(localStorage.getItem("counter"));
if(isNaN(counter)){
    localStorage.setItem("counter", "1")
};
function createItems(name, total, i){
    
    if(total>=0){
        var sts = "green";
    } else {
        var sts = "red";
    };

    const html = `
        <div class="listitems">
            <div class="holder" id="holder${i}">
                <p class="name">${name} -> ${Math.abs(total)}</p>
                <div class="status ${sts}"></div>
            </div>
            <img src="../icons/icons8-three-dots-50.png" alt="" class = "itemmenu" id="itemmenu${i}"> 
            <img src="../icons/icons8-edit-192.png" alt="" class="edit" id="edit${i}"> 
            <img src="../icons/icons8-delete-100.png" alt="" class="delete" id="delete${i}"> 

        </div>
    `;
    const temp = document.createElement("div");
    temp.setAttribute("class", "listitems");
    temp.innerHTML = html;
    const newElement = temp.firstElementChild;
    document.getElementById("list").appendChild(newElement);
};
function firstname(fullname){
    fullname = fullname.trim();
    return fullname.split(" ")[0];
};
for( let i=1; i<counter; i++){
    
    document.getElementById("home").style.minHeight = "20px";
    let fullname = localStorage.getItem(`name${i}`);
    if(fullname == ""){
        continue;
    };
    let name = firstname(fullname);
    let total = localStorage.getItem(`total${i}`);
    createItems(name, total, i);
}

const holders = document.querySelectorAll(".holder");
holders.forEach(el => {
   el.addEventListener('click', () => {
        localStorage.setItem("tempData3", el.id);
        window.location.href = "../details/details.html"
   });
});


const itemmenu = document.querySelectorAll(".itemmenu");
let x = 0;
itemmenu.forEach(eldd => {
   eldd.addEventListener('click', () => {
        let num = parseInt(eldd.id.replace(/\D/g, ""));
        if( x == 0){
            document.getElementById(`holder${num}`).style.width = "60%";
            document.getElementById(`edit${num}`).style.display = "block";
            document.getElementById(`delete${num}`).style.display = "block";
            x = 1;

        } else {
            document.getElementById(`holder${num}`).style.width = "";
            document.getElementById(`edit${num}`).style.display = "none";
            document.getElementById(`delete${num}`).style.display = "none";
            x = 0;
        }

   });
});

const edit = document.querySelectorAll(".edit");
edit.forEach(el =>{
    el.addEventListener(`click`, () => {
        let num = parseInt(el.id.replace(/\D/g, ""));
        localStorage.setItem(`tempData4`, num);
        window.location.href = "../edit/edit.html"
    });
});

const del = document.querySelectorAll(".delete");
del.forEach(el =>{
    el.addEventListener(`click`, () => {
        let num = parseInt(el.id.replace(/\D/g, ""));
        localStorage.setItem(`name${num}`, "");
        window.location.reload();
    });
});
let test = 0;
function footer(){
    if( test == 0 ){
        document.getElementById("footer").style.display = "flex";
        document.getElementById("logo").style.animation = "none";
        document.getElementById("hider").style.display = "flex";
        test = 1;
    } else {
        document.getElementById("footer").style.display = "none";
        document.getElementById("logo").style.animation = "bounce 1.5s infinite";
        document.getElementById("hider").style.display = "none";
        test = 0;
    }
};

function resetAll(){
    let checking = confirm("You really wanna reset everything ?\n(Psst. make sure you are missing nothing.)");
    if(checking){
        localStorage.setItem("counter", "1");
        window.location.reload();
    } else {

    };
};

// for( let i=1; i<= counter; i++){
//     localStorage.setItem(`name${i}`, "");
//     localStorage.setItem(`total${i}`, "");
//     localStorage.setItem("counter", 1);
//     localStorage.setItem(`amount${i}`, JSON.stringify([]));
// }