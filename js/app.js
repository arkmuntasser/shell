requirejs.config({
    "baseUrl": "js/lib",
    "paths": {
      "app": "../app",
      "jquery": "http://code.jquery.com/jquery-1.11.3.min"
    }
});

// Load the main app module to start the app
requirejs(["app/main"]);
