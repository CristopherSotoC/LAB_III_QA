describe('Clients', function () {
    beforeEach(function () {
        cy.visit('https://www.bnventadebienes.com/properties/search');
    });

    /*
    Nombre de la prueba: Descripcion con espacio blanco en Clients
    Objetivo: Probar la funcionalidad agregando un Client
    Datos de prueba: Description: ----
    Resultado esperado: Exito ya que al ingresar un Clients sin descripcion deberia de 
                        devolver "This field is required"
    */
    it('Description con espacio en blanco en Clients y en Type', function () {

    });

    /*
    Nombre de la prueba: Descripcion con espacio blanco en Clients
    Objetivo: Probar la funcionalidad agregando un Client
    Datos de prueba: Description: ----
    Resultado esperado: Exito ya que al ingresar un Clients sin descripcion deberia de 
                        devolver "This field is required"
    */
    it('Description con espacio en blanco en Clients y en Type', function () {

    });
    
    afterEach(function () {
        cy.reload();
    });
});