
function filtrarArray(miArray) {
    var arrayFiltrado = [];
    for (i= 0; i < miArray.length; i++) {
        if (miArray[i]>5){
            arrayFiltrado.push(miArray[i]);
        };
    };
    return arrayFiltrado;
};

