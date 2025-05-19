# Portfolio Website Test Suite

This directory contains automated tests for the portfolio website using Playwright.

## Test Structure

The tests are organized by feature/page:

- `home.test.js` - Tests for the home page
- `blog.test.js` - Tests for the blog page and blog posts
- `project.test.js` - Tests for the project page and project details
- `about.test.js` - Tests for the about page
- `resource.test.js` - Tests for the resource page
- `music.test.js` - Tests for the music page
- `layout.test.js` - Tests for common layout elements
- `api.test.js` - Tests for API endpoints
- `performance.test.js` - Performance tests
- `accessibility.test.js` - Accessibility tests

## Running Tests

### Prerequisites

Make sure you have installed all dependencies:

```bash
npm install
```

### Running All Tests

To run all tests:

```bash
npm test
```

### Running Tests for Specific Browsers

To run tests in a specific browser:

```bash
npm run test:chrome    # Run tests in Chrome
npm run test:firefox   # Run tests in Firefox
npm run test:safari    # Run tests in Safari
npm run test:mobile    # Run tests in mobile browsers
```

### Running Tests with UI

To run tests with the Playwright UI:

```bash
npm run test:ui
```

### Debugging Tests

To debug tests:

```bash
npm run test:debug
```

### Viewing Test Reports

To view the test report after running tests:

```bash
npm run test:report
```

### Using the Test Runner Script

The test runner script provides more options for running tests:

```bash
# Run all tests
node run-tests.js --all

# Run tests for a specific browser
node run-tests.js --browser=chromium
node run-tests.js --browser=firefox
node run-tests.js --browser=webkit

# Run a specific test suite
node run-tests.js --test=home
node run-tests.js --test=blog
```

## Test Utilities

The `utils/test-utils.js` file contains utility functions used across multiple test files:

- `waitForAnimations` - Waits for animations to complete
- `checkBasicPageStructure` - Checks if the page has the basic structure elements
- `checkNavigation` - Checks if the navigation works correctly
- `checkThemeSwitcher` - Checks if the theme switcher works

## Continuous Integration

These tests can be integrated into a CI/CD pipeline to run automatically on each commit or pull request.

## Adding New Tests

To add new tests:

1. Create a new test file in the `tests` directory
2. Import the necessary utilities from `utils/test-utils.js`
3. Write your tests using the Playwright API
4. Run the tests to make sure they pass

## Best Practices

- Keep tests focused on a single feature or page
- Use descriptive test names
- Use the utility functions to avoid code duplication
- Make tests independent of each other
- Clean up after tests to avoid affecting other tests
