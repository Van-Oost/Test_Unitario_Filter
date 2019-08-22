var expect = chai.expect;

describe("Probando la funcion filtrarArray(miArray)", function(){

    it("probando el array [2,3,4,5,6,7]", function(){
        
        expect( filtrarArray( [2,3,4,5,6,7] )).to.equal(arrayFiltrado[6,7]);

    });


    it("probando el array [2,3,4,5,2,4]", function(){
        
        expect( filtrarArray( [2,3,4,5,6,7] )).to.equal(arrayFiltrado[]);

    });

    it("probando el array [8,9,9,15,6,7]", function(){
        
        expect( filtrarArray( [2,3,4,5,6,7] )).to.equal(arrayFiltrado[8,9,9,15,6,7]);

    });

    
    it("probando el array con numeros negativos[-2,-8,9,-25,6,7]", function(){
        
        expect( filtrarArray( [2,3,4,5,6,7] )).to.equal(arrayFiltrado[9,6,7]);

    });
    
    
    it("probando el array con strings [perro,3,gallina,5,15,8]", function(){
        
        expect( filtrarArray( [2,3,4,5,6,7] )).to.equal(arrayFiltrado[15,8]);

    });

    
    it("probando un array vacio", function(){
        
        expect( filtrarArray([])).to.be.undefined;
    });

});