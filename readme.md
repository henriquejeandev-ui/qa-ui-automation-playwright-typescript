# QA UI Automation with CI/CD — SauceDemo (Login to Checkout)

Automated end-to-end UI test suite covering the full SauceDemo purchase 
journey, from login to order confirmation, built with Playwright and 
TypeScript using the Page Object Model pattern, with continuous 
integration via GitHub Actions.

## Objective

This project demonstrates UI test automation skills using Playwright, 
TypeScript, and the Page Object Model design pattern, covering an 
end-to-end e-commerce flow across multiple pages working together, 
with an automated CI pipeline ensuring test reliability on every change.

## What's Included

- **Login Tests** — 3 scenarios covering valid credentials, invalid 
  username, and blank fields
- **Cart Test** — validates that the cart badge updates correctly 
  when a product is added
- **Checkout Test** — end-to-end flow covering login, add to cart, 
  checkout form submission, and order confirmation
- **Page Object Model** — `LoginPage`, `InventoryPage`, and 
  `CheckoutPage`, encapsulating page elements and actions for 
  reusability and maintainability
- **CI Pipeline** — GitHub Actions workflow that automatically runs 
  the full test suite on every push and pull request to `main`

## Key Findings

- **Consistent, deterministic UI behavior:** Unlike the API project 
  (Project 2), which exhibited unexplained inconsistencies between 
  clients, all UI tests in this project produced fully consistent, 
  reproducible results across Chromium, Firefox, and WebKit — 
  reinforcing that the flakiness observed previously was specific to 
  the demo API, not a general testing issue.

- **Page Object reuse in practice:** The `InventoryPage` object, 
  originally built for the cart test, was directly reused in the 
  checkout test without modification — demonstrating the maintenance 
  benefit of the Page Object Model pattern firsthand.

- **CI pipeline passed on the first run:** All 7 tests (login, cart, 
  and checkout) executed successfully in the GitHub Actions pipeline 
  without any adjustments needed — confirming the test suite's 
  reliability outside of the local development environment.

- **YAML syntax reinforced core programming concepts:** Writing the 
  GitHub Actions workflow required precise indentation to express 
  parent-child relationships between configuration steps — a concept 
  that, once internalized, improved overall comprehension of 
  structured code beyond YAML itself.

## Skills Demonstrated

- UI test automation with Playwright and TypeScript
- Page Object Model (POM) design pattern
- Multi-page test orchestration (combining multiple Page Objects 
  in a single flow)
- Cross-browser testing (Chromium, Firefox, WebKit)
- Continuous Integration with GitHub Actions
- Git branching workflow (feature branches, Pull Requests, squash merge)
- Conventional Commits standard