

describe('Temel Cypress Komutlari', () => {

    it('cy.visit komutu', () => {
        cy.visit("https://www.amazon.com") // base url tanimli değilse
       cy.visit("/about")
        
    });
    it('title komutu', () => {
        cy.visit("/") // base url adrese gider
        cy.title().should('eq','Tripandway')//title icin esitlik durumudur
        cy.title().should('include','Tripandway')
        cy.title().should('contain','Tripandway')
        
    });

    it.only('cy.url ve cy.location', () => {
        cy.visit("/")
        cy.url().should('eq','https://www.tripandway.com/')
        cy.url().should('include','tripandway')
    });
});