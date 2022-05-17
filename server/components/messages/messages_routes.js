"use strict";

const express = require("express");
const messages_routes = express.Router();
const response = require("../../network/response");
const sub_route = "/messages";

messages_routes.all(sub_route, (req, res) => {
  const body = req.body;

  if (req.query.error) {
    response.error(
      req, 
      res, 
      {message: req.query.error}, 
      400, 
      `log message: error from req.query.error ${req.query.error}`
    );
  } else {
    res.header({
      "x-message": "my message",
      "x-message-content": "my message content"
    });

    const body_response = `
    <h1>All methods message route</h1>
    <h3>Request query string: ${JSON.stringify(req.query)}</h3>
    <h3>Request body: ${JSON.stringify(body)}</h3>
    `;

    response.success(req, res, body_response, 201);
  }

});

module.exports = messages_routes;
