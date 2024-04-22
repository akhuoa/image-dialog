import ImageDialog from '../../src/components/index.js'

describe('<ImageDialog />', () => {

  it('renders iframe', () => {

    // see: https://on.cypress.io/mounting-vue
    cy.mount(ImageDialog, {
      props: {
        imageIframeURL: 'https://sparc.biolucida.net/image?c=NzQ5My1jb2wtMTkz',
        imageGalleryItems: [],
        imageDialogOpen: true
      }
    })

    cy.get('.image-dialog').should('exist')
    cy.get('.image-dialog-close').should('exist')

    // Testing iframe image
    cy.get('.image-iframe-container').should('exist')
  })

  it('renders gallery', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(ImageDialog, {
      props: {
        imageIframeURL: '',
        imageGalleryItems: [
          {
            title: 'Title 1',
            type: 'data1',
            userData: 'https://sparc.science/',
          },
          {
            title: 'Title 2',
            type: 'data2',
            link: 'https://sparc.science/',
          },
          {
            title: 'Title 3',
            type: 'data3',
            link: 'https://sparc.science/',
          },
        ],
        imageDialogOpen: true
      }
    })

    cy.get('.image-dialog').should('exist')
    cy.get('.image-dialog-close').should('exist')

    // Testing gallery items
    cy.get('.image-gallery-container').should('exist')
  })
})
