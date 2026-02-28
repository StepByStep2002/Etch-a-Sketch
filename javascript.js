const mainDiv = document.getElementById("mainDiv");
const changeGrid = document.getElementById("changeGrid")

function createGrid(size)
{
    for(let i = 0; i < size; i++)
    {
        let createDivVertical = document.createElement("div");
        createDivVertical.className = "gridDivVertical"
        mainDiv.appendChild(createDivVertical);

        for(let j = 0; j < size; j++)
        {
            let createDivHorizontal = document.createElement("div");
            createDivHorizontal.className = "gridDivHorizontal"
            createDivHorizontal.addEventListener("mouseenter", (e) =>{
                createDivHorizontal.className = "gridDivHorizontalColored"
            });
            createDivVertical.appendChild(createDivHorizontal);
        }
    }
}

createGrid(16);

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
    else createGrid(newGrid);
});

let rgbAndOpacity = document.getElementById("rgbAndOpacity");

rgbAndOpacity.addEventListener("click", (e) =>
{
    createDivHorizontal.removeEventListener("mouseenter", (e) => {
    createDivHorizontal.className = "gridDivHorizontalColored"
    });

//createDivHorizontal.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)} )`
});