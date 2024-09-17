import Homepage from "../../fixtures/page_object/homepage/homepage.page";
import CruisesResultsPage from "../../fixtures/page_object/cruisesResults/cruisesResults.page";
import ItineraryPage from "../../fixtures/page_object/itinerary/itinerary.page";
import BookingPage from "../../fixtures/page_object/booking/booking.page";

describe("Searching, Filtering, and Sorting Test Cases", () => {
  before(() => {
    cy.blockAllThirdPartyRequests();
  });
  beforeEach(() => {
    cy.ignoreUncaughtException();
    cy.visit("/");
    Homepage.closePromotionalModalIfPresent();
  });

  it("Search without applying filters or sorting", () => {
    Homepage.searchCruisesBtn.click();
    CruisesResultsPage.resultsGrid.should("exist").and("be.visible");
  });

  it("Search cruises to The Bahamas with duration between 6 and 9 days", () => {
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

  it("Filtering by price using the slider bar", () => {
    cy.fixture("data.json").then((data) => {
      cy.visit(data.searchSlideBarhUrl);
    });
    CruisesResultsPage.resultsGrid.should("exist").and("be.visible");
    CruisesResultsPage.verifyPriceRange();
  });

  it("Apply <<Clear All>> button", () => {
    cy.fixture("data.json").then((data) => {
      cy.visit(data.searchSlideBarhUrl);
    });

    CruisesResultsPage.resultsGrid.should("exist").and("be.visible");
    CruisesResultsPage.verifyPriceRange();
    CruisesResultsPage.clearFilterButton.click();
    CruisesResultsPage.getPriceOfFirstGridResult();
  });

  it("Sorting by Low to High price", () => {
    cy.fixture("data.json").then((data) => {
      cy.visit(data.searchSlideBarhUrl);
    });
    CruisesResultsPage.resultsGrid.should("exist").and("be.visible");
    CruisesResultsPage.verifyPriceRange();
    CruisesResultsPage.verifyPriceOrder("lowToHigh");
  });

  it("Sorting by High to Low price", () => {
    cy.fixture("data.json").then((data) => {
      cy.visit(data.searchSlideBarhUrl);
    });
    CruisesResultsPage.resultsGrid.should("exist").and("be.visible");
    CruisesResultsPage.verifyPriceRange();
    CruisesResultsPage.verifyPriceOrder("highToLow");
  });

  it("Load itinerary page", () => {
    Homepage.makeSearch();
    CruisesResultsPage.showDateButton.click();
    CruisesResultsPage.viewItineraryBtn.click();
    cy.contains("Cruise Itinerary").should("be.visible");
    ItineraryPage.itineraryTitle.should("have.text", "9-Day The Bahamas");
    ItineraryPage.clickItineraryDayReadMoreButton(0);
    ItineraryPage.clickItineraryDayThingsToDoButton(1);
    ItineraryPage.clickItineraryDayShowExcursionsButton(2);
  });

  it("Check for <<START BOOKING>> button", () => {
    Homepage.makeSearch();
    CruisesResultsPage.showDateButton.click();
    CruisesResultsPage.viewItineraryBtn.click();
    ItineraryPage.clickAndVerifyStartBookingButton();
    BookingPage.verifyBookingViewElements();
  });
});
