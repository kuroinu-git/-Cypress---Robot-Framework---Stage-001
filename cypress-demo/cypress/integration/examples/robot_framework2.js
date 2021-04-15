
context('Actions', () => {
    beforeEach(() => {
        cy.visit('www.goole.com') //การบอกให้ไป
    })
})

it.only('Open WWW Test', () => {
    cy.visit('https://robot-stage-1.firebaseapp.com')
})

it.only('Open Link Test2', () => {
    cy.log('--- Pick state by typing ---')
    cy.get('.display-3').should('have.text', 'Robot Framework - Stage 1')
    cy.get('.jumbotron > :nth-child(2)').should('have.text', 'เว็บไซต์นี้เอาไว้ใช้สำหรับทดสอบ Test Script นะจ๊ะ')
    cy.get('ul > :nth-child(6)').should('have.text', 'สร้างข้อมูลผู้ใช้ใหม่ ใช้ Firebase เป็นฐานข้อมูล')
    cy.get('#create-user > b').should('have.text', 'สร้างข้อมูลผู้ใช้ใหม่')
    cy.get('#create-user > b').click()
})
it.only('Check From', () => {
    cy.log('--- Pick state by typing ---')
    cy.get('h1').should('have.text', 'สร้างข้อมูลผู้ใช้ใหม่')
    cy.get('.col-sm-10').find('#inputName').should('have.id', 'inputName')
    cy.get('.col-sm-10').find('#inputLogin').should('have.id', 'inputLogin')
    cy.get('.col-sm-10').find('#inputPassword').should('have.id', 'inputPassword')
    cy.get('.col-sm-10').find('#inputPassword2').should('have.id', 'inputPassword2')
})

it.only('Text field Name-LastName', () => {
    cy.log('--- Pick state by typing ---')
    cy.get('#create-form > :nth-child(1)').should('class',"form-group")
    cy.get(':nth-child(1) > label').should('have.text', 'ชื่อ นามสกุล')
    cy.get('#inputName').should('have.class', 'form-control')
    cy.get('#inputName').should('have.attr', 'placeholder', 'ชื่อ นามสกุล')
    cy.get('#inputName').type('Regulus Corneas').should('have.value', 'Regulus Corneas')
    cy.get('#inputName').should('class',"form-control")
})

it.only('Text field Login', () => {
    cy.log('--- Pick state by typing ---')
    cy.get('#create-form > :nth-child(1)').should('class',"form-group")
    cy.get(':nth-child(2) > label').should('have.text', 'ล็อกอิน')
    cy.get('#inputLogin').should('have.class', 'form-control')
    cy.get('#inputLogin').should('have.attr', 'placeholder', 'ล็อกอิน')
    cy.get('#inputLogin').type('Regulus@mail.com').should('have.value', 'Regulus@mail.com')
    cy.get('#inputLogin').should('contain.value', '@mail.com')
})

it.only('Text field Password', () => {
    cy.log('--- Pick state by typing ---')
    cy.get('#create-form > :nth-child(1)').should('class',"form-group")
    cy.get(':nth-child(3) > label').should('have.text', 'รหัสผ่าน')
    cy.get('#inputPassword').should('have.class', 'form-control')
    cy.get('#inputPassword').should('have.attr', 'placeholder', 'รหัสผ่าน')
    cy.get('#inputPassword').type('RegulusCorneas001').should('have.value', 'RegulusCorneas001')
    cy.get('#inputPassword').should('class',"form-control")
})

it.only('Text field Confirm Password', () => {
    cy.log('--- Pick state by typing ---')
    cy.get('#create-form > :nth-child(1)').should('class',"form-group")
    cy.get(':nth-child(4) > label').should('have.text', 'ยืนยันรหัสผ่าน')
    cy.get('#inputPassword2').should('have.class', 'form-control')
    cy.get('#inputPassword2').should('have.attr', 'placeholder', 'ยืนยันรหัสผ่าน')
    cy.get('#inputPassword2').type('RegulusCorneas001').should('have.value', 'RegulusCorneas001')
    cy.get('#inputPassword2').should('class',"form-control")
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
    cy.get('#success-modal > .modal-dialog > .modal-content > .modal-header').should('have.text', '\n        สำเร็จ\n        \n          ×\n        \n      ')
    cy.get('#success-modal-body').should('have.text', 'บันทึกสำเร็จ')
    cy.get('#button-close-success-modal').should('contain', 'ปิด')
    cy.get('#button-close-success-modal').should('have.class', 'btn')
    cy.get('#button-close-success-modal').click()
    cy.on('url:changed', (newUrl) => {
        console.log('newUrl', newUrl)
      })
    cy.visit('https://robot-stage-1.firebaseapp.com/#/user/list-user')
})



