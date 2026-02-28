const mainDiv = document.getElementById("mainDiv");
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