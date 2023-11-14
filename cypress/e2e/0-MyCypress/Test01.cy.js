const { includes } = require("cypress/types/lodash");

describe('Temel Cypress Komutlari', () => {

    it('cy.visit komutu', () => {
        cy.visit("https://www.amazon.com") // base url tanimli değilse
       cy.visit("/about")
        
    });
    it('title komutu', () => {
        cy.visit("/")// base url adrese gider
        cy.title().should('eq','Tripandway')//title icin esitlik durumudur
        cy.title().should('include','expected')
        cy.title().should('contains','Tr')
        
    });
});