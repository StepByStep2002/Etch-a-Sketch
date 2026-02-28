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

function createRGBGrid(size)
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
                createDivHorizontal.style.backgroundColor = `rgb(${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)}, ${Math.floor(Math.random()*255)} )`;
            });
            createDivVertical.appendChild(createDivHorizontal);
        }
    }
}

function createOpacityGrid(size)
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
            createDivHorizontal.addEventListener("mouseenter", (e) => {
                createDivHorizontal.className = "gridDivHorizontalColoredOpacity"
                
                createDivHorizontal.style.opacity = Number(createDivHorizontal.style.opacity) + 0.1;
            });
            createDivVertical.appendChild(createDivHorizontal);
        }
    }
}

function clearGrid()
{
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
    else return newGrid;
}

createGrid(16);

changeGrid.addEventListener("click", (e) => {
   createGrid(clearGrid());
});

let rgbGrid = document.getElementById("rgbGrid");
rgbGrid.addEventListener("click", (e) =>
{
    createRGBGrid(clearGrid())
});

let opacityGrid = document.getElementById("opacityGrid")
opacityGrid.addEventListener("click", (e) =>
{
    createOpacityGrid(clearGrid());

});