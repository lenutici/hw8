
function rgbIndex(a) {
    return a - (Math.round(a / 5));   // to have a diferent shade (for logo) of the same color (of header) 
}

function getRandomColor() {
    const x = Math.floor(Math.random() * 256);
    const y = Math.floor(Math.random() * 256);
    const z = Math.floor(Math.random() * 256);
    const bkgColorHeader = "rgb(" + x + "," + y + "," + z +")";
    const bkgColorLogo = "rgb(" + rgbIndex(x) + "," + rgbIndex(y) + "," + rgbIndex(z) +")";
    return [bkgColorHeader, bkgColorLogo];
}

document.getElementById('logo').addEventListener("mouseover", function() {
    const result = getRandomColor();
    this.style.backgroundColor = result[1];

    document.getElementById('header').style.backgroundColor = result[0];

    document.querySelectorAll('.top_nav a').forEach(function(a) {
        a.style.backgroundColor =  result[0]; // by default urls will have the same color as header
        a.addEventListener("mouseover", function() {
            this.style.backgroundColor = result[1]; // on mouseover urls will have the same color as logo
        });
        a.addEventListener("mouseout", function () {
            this.style.backgroundColor = result[0];  // on mouseout urls will have again the same color as header
        })
    });
});