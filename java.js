const inputb=document.getElementById("n");
const list=document.getElementById("listCon");

const isch=document.getElementById("isch");

isch.addEventListener("click", function() {

    if (isch.checked) {
        isch.checked = true;
       
    } else {
        // Set it to checked when it is unchecked
        isch.checked = false;
    }
    console.log(isch.checked);
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
            const container = document.querySelector('.a');
            const containerWidth = container.offsetWidth;
            const containerHeight = container.offsetHeight;

            const centerX = containerWidth / 2;
            const centerY = containerHeight / 2;

            
            const radius = Math.min(centerX, centerY) - 50; 

           
            const angleIncrement = (2 * Math.PI) / count;

            for (let i = 0; i < count; i++) {
                const div = document.createElement("div");

                
                const isCenter = Math.random() < 0.4; 

                if (isCenter) {
                    div.style.top = `${centerY - 60}px`; 
                    div.style.left = `${centerX - 60}px`;
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

     
        addDivs(10);
       

        function addDivs2(count) {
            const container = document.querySelector('.c');
            const containerWidth = container.offsetWidth;
            const containerHeight = container.offsetHeight;
            
            const vertices = [
                { x: containerWidth / 2, y: 100 }, // Top vertex
                { x: 50, y: containerHeight - 100 }, // Bottom left vertex
                { x: containerWidth - 100, y: containerHeight - 100 } // Bottom right vertex
            ];
            
            // Function to generate random integer between min and max
            function getRndInteger(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }
            
            // Loop through the number of divs you want to add
            for (let i = 0; i < count; i++) {
                const div = document.createElement("div");
                
                // Calculate the size of the div
                const divSize = getRndInteger(50, 100);
        
                // Decide whether to place the div on the vertices or inside the triangle
                const isVertex = Math.random() < 0.6;
                
                if (i<=3) {
                    const vertex = vertices[i % 3]; 
                    div.style.top = `${vertex.y - divSize / 2}px`;
                    div.style.left = `${vertex.x - divSize / 2}px`;
                } else {
                    // Randomly place div inside the triangle using barycentric coordinates
                    let r1 = Math.random();
                    let r2 = Math.random();
                    
                    // If r1 + r2 is greater than 1, adjust them so they stay inside the triangle
                    if (r1 + r2 > 1) {
                        r1 = 1 - r1;
                        r2 = 1 - r2;
                    }
        
                    // Barycentric coordinates calculation
                    const x = r1 * vertices[0].x + r2 * vertices[1].x + (1 - r1 - r2) * vertices[2].x;
                    const y = r1 * vertices[0].y + r2 * vertices[1].y + (1 - r1 - r2) * vertices[2].y;
        
                    div.style.top = `${y - divSize / 2}px`;
                    div.style.left = `${x - divSize / 2}px`;
                }
        
                // Set the size of the div
                div.style.width = `${divSize}px`;
                div.style.height = `${divSize}px`;
        
                // Append the div to the container
                container.appendChild(div);
            }
        }
    

     
        addDivs2(10);

 
