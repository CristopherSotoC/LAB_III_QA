describe('Clients', function () {
    beforeEach(function () {
        cy.visit('https://www.bnventadebienes.com/vehicles/search');
    });

    /*
    Nombre de la prueba: Verificar el realizar una busqueda con un año no numerico
    Objetivo: Probar la funcionalidad de buscar autos con un año no numerico
    Datos de prueba: 
                    Año: 'AAAA'
                    Estado del Vehículo: Vacío
                    Tipo de venta: Vacío
                    Precio minimo: Vacío
                    Precio maximo: Vacío
    Resultado esperado: Que al digitar un año no numerico, salte el aviso de "El campo Año debe ser un número."
    */
    it('Verificar el realizar una búsqueda con un año no numérico', function () {
        
        cy.get('#VehicleYear').type('AAAA');

        cy.get('.btn.btn-primary-action').click();

        cy.get('#VehicleYear-error').should(
            'contain.text',
            'El campo Año debe ser un número.'
          );
    });
    /*
    Nombre de la prueba: Verificar Busqueda con datos Validos
    Objetivo: Comprobar si una busqueda con datos Validos funciona
    Datos de prueba: 
                    Año: '2010'
                    Estado del Vehículo: valor 1 = 'Disponible'
                    Tipo de venta: valor 1 = 'Subasta'
                    Precio minimo: '1000000'
                    Precio maximo: '10000000'
    Resultado esperado: Permitir la busqueda, y mostrarnos un Label con la frase 'Resultados de la búsqueda
    */

    it('Verificar busqueda con datos validos', function () {
        cy.get('#VehicleYear').type('2010');

        cy.get('.row > :nth-child(1)   >:nth-child(1) .col-md-12 > select').select(1)

        cy.get('.row > :nth-child(1)  >:nth-child(2) .col-md-12 > select').select(1)

        cy.get('#MinPrice').type('1000000');
        cy.get('#MaxPrice').type('10000000');

        cy.get('.btn.btn-primary-action').click();

        cy.get('.row .col-sm-12 .brand-main-color3.main-title').should(
            'contain.text',
            'Resultados de la búsqueda'
          );
    });
    
    afterEach(function () {
        cy.reload();
    });
});