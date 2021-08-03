import { WebhookClient } from "dialogflow-fulfillment";
import { Request, Response, NextFunction } from "express";
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const probando = (req: Request, res: Response, next: NextFunction) => {
    const agent = new WebhookClient({ request: req, response: res });
    //console.log('Dialogflow Request headers: ' + JSON.stringify(req.headers));
    //console.log('Dialogflow Request body: ' + JSON.stringify(req.body));
   
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

export const enviarEmail = (req: Request, res: Response, next: NextFunction) => {
    const agent = new WebhookClient({ request: req, response: res });
    console.log('Dialogflow Request headers: ' + JSON.stringify(req.headers));
    console.log('Dialogflow Request body: ' + JSON.stringify(req.body));
    function reservarCita(agent: any) {
        const doctor = "DR Ariel Rios Vargas";
        const posta = "Bajio del oriente";
        const ubicacion = "Av villa ortuño 6to anillo";
        const celDoctor = "78588196";
        let nombre = req.body.queryResult.parameters.email;
        console.log(nombre);
        let email = agent.queryResult.parameters.email;
        let telefono = agent.queryResult.parameters.telefono;
        let fecha = agent.queryResult.parameters.fecha;
      const msg = {
        to: email, // Change to your recipient
        from: "cristhian_086@hotmail.com", // Change to your verified sender
        templateId: "d-5b42f625733a4d95b7ab4f4779361942",
        dynamic_template_data: {doctor,posta,ubicacion,celDoctor,nombre,telefono,fecha}
      };
      sgMail.send(msg);
    }
    let intentMap = new Map();
    intentMap.set('reservarCita', reservarCita);
    agent.handleRequest(intentMap);
}