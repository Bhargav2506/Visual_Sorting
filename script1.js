function BubbleSort()
{
    const copy = [...a];
    const swap = bubble(a);
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

function bubble(a)
{
    const start = performance.now();
    const swap = [];
    for(var i = 0; i < a.length; i++){
        for(var j = 0; j < a.length-i-1; j++){
            if(a[j] > a[j+1]){
                swap.push([j,j+1]);
                var temp = a[j];
                a[j] = a[j+1];
                a[j+1] = temp;
            }
        }
    }
    const end = performance.now();
    console.log("Time taken: " + (end-start) + "ms");
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