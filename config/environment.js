/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ideaneering',
    environment: environment,
    contentSecurityPolicy: {
      'connect-src': "'self' http://localhost:3000 http://ideaneering-api.herokuapp.com"
    },
    torii: {
      sessionServiceName: 'session',

      providers: {
        'google-oauth2': {
          scope: 'email',
          apiKey: process.env.GOOGLE_CLIENT_ID
        }
      }
    },
    baseURL: '/',
    locationType: 'hash',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;

    ENV.host = 'http://localhost:3000';
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.host = 'http://www.ideaneering-api.herokuapp.com';
  }

  ENV['simple-auth'] = {
    authorizer: 'simple-auth-authorizer:oauth2-bearer',
    crossOriginWhitelist: [ENV.host]
  };

  ENV['simple-auth-oauth2'] = {
    serverTokenEndpoint: ENV.host + '/tokens'
  };

  ENV.torii.providers['google-oauth2']['redirectUri'] = 'http://localhost:4200'

  return ENV;
};
