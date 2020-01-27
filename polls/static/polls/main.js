// Require.js Configurations

require.config({
  paths: {
    // Core Libraries
    backbone: "{% static 'polls/vendor/backbone/backbone' %}",
    bootstrap: "{% static 'polls/vendor/bootstrap/bootstrap' %}",
    jpanel: "{% static 'polls/vendor/jpanelmenu/jquery.jpanelmenu' %}",
    jquery: "{% static 'polls/vendor/jquery/jquery' %}",
    jqueryui: "{% static 'polls/vendor/jquery-ui/ui/jquery-ui' %}",
    underscore: "{% static 'polls/vendor/lodash/lodash' %}",
    respond: "{% static 'polls/vendor/respond/respond.src' %}"
  },
  shim: {
    // Backbone
    backbone: {
      // Depends on underscore/lodash and jQuery
      deps: ["underscore", "jquery"],

      // Exports the global window.Backbone object
      exports: "Backbone"
    }
  }
});
