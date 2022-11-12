describe('Pruebas de año válido y precio Correcto', function () {
    beforeEach(function () {
        cy.visit('https://www.bnventadebienes.com/vehicles/search');
    });

/*
    Nombre de la prueba: Verificación de año de los autos
    Objetivo: Probar que al ingresar un año mayor al actual, no se ejecute la búsqueda
    Datos de prueba: 
                    Año: 9999
    Resultado esperado: Que al digitar el año erróneo, salga un mensaje que impida su búsqueda
*/
    it('Verificación de año de los autos', function () {
        cy.get('#VehicleYear').type('9999')
        cy.get('#VehicleYear-error');
        cy.get('.btn.btn-primary-action').click();
    });

/*
    Nombre de la prueba: Verificación del precio de los autos
    Objetivo: Probar que los precios que se ingresen en el formulario tengan sentido
    Datos de prueba: 
                    MinPrice: 200000
                    MaxPrice: 10
    Resultado esperado: Que al digitar los precios erróneos, salga un avisa que impida su búsqueda
*/
    it('Verificación del precio de los autos', function () {
        cy.get('#MinPrice').type('200000')
        cy.get('#MaxPrice').type('10')

        cy.get('.btn.btn-primary-action').click();
        cy.get('span[class=field-validation-error]').should("be.visible");
    });

    afterEach(function () {
        cy.reload();
    });
});
