define(["jquery", "goatee"], function($, goatee) {
  var content = {
    header : $("[data-header]"),
    main : $("[data-main]"),
    footer : $("[data-footer]")
  };

  var file = {
    header : "templates/header/header.html",
    main : "templates/main/one_col.html",
    footer : "templates/footer/footer.html"
  };

  var load = function(section, filename) {
    var file = "templates/main/" + filename + ".html";

    $.get(file, function(template) {
      var data = {
        title : "Hello, world!",
        body : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      };
      var html = goatee.fill(template, data);

      content[section].html(html);
    });
  };

  load("header", "header");
  load("main", "one_col");
  load("footer", "footer");
});
