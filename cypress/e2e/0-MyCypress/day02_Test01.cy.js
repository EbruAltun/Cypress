context('context kullanimi', () => {
    it('google ziyaret', () => {
cy.visit('https://www.google.com')        
    });

    it('title', () => {
        cy.visit('http://www.google.com')
        cy.title().should('include' , 'Google')        
    });
    
});