
context('Actions', () => {
    beforeEach(() => {
        cy.visit('www.goole.com') //การบอกให้ไป
    })
})

it.only('Open WWW Test', () => {
    cy.visit('https://robot-stage-1.firebaseapp.com')
})

it.only('Open Link Test1', () => {
    cy.log('--- Pick state by typing ---')
    cy.get('#create-customer > b').click()
    cy.get('h1').should('have.text', 'สร้างข้อมูลลูกค้าใหม่')
    cy.get('#create-customer').scrollIntoView().should('be.visible')
})

it.only('Detail', () => {
    cy.log('--- Pick state by typing ---')
    cy.get('.col-sm-9 > ng-component > :nth-child(1) > :nth-child(3)').should('class', "row placeholders")
    cy.get(':nth-child(3) > .col-sm-10').should('class', "col-sm-10 placeholder")
})

it.only('Check From', () => {
    cy.log('--- Pick state by typing ---')
    cy.get('#create-form').find('#inputName').should('have.id', 'inputName')
    cy.get('#create-form').find('#inputEmail').should('have.id', 'inputEmail')
    cy.get('#create-form').find('#inputGender').should('have.id', 'inputGender')
    cy.get('#create-form').find('#inputInterest').should('have.id', 'inputInterest')
    cy.get('#create-form').find('#inputDetail').should('have.id', 'inputDetail')
    cy.get('#create-form').find('#inputVIP').should('have.id', 'inputVIP')
    cy.get('#create-form').find('#buttonConfirm').should('have.id', 'buttonConfirm')
})
it.only('Text field Name-LastName', () => {
    cy.log('--- Pick state by typing ---')
    cy.get('#create-form > :nth-child(1)').should('class',"form-group")
    cy.get(':nth-child(1) > label').should('have.text', 'ชื่อ นามสกุล')
    cy.get('#inputName').should('have.class', 'form-control')
    cy.get('#inputName').type('Regulus Corneas').should('have.value', 'Regulus Corneas')
    cy.get('#inputName').should('class',"form-control")
})


it.only('Text field Email', () => {
    cy.log('--- Pick state by typing ---')
    cy.get('#create-form > :nth-child(2)').should('class', "form-group")
    cy.get(':nth-child(2) > label').should('have.text', 'อีเมล')
    cy.get('#inputEmail').should('have.class', 'form-control')
    cy.get('#inputEmail').type('Regulus@mail.com').should('have.value', 'Regulus@mail.com')
    cy.get('#inputEmail').should('contain.value', '@mail.com')
})

it.only('Select Gender', () => {
    cy.log('--- Pick state by typing ---')
    cy.get(':nth-child(3) > label').should('have.text', 'เพศ')
    cy.get('#create-form > :nth-child(3)').should('class', "form-group")
    cy.get('#inputGender').select('male',{ force: true })
    cy.get('#inputGender').should('have.value','male')
    cy.get('#inputGender').should('have.text', '\n            ชาย\n            หญิง\n            ไม่ระบุ\n          ')
})

it.only('Select Interest', () => {
    cy.log('--- Pick state by typing ---')
    cy.get(':nth-child(4) > label').should('have.text', 'ความสนใจ')
    cy.get('#inputInterest').select([ 'car','technology','shopping','book','other' ],{ force: true }).invoke('val')
        .should('deep.equal', ['car', 'technology', 'shopping', 'book', 'other'])
    cy.get('#inputInterest').scrollIntoView().should('be.visible')
})

it.only('Text field Detail', () => {
    cy.log('--- Pick state by typing ---')
    cy.get(':nth-child(5) > label').should('have.text', 'รายละเอียด')
    cy.get('#inputDetail').should('have.class', 'form-control')
    cy.get('#inputDetail').type('Text field Detail').should('have.value', 'Text field Detail')
    
    // clear
    .clear()
    .should('have.value', '')

    // // special character
    // .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
    // .type('{del}{selectall}{backspace}')
    
    // // key modifiers
    // .type('{alt}{option}') 
    // .type('{ctrl}{control}') 
    // .type('{meta}{command}{cmd}') 
    // .type('{shift}')
    // .type('{enter}')
    
    // Delay each keypress by 0.1 sec
    .type('Mustang ford shelby cobra {enter} アンジェロイドタイプ：アルファ {enter} Security Pentest {enter} コンピュータPC新しい', { delay: 100 })
        .should('have.value', 'Mustang ford shelby cobra \n アンジェロイドタイプ：アルファ \n Security Pentest \n コンピュータPC新しい')
        .and('not.have.value', '123456789')
})

it.only('Check From label', () => {
    cy.get('.form-check-label').should('have.text', '\n             เป็นลูกค้าระดับ VIP\n          ')
    cy.get('.form-check-label [type="checkbox"]').not('[disabled]')
    .check().should('be.checked')
})

it.only('Click Button', () => {
    cy.log('--- Pick state by typing ---')
    cy.get('#buttonConfirm').should('contain', 'ยืนยัน')
    cy.get('#buttonConfirm').should('have.class', 'btn')
    cy.get('#buttonConfirm').click()
})

it.only('Close dialog', () => {
    cy.log('--- Pick state by typing ---')
    cy.get('#success-modal')
    cy.get('.modal-header').should('have.text', '\n        สำเร็จ\n        \n          ×\n        \n      ')
    cy.get('.modal-body').should('have.text', 'บันทึกสำเร็จ')
    cy.get('#button-close-success-modal').should('contain', 'ปิด')
    cy.get('#button-close-success-modal').should('have.class', 'btn')
    cy.get('#button-close-success-modal').click()
    cy.on('url:changed', (newUrl) => {
        console.log('newUrl', newUrl)
      })
    cy.visit('https://robot-stage-1.firebaseapp.com/#/user/dashboard')
})
