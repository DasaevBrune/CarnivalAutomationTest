Carnival Cruise Testing Project

This project consists of functional and end-to-end (E2E) tests designed to verify the functionality of the Carnival Cruise website.

Functional Tests

These tests validate the functionality related to searching, filtering, sorting, and booking cruises on the Carnival Cruise website.

Setup
Make sure you have a valid URL for the Carnival Cruise website configured in the cypress.json file.

Running the Tests
To run the functional tests and generate an HTML report:

1. Ensure you have Cypress installed and configured correctly.
2. Run Cypress with the command `npx cypress run`.
3. After the test run completes, locate the generated HTML report (`/cypress/reports/html/index.html`).
4. Copy the path of the `index.html` file.
5. Paste the path into a Chrome browser to visualize the results.

You can also run the tests from the Cypress UI:
1. Make sure you have Cypress installed and configured correctly.
2. Run Cypress with the command `npx cypress open`.
3. Select the desired test file from the Cypress interface to execute the tests.
4. View the test actions and results directly in the Cypress UI.

### Test Descriptions
1. **Search and Filter Tests**: These tests validate the search functionality for cruises to The Bahamas with a duration between 6 and 9 days. They also verify the filtering by price using the slider bar and sorting by price.
2. **Itinerary Page Test**: This test verifies that the itinerary page loads successfully and provides information about each day of the trip.
3. **Booking Page Test**: This test ensures that users can navigate to the booking page from the header and that the booking process initiates correctly.

Setup
Ensure the Carnival Cruise website is accessible for testing.

Running the Tests
To run the E2E tests and generate an HTML report:

Make sure you have Cypress installed and configured correctly.
Run Cypress with the command npx cypress run.
After the test run completes, locate the generated HTML report (/cypress/reports/index.html).
Copy the path of the index.html file.
Paste the path into a Chrome browser to visualize the results.
Test Descriptions
User Flow Test: This test verifies the complete user flow, from searching and selecting a cruise to viewing the itinerary and initiating the booking process.

Project Structure

The project follows the Page Object Model (POM) to organize UI elements and test scripts.
cypress/
├── e2e/
│   └── testCases/
│       └── Js_tests.cy.js
├── fixtures/
│   ├── booking/
│   │   └── Js_booking.page.js
│   ├── cruisesResults/
│   │   └── Js_cruisesResults.page.js
│   └── homepage/
│       └── Js_homepage.page.js
├── page_object/
│   ├── booking/
│   │   └── Js_booking.page.js
│   ├── cruisesResults/
│   │   └── Js_cruisesResults.page.js
│   ├── homepage/
│   │   └── Js_homepage.page.js
│   └── itinerary/
│       └── Js_itinerary.page.js
├── support/
│   ├── js_commands.js
│   └── Js_e2e.js
├── reports/
│   └── html/
│       ├── assets/
│       └── index.html
└── cypress.config.js

Prerequisites
node.js installed: Make sure you have Node.js installed on your machine. You can download and install it from [here](https://nodejs.org/).
Cypress installed and configured: Install Cypress globally using npm with the command `npm install -g cypress`. You can find more information on installing Cypress in the [official documentation](https://docs.cypress.io/guides/getting-started/installing-cypress.html).
Access to the Carnival Cruise website for testing  https://www.carnival.com/
Conclusion

By automating functional and E2E tests, we ensure the reliability and correctness of the Carnival Cruise website. Regularly running these tests helps catch regressions early and maintains the quality of the application.

To manage the promotional modal that appears randomly, the information in this post was used: https://stackoverflow.com/questions/72214797/how-to-work-on-random-pop-ups-in-cypress

Feel free to add comments and improvements to enhance the testing suite.