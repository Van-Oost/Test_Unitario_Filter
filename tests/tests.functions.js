var expect = chai.expect;

describe("Probando la funcion suma()", function(){

    it("suma de dos mas dos", function(){
        
        expect( sumar(2,2) ).to.be.equal(4);

    });

    it("suma de dos mas dos", function(){
        
        var resultado = sumar(-3, -6);
        expect( resultado ).to.be.equal(-9);

    });

});