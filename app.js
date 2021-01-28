
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

function mouseOver() {
    const result = getRandomColor() // => [bkgColorHeader, bkgColorLogo]

    document.getElementById('logo').style.backgroundColor = result[0];
    document.getElementById('header').style.backgroundColor = result[1];
    document.getElementsByTagName('a').style.backgroundColor = result[1];
}
