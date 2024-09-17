class CruisesResults {
    get resultsGrid() {return cy.get('div[data-testid="tripTile"]');}
    get theBahamasTag() {return cy.get('div[aria-label="SailTo The Bahamas Selected"]');}
    get sixDaysTag(){ return cy.get('div[aria-label="Duration 6 Days Selected"]');}
    get sevenDaysTag() { return cy.get('div[aria-label="Duration 7 Days Selected"]'); }
    get eightDaysTag() { return cy.get('div[aria-label="Duration 8 Days Selected"]'); }
    get nineDaysTag() { return cy.get('div[aria-label="Duration 9 Days Selected"]'); }
    get aNineDaysResult() {return cy.get('span[data-testid="cg-date_BA0_NYC_VX_9_Fri"]');}
    get aSixDayResult() {return cy.get('span[data-testid="cg-date_BA3_TPA_PA_6_Mon"]');}
    get clearFilterButton(){return cy.get('button[aria-label="Clear all Selections"] p')}
    get firstGridResult() {return cy.get('[data-testid="pricing_CT1_SYD_LM_2_Wed"] > [data-testid="pricingContainer"] > [data-testid="priceContainer"] > [data-testid="priceAmount"]')}
    get showDateButton(){return cy.contains('button', 'Show 1 Date').first();}
    get viewItineraryBtn() { return cy.contains('a', 'View Itinerary');}

    verifyPriceRange() {
        cy.contains('> $500').should('be.visible');
        cy.contains('< $1700').should('be.visible');
    }

    verifyPriceOrder(orderDirection) {
        const prices = [];
        cy.get('.sc-hGMjit').each(($price) => {
          const price = parseFloat($price.text().replace('$', ''));
          prices.push(price);
        }).then(() => {
          if (orderDirection === 'lowToHigh') {
            for (let i = 1; i < prices.length; i++) {
              expect(prices[i]).to.be.at.least(prices[i - 1]);
            }
          } else if (orderDirection === 'highToLow') {
            for (let i = 1; i < prices.length; i++) {
              expect(prices[i]).to.be.at.most(prices[i - 1]);
            }
          } else {
            throw new Error('Invalid order direction provided.');
          }
        });
      }
      
      getPriceOfFirstGridResult() {
        return this.firstGridResult.invoke('text').then((text) => {
            const price = parseFloat(text.replace("$", ""));
            expect(price).to.be.below(500);
        });
    }
  }
  
  export default new CruisesResults();