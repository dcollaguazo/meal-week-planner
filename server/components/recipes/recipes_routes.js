"use strict";

const express = require("express");
const recipes_routes = express.Router();
const response = require("../../network/response");
const sub_route = "/recipes";

recipes_routes.get(sub_route, (req, res) => {
  response.success(req, res, "GET Recipes", 200);
});

recipes_routes.delete(sub_route, (req, res) => {
  response.success(req, res, "DELETE Recipes", 200);
});

module.exports = recipes_routes;
