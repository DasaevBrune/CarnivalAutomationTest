class BookingPage {
  get cruiseItinerary(){return cy.get('[data-testid="itinTitle"]');}
  get roomQuatity(){return cy.get('.be-number-rg__rooms-number');}
  get guestsNumber(){return cy.get('.be-number-rg__rooms-number');} 
  get addRoomGuestTilte() {return cy.get('[data-testid="cabinsPanel2021Header"]');}


  verifyBookingViewElements() {
    this.cruiseItinerary.should('exist').should('be.visible');
    this.roomQuatity.should('exist').should('be.visible');
    this.guestsNumber.should('exist').should('be.visible');
    this.addRoomGuestTilte.should('exist').should('be.visible');
  }
  }
  
 export default new BookingPage();