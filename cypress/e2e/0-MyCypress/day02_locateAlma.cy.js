describe('locate alma', () => {
 it('cy.get komutu ', () => {
  cy.visit('/')   
  cy.get('.SDkEP').type('cypress{enter}')
  //cy.get('.rQEFy').click
  cy.get('div#hdtb-msb div:nth-child(2) > a').click()
 });  

});