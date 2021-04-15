
context('Actions', () => {
    beforeEach(() => {
        cy.visit('www.dev.set-sme.odds.team') //การบอกให้ไป
    })
})

it('Open URL', () => {
    cy.visit('https://ww.dev.set-sme.odds.team/')
})
it('Open Button', () => {
    cy.get(':nth-child(2) > [data-testid=default-banner-1] > .HeaderHomeSection__Content-sc-1qjfjep-6 > .BlueButton__Button-sc-18dku5a-0').click()
})

it('Custom Field in First_NAME', () => {
    cy.get('#firstname').type('KKKK').should('have.value', 'KKKK')
})

it('Custom Field in LAST_NAME', () => {
    cy.get('#lastname').type('UUUU').should('have.value', 'UUUU')
})

it('Custom Should in Gender', () => {
    cy.get('[data-cy=radio-btn-male]').click()
    cy.get('#male').should('be.checked')
})

it('Custom Field in EMAIL', () => {
    cy.get('#email').type('EEEE@mail.com').should('have.value', 'EEEE@mail.com')
    cy.get('#email').should('contain.value', '@mail.com')
    cy.get('#email').type("text")
})

it('Custom Field in PHONE_NUMBER', () => {
    cy.get('#phoneNumber').type('0000000').should('have.value', '0000000')
})


it('Custom Should in Gender', () => {
    cy.get('[data-cy=radio-btn-entrepreneurship]').click()
})

it('Click Buttton', () => {
    cy.get('[data-cy=register-submit-btn]').click()
    cy.get('[data-cy=register-submit-btn]').focus().type("submit")
    cy.get('[data-cy=register-submit-btn]').should('contain', 'สมัครสมาชิก (Register)')
    cy.get('[data-cy=register-submit-btn]').invoke('val', 'border-radius: 32px; background: rgb(56, 108, 242); height: 50px;')
    cy.get('[data-cy=register-submit-btn]').should('class', 'border text-white text-2xl hover:bg-gray-700 p-2 mt-2 focus:outline-none')
})

    // cy.get('#firstname').type('KKKK')
    // cy.get('#lastname').type('UUUU')
    // cy.get('[data-cy=radio-btn-male] > .items-center > .flex').click()
    // cy.get('#email').type('EEEE')
    // cy.get('#phoneNumber').type('0000000')
    // cy.get('[data-cy=radio-btn-entrepreneurship] > .items-center > .flex').click()
    // cy.get('.gLFyf').type('ODDS {enter}')
    // cy.get('.ifM9O > :nth-child(2) > .g > .tF2Cxc > .yuRUbf > a > .LC20lb').should('have.text', 'Odds - Wikipedia')
    // cy.contains('ODDS')
