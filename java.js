const inputb=document.getElementById("n");
const list=document.getElementById("listCon");


function add()
{

    console.log(inputb);
     if(inputb.value === ''){
         alert("there is no task");
     }

     else{
        let li=document.createElement("li");
        li.innerHTML=inputb.value;
        list.appendChild(li);
      
        
        li.addEventListener("click", checked)
     }

}

 
