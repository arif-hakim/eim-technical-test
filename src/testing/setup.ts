// This script gets run once before all tests
// It's responsible for setting up the test db with the test data
import debug from 'debug';

debug('testing:setup');

export default async () => {
  require('dotenv').config();
  // Any code here will be executed once, before all tests run
  debug('setup complete');
};
