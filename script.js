window.onload = function() {
    let zodis11 = "namas";
    let zodis12 = "Bustas";
    let zodis21 = "Katinas";
    let zodis22 = "Suo";
    let zodis31 = "Masina";
    let zodis32 ="Motociklas";
    let duZodziai1 = dviejuZodziuIlgis(zodis11, zodis12);
    let duZodziai2 = dviejuZodziuIlgis(zodis21, zodis22);
    let duZodziai3 = dviejuZodziuIlgis(zodis31, zodis32);
    console.log(duZodziai1);
    console.log(duZodziai2);
    console.log(duZodziai3);
}
function dviejuZodziuIlgis(zodis11, zodis12){
    return (zodis11 + zodis12).length;
}