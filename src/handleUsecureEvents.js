'use strict';
import { createOrgUsecure } from './function/createOrgUsecure.js';

export const handleUsecureEvents = async (req, res) => {
  try {
    const event = req.body;
    if (!event.triggerEventType) {
      res.status(400).send({ error: 'Missing triggerEventType' });
    }

    // Hantera specifika eventtyper
    switch (event.triggerEventType) {
      case 'SubscriptionCreated':
        createOrgUsecure(event);
        console.log('SubscriptionCreated');
        break;
      case 'SubscriptionChanged':
        console.log('SubscriptionChanged');
        break;
      case 'SubscriptionDeleted':
        console.log('SubscriptionDeleted');
      default:
        res
          .status(400)
          .send({ error: `Unhandled event type: ${event.triggerEventType}` });
        return;
    }

    res.status(200).send(event);
    // console.log(event);
    return event;
  } catch (error) {
    console.error('Error handling event:', error);
    res.status(500).send({ error: error.message });
  }
};
