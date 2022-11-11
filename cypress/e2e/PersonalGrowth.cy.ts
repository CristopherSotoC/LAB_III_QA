describe('Learning Paths', function () {
  beforeEach(function () {
    cy.visit('https://tec.gacela.io/');
  });
/*
  Nombre: Verificar crear Learning Path sin Nombre
  Objetivo: Probar la creación de un Learning Path sin nombre
  Datos de la Prueba:
            Nombre: Vacío
            Versión: '1'
  Resultado esperado: Que de desabilite el botón de guardar
  */
  it('Verificar crear Learning Path sin Nombre', function () {
    cy.get('#email').type('qatec2022@gmail.com');
    cy.get('#password').type('qatecjnsc2022');
    cy.get('.btn > .m-0').click();

    cy.get('.list-group > [href="#LearningPathMenu"]').click();
    cy.get(
      '.list-group > #LearningPathMenu > [href="/learning_paths"]'
    ).click();

    cy.get(
      '.col-12.col-sm-6.order-last.text-right.mt-2.pt-2 > .btn-company-primary > .fas.fa-plus'
    ).click();

    cy.get('#version').type('1');

    cy.get('.btn.btn-company-primary.btn-block').should('be.disabled');
  });

  /*
  Nombre: Verificar crear Learning Path sin Versión
  Objetivo: Probar la creación de un Learning Path sin Versión
  Datos de la Prueba:
            Nombre: 'Prueba'
            Versión: Vacío
  Resultado esperado: Que de desabilite el botón de guardar
  */
  it('Verificar crear Learning Path sin Versión', function () {
    cy.get('#email').type('qatec2022@gmail.com');
    cy.get('#password').type('qatecjnsc2022');
    cy.get('.btn > .m-0').click();

    cy.get('.list-group > [href="#LearningPathMenu"]').click();
    cy.get(
      '.list-group > #LearningPathMenu > [href="/learning_paths"]'
    ).click();

    cy.get(
      '.col-12.col-sm-6.order-last.text-right.mt-2.pt-2 > .btn-company-primary > .fas.fa-plus'
    ).click();

    cy.get('.card-body > :nth-child(1)  #name').type('Prueba');
    cy.get('#version').type(' ');
    
    
    cy.get('.btn.btn-company-primary.btn-block').should('be.disabled');
    
  });

 
 /*
  Nombre: Verificar crear Learning Path Con Nombre y Versión ya existente
  Objetivo: Probar la creación de un Learning Path si el nombre y la versión ya están utilizadas
  Datos de la Prueba:
            Nombre: 'QA','Prueba'
            Versión: '1.0.0','1.0.0'
  Resultado esperado: Que la prueba de error y no permita guardar el Learning Path creado
  */

  it('Verificar crear Learning Path Con Nombre y Versión ya existente', function () {
      cy.get('#email').type('qatec2022@gmail.com');
      cy.get('#password').type('qatecjnsc2022');
      cy.get('.btn > .m-0').click();

      cy.get('.list-group > [href="#LearningPathMenu"]').click();
      cy.get('.list-group > #LearningPathMenu > [href="/learning_paths"]').click();

      cy.get('.col-12.col-sm-6.order-last.text-right.mt-2.pt-2 > .btn-company-primary > .fas.fa-plus' ).click()

      cy.get('.card-body > :nth-child(1)  #name').type('QA');
      cy.get('#version').type('1.0.0');
      
      cy.get('.btn.btn-company-primary.btn-block').click()

      cy.get('.card-body > :nth-child(1)  #name').type('Prueba');
      cy.get('#version').type('1.0.0');
        
  });


  /*
  Nombre: Verificar crear Learning Path Con Nombre ya existente pero con otra Versión
  Objetivo: Probar la creación de un Learning Path si el nombre ya existe pero con distinta versión
  Datos de la Prueba:
            Nombre: 'QA','Prueba'
            Versión: '1.0.1','1.0.0'
  Resultado esperado: Que la prueba permita guardar el Learning Path creado
  */

  it('Verificar crear Learning Path Con Nombre ya existente pero con otra Versión', function () {
    cy.get('#email').type('qatec2022@gmail.com');
    cy.get('#password').type('qatecjnsc2022');
    cy.get('.btn > .m-0').click();

    cy.get('.list-group > [href="#LearningPathMenu"]').click();
    cy.get('.list-group > #LearningPathMenu > [href="/learning_paths"]').click();

    cy.get('.col-12.col-sm-6.order-last.text-right.mt-2.pt-2 > .btn-company-primary > .fas.fa-plus' ).click()

    cy.get('.card-body > :nth-child(1)  #name').type('QA');
    cy.get('#version').type('1.0.1');
    
    
    cy.get('.btn.btn-company-primary.btn-block').click()

    cy.get('.card-body > :nth-child(1)  #name').type('Prueba');
    cy.get('#version').type('1.0.0');
});


    /*
  Nombre: Verificar crear Learning Path sin nombre y solicitarlo
  Objetivo: Probar la creación de un Learning Path sin el nombre y que lo solicite
  Datos de la Prueba:
            Nombre: Vacío
            Versión: Vacío
  Resultado esperado: Que la prueba genere un aviso de que se requiere llenar el nombre
  */

  it('Verificar crear Learning Path sin nombre y solicitarlo', function () {
    cy.get('#email').type('qatec2022@gmail.com');
    cy.get('#password').type('qatecjnsc2022');
    cy.get('.btn > .m-0').click();

    cy.get('.list-group > [href="#LearningPathMenu"]').click();
    cy.get(
      '.list-group > #LearningPathMenu > [href="/learning_paths"]'
    ).click();

    cy.get(
      '.col-12.col-sm-6.order-last.text-right.mt-2.pt-2 > .btn-company-primary > .fas.fa-plus'
    ).click();

    cy.get('.card-body > :nth-child(1)  #name').type(' ');
    cy.get('.card-body > :nth-child(1)  .invalid-feedback').should(
      'contain.text',
      'This field is required'
    );
  });

      /*
  Nombre: Verificar crear Learning Path sin versión y solicitarla
  Objetivo: Probar la creación de un Learning Path sin la versión y que la solicite
  Datos de la Prueba:
            Nombre: Vacío
            Versión: Vacío
  Resultado esperado: Que la prueba genere un aviso de que se requiere llenar la versión
  */

  it('Verificar crear Learning Path sin versión y solicitarla', function () {
    cy.get('#email').type('qatec2022@gmail.com');
    cy.get('#password').type('qatecjnsc2022');
    cy.get('.btn > .m-0').click();

    cy.get('.list-group > [href="#LearningPathMenu"]').click();
    cy.get(
      '.list-group > #LearningPathMenu > [href="/learning_paths"]'
    ).click();

    cy.get(
      '.col-12.col-sm-6.order-last.text-right.mt-2.pt-2 > .btn-company-primary > .fas.fa-plus'
    ).click();

    cy.get('#version').type(' ');
    cy.get('.card-body > :nth-child(2)  .invalid-feedback').should(
      'contain.text',
      'This field is required'
    );
  });

        /*
  Nombre: Verificar crear Learning Path con un nombre y una versión
  Objetivo: Probar la creación de un Learning Path con un nombre y una versión
  Datos de la Prueba:
            Nombre: 'Prueba'
            Versión: '1'
  Resultado esperado: Que se habilite el botón de guardado
  */

  it('Verificar crear Learning Path con un nombre y una versión', function () {
    cy.get('#email').type('qatec2022@gmail.com');
    cy.get('#password').type('qatecjnsc2022');
    cy.get('.btn > .m-0').click();

    cy.get('.list-group > [href="#LearningPathMenu"]').click();
    cy.get(
      '.list-group > #LearningPathMenu > [href="/learning_paths"]'
    ).click();

    cy.get(
      '.col-12.col-sm-6.order-last.text-right.mt-2.pt-2 > .btn-company-primary > .fas.fa-plus'
    ).click();

    cy.get('.card-body > :nth-child(1)  #name').type('Prueba');
    cy.get('#version').type('1');
    
    
    cy.get('.btn.btn-company-primary.btn-block').should('not.be.disabled');
    
  });

  afterEach(function () {
    cy.reload();
  });
});
