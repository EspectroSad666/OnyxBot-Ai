const createContext = require("./core/context");
const detectIntent = require("./core/intentDetector");
const decide = require("./core/decisionEngine");
const generateResponse = require("./responses/responseEngine");

async function processMessage(message) {

  const context = createContext(message);

  const intent = detectIntent(context.text);

  const action = decide(intent);

  const response = generateResponse(action, context);

  return response;

}

module.exports = processMessage;
