interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: 'MPijzypshMMDtJ3SWlR8oOPXBge0rBnu',
  domain: 'dev-beauty.auth0.com',
  callbackURL: 'http://localhost:3000/callback'
};
