import mockedEnv from 'mocked-env';
import withServerApi from './withServerApi';

describe('withServerApi', () => {
  let restore: () => void;

  const env = {
    SERVER_API: '__SERVER_API__',
  };

  beforeEach(() => {
    restore = mockedEnv(env);
  });

  afterEach(() => {
    restore();
  });

  it('should be able to get static api', () => {
    expect(withServerApi('/test')).toEqual(`${env.SERVER_API}/test`);
    expect(withServerApi('/')).toEqual(`${env.SERVER_API}/`);
  });
});
