 // Importazione delle librerie di Alexa Skills Kit
const Alexa = require('ask-sdk-core');

// Funzione di gestione della richiesta di accensione luce
const TurnOnLightIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'TurnOnLightIntent';
    },
    handle(handlerInput) {
        // Simulazione del controllo del dispositivo
        const speechText = 'Ho acceso la luce del soggiorno!';
        
        return handlerInput.responseBuilder
            .speak(speechText)
            .getResponse();
    }
};

// Funzione di gestione della richiesta di spegnimento luce
const TurnOffLightIntentHandler = {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'TurnOffLightIntent';
    },
    handle(handlerInput) {
        const speechText = 'Ho spento la luce del soggiorno!';
        
        return handlerInput.responseBuilder
            .speak(speechText)
            .getResponse();
    }
};

// Handler per errori
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`Error: ${error.message}`);
        return handlerInput.responseBuilder
            .speak('Scusa, si è verificato un errore.')
            .getResponse();
    }
};

// Creazione e esportazione del builder
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        TurnOnLightIntentHandler,
        TurnOffLightIntentHandler
    )
    .addErrorHandlers(ErrorHandler)
    .lambda();
