"use strict";

function app_router(app) {
  app.use(require("../components/recipes/recipes_routes"));
  app.use(require("./not_found_handler"));
}

module.exports = app_router;
