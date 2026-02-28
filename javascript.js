const mainDiv = document.getElementById("mainDiv");
const changeGrid = document.getElementById("changeGrid")
for(let i = 0; i < 16; i++)
{
    let createDivVertical = document.createElement("div");
    createDivVertical.className = "gridDivVertical"
    mainDiv.appendChild(createDivVertical);

    for(let j = 0; j < 16; j++)
    {
        let createDivHorizontal = document.createElement("div");
        createDivHorizontal.className = "gridDivHorizontal"
        createDivHorizontal.addEventListener("mouseenter", (e) =>{
            createDivHorizontal.className = "gridDivHorizontalColored"
        })
        createDivVertical.appendChild(createDivHorizontal);
    }
}

changeGrid.addEventListener("click", (e) =>{
    let removeGrid = document.getElementsByClassName("gridDivVertical");
    while(removeGrid.length > 0)
    {
        removeGrid[0].parentNode.removeChild(removeGrid[0]); 
    }

    let newGrid = prompt("Enter the number of new grids to generate horizontally and vertically")
    if (newGrid == "" || newGrid > 100)
    {
        return alert("Wrong value, can't generate a new grid")
    }
    else
    

    for(let i = 0; i < newGrid; i++)
    {
    let createDivVertical = document.createElement("div");
    createDivVertical.className = "gridDivVertical"
    mainDiv.appendChild(createDivVertical);

        for(let j = 0; j < newGrid; j++)
        {
        let createDivHorizontal = document.createElement("div");
        createDivHorizontal.className = "gridDivHorizontal"
        createDivHorizontal.addEventListener("mouseenter", (e) =>{
            createDivHorizontal.className = "gridDivHorizontalColored"
        })
        createDivVertical.appendChild(createDivHorizontal);
        }
}
});