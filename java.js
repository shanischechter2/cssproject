const inputb=document.getElementById("inputval");
const list=document.getElementById("listCon");
const isch = document.getElementById("isch");
const state = { v: false };

isch.addEventListener("mousedown", (event) => {
    event.preventDefault(); 
    
    if (state.v) {
        isch.checked = false; 
        state.v = false;
    } else {
      
        isch.checked = true;
        state.v = true;
    }
});

isch.addEventListener("click", (event) => {
    event.preventDefault(); 
});
   


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
     function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function addDivs(count) {
            const container = document.querySelector('.circle');
            const containerWidth = container.offsetWidth;
            const containerHeight = container.offsetHeight;

            const centerX = containerWidth / 2;
            const centerY = containerHeight / 2;

            
            const radius = Math.min(centerX, centerY) - 60; 

           
            const angleIncrement = (2 * Math.PI) / count;

            for (let i = 0; i < count; i++) {
                const div = document.createElement("div");

                
                const isCenter = Math.random() < 0.3; 

                if (isCenter) {
                    div.style.top = `${centerY-60}px`; 
                    div.style.left = `${centerX-60 }px`;
                } else {
                    
                    const angle = angleIncrement * i;
                    const x = centerX + radius * Math.cos(angle) - 60; 
                    const y = centerY + radius * Math.sin(angle) - 60; 
                    div.style.top = `${y}px`;
                    div.style.left = `${x}px`;
                }

            
                const size = getRndInteger(50, 100);
                div.style.width = `${size}px`;
                div.style.height = `${size}px`;

                container.appendChild(div);
            }
        }

     
        addDivs(15);
       

        function addDivs2(count) {
            const container = document.querySelector('.triangular');
            const containerWidth = container.offsetWidth;
            const containerHeight = container.offsetHeight;
            
            const vertices = [
                { x: containerWidth / 2, y: 100 }, 
                { x: 100, y: containerHeight - 100 },
                { x: containerWidth - 100, y: containerHeight - 100 } 
            ];
   
            function getRndInteger(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
      
            for (let i = 0; i < count; i++) {
                const div = document.createElement("div");
                
             
                const divSize = getRndInteger(50, 100);
                //const isVertex = Math.random() < 0.6;
                
                if (i<=3) {
                    const vertex = vertices[i % 3]; 
              
                    div.style.top = `${vertex.y - divSize}px`;
                    div.style.left = `${vertex.x - divSize}px`;
                } else {
             
                    let r1 = Math.random();
                    let r2 = Math.random();
                  
                    if (r1 + r2 > 1) {
                        r1 = 1 - r1;
                        r2 = 1 - r2;
                    }
        
                    const x = r1 * vertices[0].x + r2 * vertices[1].x + (1 - r1 - r2) * vertices[2].x;
                    const y = r1 * vertices[0].y + r2 * vertices[1].y + (1 - r1 - r2) * vertices[2].y;
        
                    div.style.top = `${y - divSize }px`;
                    div.style.left = `${x - divSize }px`;
                }
        
                div.style.width = `${divSize}px`;
                div.style.height = `${divSize}px`;
        
                container.appendChild(div);
            }
        }
    

     
        addDivs2(15);

 
