const a = [];

init();

function init()
{
    
    for(let i=0;i<100;i++){
        a[i] = Math.random();
    }
    showbars();
}

function ISort()
{
    const copy = [...a];
    const swap = selsort(a);
    animate(swap);
}

function animate(swap)
{
    
    
    if(swap.length==0)
    {
        return;
    }
    const [i,j] = swap.shift();
    const bars = document.querySelectorAll(".bar");
    bars[i].style.backgroundColor = "red";
    bars[j].style.backgroundColor = "red";
    setTimeout(()=>{
        bars[i].style.backgroundColor = "blue";
        bars[j].style.backgroundColor = "blue";
        bars[i].style.height = `${a[i]*100}%`;
        bars[j].style.height = `${a[j]*100}%`;
        animate(swap);
    },50);
  

}

function selsort(a)
{
    const start = performance.now();
    const swap = [];
    do{
        var swapped = false;
        for(var i = 0; i < a.length; i++){
            var min = i;
            console.log(1);
            for(var j = i+1; j < a.length; j++){
                if(a[j] < a[min])
                {
                    swapped = true;
                    min = j;
                    
                }
            }
            if(min != i){
            swap.push([i,min]);    
            var temp = a[i];
            a[i] = a[min];
            a[min] = temp;
            } 
        } 
         

    }while(swapped);
    const end = performance.now();
    container2.innerHTML ="Merge Sort time taken is = "+(end-start)+" ms";
    return swap; 
}



function showbars()
{
    container.innerHTML = "";
    for(let i=0;i<a.length;i++)
    {
        const bar = document.createElement("div");
        bar.style.height = a[i]*100 + "%";
        bar.style.width = "10px";
        bar.classList.add("bar");
        container.appendChild(bar);
    }
}    
