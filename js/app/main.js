define(["jquery", "goatee"], function($, goatee) {
  var headerContent = $("[data-header]");
  var mainContent = $("[data-main]");
  var footerContent = $("[data-footer]");
  var headerFile = "templates/header/header.html";
  var mainFile = "templates/main/one_col.html";
  var footerFile = "templates/footer/footer.html";

  $.get(headerFile, function(template) {
    var data = {};
    var html = goatee.fill(template, data);

    headerContent.html(html);
  });

  $.get(mainFile, function(template) {
    var data = {
      title : "Hello, world!",
      body : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    };
    var html = goatee.fill(template, data);

    mainContent.html(html);
  });

  $.get(footerFile, function(template) {
    var data = {
      title : "Hello, world!",
      body : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    };
    var html = goatee.fill(template, data);

    footerContent.html(html);
  });
});
