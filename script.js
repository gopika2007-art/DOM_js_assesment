function myfunction(){
    alert(h1);
}
function box(){
const node =document.createElement("div");
const textnode=document.textnode("new div");
node.appendChild(textnode);
document.getElementsByClassName("container").appendChild(node);
}

function newBox(){
    const box=document.getElementById("addBox");
    box.style.backgroundColor="green";
    box.style.width="100px";
    box.style.height="100px";
    box.style.margin="10px,0"
}