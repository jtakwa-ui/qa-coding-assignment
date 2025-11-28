import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  // Folder containing all the tests
  testDir: './tests',          

  // Maximum time one test can run (30 seconds)
  timeout: 30 * 1000,          

  expect: {
    // Maximum time for each assertion
    timeout: 5000,             
  },

  // Run tests in parallel
  fullyParallel: true,         
  
  // Reporter configuration (HTML report)
  reporter: [['html', { open: 'never' }]],

  use: {
    // Base URL for all tests
    baseURL: 'https://www.saucedemo.com', 

    // Run tests in headless mode
    headless: false,        

    // Browser viewport size
    viewport: { width: 1280, height: 720 },

    // Maximum time for each action
    actionTimeout: 5000,   

    // Ignore HTTPS errors
    ignoreHTTPSErrors: true,

    // Record video only on failure
    video: 'retain-on-failure', 

    // Take screenshots only on failure
    screenshot: 'only-on-failure',

    // Record trace on first retry
    trace: 'on-first-retry',    
  },

  // Run tests in multiple browsers
  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'WebKit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
