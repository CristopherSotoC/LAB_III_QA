describe('Learning Paths', function () {
  beforeEach(function () {
    cy.visit('https://tec.gacela.io/');
  });

       /*
  Nombre: Verificar editar Learning Path, eliminando el Name
  Objetivo: Probar la edición de un Learning Path, eliminando el Name
  Datos de la Prueba:
            Name: Vacío
  Resultado esperado: Que se desabilite el botón de guardado
  */

  it('Verificar editar Learning Path, eliminando el Name', function () {
    cy.get('#email').type('qatec2022@gmail.com');
    cy.get('#password').type('qatecjnsc2022');
    cy.get('.btn > .m-0').click();
    cy.get('.list-group > [href="#LearningPathMenu"]').click();
    cy.get(
      '.list-group > #LearningPathMenu > [href="/learning_paths"]'
    ).click();

    cy.get('.row > :nth-child(1) .card-body  > .btn.btn-company-primary > .fas.fa-pen').click()

    cy.get('.card-body > :nth-child(1) #name').clear();

    cy.get('.btn.btn-company-primary.btn-block').should('be.disabled');
  });

        /*
Nombre: Verificar editar Learning Path, eliminando el Name y que este sea solicitado
  Objetivo: Probar la edición de un Learning Path, eliminando el Name
  Datos de la Prueba:
            Name: Vacío
  Resultado esperado: Que la prueba genere un aviso de que se requiere llenar el Name
  */

   it(' Verificar editar Learning Path, eliminando el Name y que este sea solicitado', function () {
    cy.get('#email').type('qatec2022@gmail.com');
    cy.get('#password').type('qatecjnsc2022');
    cy.get('.btn > .m-0').click();
    cy.get('.list-group > [href="#LearningPathMenu"]').click();
    cy.get(
      '.list-group > #LearningPathMenu > [href="/learning_paths"]'
    ).click();

    cy.get('.row > :nth-child(1) .card-body  > .btn.btn-company-primary > .fas.fa-pen').click()

    cy.get('.card-body > :nth-child(1) #name').clear().then(


      function(){
          cy.get('.row > :nth-child(1) .card-body > :nth-child(1)  .invalid-feedback').should('contain.text', "This field is required");
      }
  );
  });


       /*
  Nombre: Verificar editar Learning Path, eliminando la Versión
  Objetivo: Probar la edición de un Learning Path, eliminando la Versión
  Datos de la Prueba:
            Versión: Vacío
  Resultado esperado: Que se desabilite el botón de guardado
  */

  it('Editar Learniing Path con espacio en blanco en VERSION y con NAME completo Boton Save desabilitado', function () {
    cy.get('#email').type('qatec2022@gmail.com');
    cy.get('#password').type('qatecjnsc2022');
    cy.get('.btn > .m-0').click();
    cy.get('.list-group > [href="#LearningPathMenu"]').click();
    cy.get(
      '.list-group > #LearningPathMenu > [href="/learning_paths"]'
    ).click();

    cy.get('.row > :nth-child(1) .card-body  > .btn.btn-company-primary > .fas.fa-pen').click()

    cy.get('.card-body > :nth-child(2) #version').clear();

    cy.get('.btn.btn-company-primary.btn-block').should('be.disabled');
  });

        /*
  Nombre: Verificar editar Learning Path, eliminando la Versión y que esta sea solicitada
  Objetivo: Probar la edición de un Learning Path, eliminando la Versión
  Datos de la Prueba:
            Versión: Vacío
  Resultado esperado: Que la prueba genere un aviso de que se requiere llenar la Versión
  */

  it('Editar Learniing Path con espacio en blanco en VERSION y con NAME completo, Solicita la VERSION', function () {
    cy.get('#email').type('qatec2022@gmail.com');
    cy.get('#password').type('qatecjnsc2022');
    cy.get('.btn > .m-0').click();
    cy.get('.list-group > [href="#LearningPathMenu"]').click();
    cy.get(
      '.list-group > #LearningPathMenu > [href="/learning_paths"]'
    ).click();

    cy.get('.row > :nth-child(1) .card-body  > .btn.btn-company-primary > .fas.fa-pen').click()

    cy.get('.card-body > :nth-child(2) #version').clear().then(

      function(){
          cy.get('.row > :nth-child(1) .card-body > :nth-child(2)  .invalid-feedback').should('contain.text', "This field is required");
      }
  );

  });

  afterEach(function () {
    cy.reload();
  });
});
