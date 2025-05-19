/**
 * Test runner script for the portfolio project
 * This script runs all the tests in different configurations
 */

const { execSync } = require('child_process');

// Configuration
const browsers = ['chromium', 'firefox', 'webkit'];
const testSuites = [
  'home',
  'blog',
  'project',
  'about',
  'resource',
  'music',
  'layout',
  'api',
  'performance',
  'accessibility'
];

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
};

/**
 * Run a command and return the result
 * @param {string} command - Command to run
 * @returns {string} - Command output
 */
function runCommand(command) {
  try {
    return execSync(command, { stdio: 'inherit' });
  } catch (error) {
    console.error(`${colors.red}Error running command: ${command}${colors.reset}`);
    console.error(error);
    return null;
  }
}

/**
 * Run tests for a specific browser
 * @param {string} browser - Browser to run tests on
 * @param {string} testFile - Test file to run
 */
function runTest(browser, testFile) {
  console.log(`${colors.cyan}Running ${testFile} tests on ${browser}...${colors.reset}`);
  
  const command = `npx playwright test ${testFile}.test.js --project=${browser}`;
  runCommand(command);
}

/**
 * Run all tests for all browsers
 */
function runAllTests() {
  console.log(`${colors.magenta}Running all tests on all browsers...${colors.reset}`);
  
  const command = `npx playwright test`;
  runCommand(command);
}

/**
 * Run tests for a specific browser
 * @param {string} browser - Browser to run tests on
 */
function runBrowserTests(browser) {
  console.log(`${colors.yellow}Running all tests on ${browser}...${colors.reset}`);
  
  const command = `npx playwright test --project=${browser}`;
  runCommand(command);
}

/**
 * Run tests for a specific test suite on all browsers
 * @param {string} testSuite - Test suite to run
 */
function runTestSuiteTests(testSuite) {
  console.log(`${colors.green}Running ${testSuite} tests on all browsers...${colors.reset}`);
  
  const command = `npx playwright test ${testSuite}.test.js`;
  runCommand(command);
}

/**
 * Print help message
 */
function printHelp() {
  console.log(`${colors.blue}Test Runner Script${colors.reset}`);
  console.log(`Usage: node run-tests.js [options]`);
  console.log(`Options:`);
  console.log(`  --all                 Run all tests on all browsers`);
  console.log(`  --browser=<browser>   Run all tests on a specific browser`);
  console.log(`  --test=<test>         Run a specific test on all browsers`);
  console.log(`  --help                Show this help message`);
  console.log(`Available browsers: ${browsers.join(', ')}`);
  console.log(`Available test suites: ${testSuites.join(', ')}`);
}

/**
 * Main function
 */
function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0 || args.includes('--help')) {
    printHelp();
    return;
  }
  
  if (args.includes('--all')) {
    runAllTests();
    return;
  }
  
  // Check for browser option
  const browserArg = args.find(arg => arg.startsWith('--browser='));
  if (browserArg) {
    const browser = browserArg.split('=')[1];
    if (browsers.includes(browser)) {
      runBrowserTests(browser);
      return;
    } else {
      console.error(`${colors.red}Invalid browser: ${browser}${colors.reset}`);
      printHelp();
      return;
    }
  }
  
  // Check for test option
  const testArg = args.find(arg => arg.startsWith('--test='));
  if (testArg) {
    const test = testArg.split('=')[1];
    if (testSuites.includes(test)) {
      runTestSuiteTests(test);
      return;
    } else {
      console.error(`${colors.red}Invalid test suite: ${test}${colors.reset}`);
      printHelp();
      return;
    }
  }
  
  // If no valid options are provided, run all tests
  runAllTests();
}

// Run the main function
main();
