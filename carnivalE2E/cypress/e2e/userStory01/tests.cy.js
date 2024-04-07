import Homepage from "../../fixtures/page_object/homepage/homepage.page";
import CruisesResultsPage from "../../fixtures/page_object/cruisesResults/cruisesResults.page";

describe("Searching, Filtering, and Sorting Test Cases", () => {
  beforeEach(() => {
    cy.ignoreUncaughtException(); 
    cy.visit("/");
    Homepage.closePromotionalModalIfPresent();
  });

  it("Search without applying filters or sorting TC-001", () => {
    Homepage.searchCruisesBtn.click();
    CruisesResultsPage.resultsGrid.should("exist").and("be.visible");
  });

  it("Search cruises to The Bahamas with duration between 6 and 9 days TC-002,TC-006,TC-007", () => {
    Homepage.sailToOptions.click();
    Homepage.theBahamasOption.click();
    Homepage.durationOptions.click();
    Homepage.sixNineDaysOption.click();
    Homepage.searchCruisesBtn.click();

    CruisesResultsPage.theBahamasTag.should("exist").and("be.visible");
    CruisesResultsPage.sixDaysTag.should("exist").and("be.visible");
    CruisesResultsPage.sevenDaysTag.should("exist").and("be.visible");
    CruisesResultsPage.eightDaysTag.should("exist").and("be.visible");
    CruisesResultsPage.nineDaysTag.should("exist").and("be.visible");

    CruisesResultsPage.aSixDayResult.should("exist").and("be.visible");
    CruisesResultsPage.aNineDaysResult.should("exist").and("be.visible");
    CruisesResultsPage.resultsGrid.should("exist").and("be.visible");
  });

  it("Filtering by price using the slider bar TC-003", () => {
    cy.fixture("data.json").then((data) => {
      cy.visit(data.searchSlideBarhUrl);
    });
    CruisesResultsPage.resultsGrid.should("exist").and("be.visible");
    CruisesResultsPage.verifyPriceRange();
  });  

  it("Apply <<Clear All>> button TC-008", () => {
    cy.fixture("data.json").then((data) => {
        cy.visit(data.searchSlideBarhUrl);
    });

    CruisesResultsPage.resultsGrid.should("exist").and("be.visible");
    CruisesResultsPage.verifyPriceRange();
    CruisesResultsPage.clearFilterButton.click();
    CruisesResultsPage.getPriceOfFirstGridResult();
  });

  it("Sorting by Low to High price TC-004", () => {
    cy.fixture("data.json").then((data) => {
      cy.visit(data.searchSlideBarhUrl);
    });
    CruisesResultsPage.resultsGrid.should("exist").and("be.visible");
    CruisesResultsPage.verifyPriceRange();
    CruisesResultsPage.verifyPriceOrder("lowToHigh");
  });

  it("Sorting by High to Low price  TC-005", () => {
    cy.fixture("data.json").then((data) => {
      cy.visit(data.searchSlideBarhUrl);
    });
    CruisesResultsPage.resultsGrid.should("exist").and("be.visible");
    CruisesResultsPage.verifyPriceRange();
    CruisesResultsPage.verifyPriceOrder("highToLow");
  });
});
