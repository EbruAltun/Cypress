describe('search', () => {
    beforeEach(() => {
        cy.visit('/')
    });
    it('google da 3 idiot ', () => {
        cy.get('.SDkEP').type('3 idiots{enter}')
        
    });
    it('er rahynı kurtarmak', () => {
        cy.get('.SDkEP').type('er rahyn ı kurtarmak{enter}')     
    });
});