class HomePage {
    get searchCruisesBtn() {return cy.get('.cdc-filters-tab--searchcta > .cdc-filters-search-cta');}
    get sailToOptions() { return cy.get('#cdc-destinations');}
    get theBahamasOption(){return cy.get(':nth-child(2) > .cdc-filter-button');}
    get durationOptions(){return cy.get('#cdc-durations');}
    get sixNineDaysOption(){return cy.get(':nth-child(2) > .cdc-filter-button');}
  
    closePromotionalModalIfPresent() {
      cy.document().then((document) => {
          new MutationObserver(function () {
              const modal = document.querySelector('.vifp-sweeps-modal');
              if (modal && modal.style.display !== 'none') {
                  const closeButton = modal.querySelector('.vifp-sweeps-modal-close');
                  if (closeButton) {
                      closeButton.click();
                  }
              }
          }).observe(document.body, { childList: true, subtree: true });
      });
  }
    
  }
  
 export default new HomePage();