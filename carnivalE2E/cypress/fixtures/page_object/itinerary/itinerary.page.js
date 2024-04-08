class ItineraryPage {
    get itineraryTitle() {return cy.get('[data-testid="cg-region"]');}
    get startBookingBtn() {return cy.get('.sc-cFShuL.jPDxDm');}
  

    getItineraryDayReadMoreButton(dayIndex) {
        return cy.get(`[data-testid="dayTile${dayIndex}RightContainer"] [data-testid="readMore"] button`)
          .should('exist')   
          .should('be.visible');  
      }
    
      clickItineraryDayReadMoreButton(dayIndex) {
        this.getItineraryDayReadMoreButton(dayIndex).click();
      }
    
      getItineraryDayThingsToDoButton(dayIndex) {
        return cy.get(`[data-testid="dayTile${dayIndex}RightContainer"] [data-testid="thingsToDoButton"]`)
          .should('exist') 
          .should('be.visible');  
      }
    
      clickItineraryDayThingsToDoButton(dayIndex) {
        this.getItineraryDayThingsToDoButton(dayIndex).click();
      }
      getItineraryDayShowExcursionsButton(dayIndex) {
        return cy.get(`[data-testid="dayTile${dayIndex}"] [data-testid="showExcursionsButton"]`)
          .should('exist')    
          .should('be.visible'); 
      }
    
      clickItineraryDayShowExcursionsButton(dayIndex) {
        this.getItineraryDayShowExcursionsButton(dayIndex).click(); 
      }
      clickAndVerifyStartBookingButton() {
        cy.get('[data-testid="startBooking"]')
          .should('exist')    
          .should('be.visible')   
          .click();  
      }
      
  }
  
 export default new ItineraryPage();