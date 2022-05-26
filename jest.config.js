const nextJest = require('next/jest')
const { createPatinaNextJestPlugin } = require('@upstart/patina-design-system/plugins/nextjs')

const withNext = nextJest({ dir: './' })
const withPatina = createPatinaNextJestPlugin({ plugins: [withNext] })

// Add any custom config to be passed to Jest
const customJestConfig = {
  // Add more setup options before each test is run
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"]
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = withPatina(customJestConfig)