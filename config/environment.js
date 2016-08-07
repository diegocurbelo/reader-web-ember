/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'reader',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self'",
      'font-src': "'self'  fonts.googleapis.com fonts.gstatic.com",
      'connect-src': "'self'",
      'style-src': "'self' 'unsafe-inline' fonts.googleapis.com",
      'img-src': "'self' data:",
      'media-src': "'self'"
    },

    APP: {
      facebook: {
        app_id: 'APP_ID',
        permissions: 'public_profile,email',
        redirect_uri: 'http://localhost:4200/login/facebook'
      },
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  ENV['ember-simple-auth'] = {
    routeAfterAuthentication: 'authenticated.feeds',
    routeIfAlreadyAuthenticated: 'authenticated.feeds'
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
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
    ENV.APP.facebook.redirect_uri = 'https://reader.uy/login/facebook'
  }

  return ENV;
};
