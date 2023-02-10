import debug from 'debug';

debug('testing:teardown');

export default async () => {
  // Any code here will be executed once, after all tests ran
  debug('Teardown complete');
};
