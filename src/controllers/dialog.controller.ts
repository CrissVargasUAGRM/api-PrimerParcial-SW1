import { WebhookClient } from "dialogflow-fulfillment";
import { Request, Response, NextFunction } from "express";

export const probando = (req: Request, res: Response, next: NextFunction) => {
    const agent = new WebhookClient({ request: req, response: res });
    console.log('Dialogflow Request headers: ' + JSON.stringify(req.headers));
    console.log('Dialogflow Request body: ' + JSON.stringify(req.body));
   
    function welcome(agent: any) {
      agent.add(`Welcome to my agent!`);
    }
   
    function fallback(agent: any) {
      agent.add(`I didn't understand`);
      agent.add(`I'm sorry, can you try again?`);
    }

    function probandoWebHook(agent: any) {
        agent.add(`Te respondo desde el servidor`);
      }
  
    let intentMap = new Map();
    intentMap.set('Default Welcome Intent', welcome);
    intentMap.set('Default Fallback Intent', fallback);
    intentMap.set('probandoWebHook', probandoWebHook);
    
    agent.handleRequest(intentMap);
}