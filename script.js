'use strict';
require('dotenv').config();
import axios from 'axios';

export const handleEvents = async (req, res) => {
  try {
    const event = req.body;
    // Hantera specifika eventtyper
    switch (event.eventType) {
      case 'OrderCreated':
        console.log('OrderCreated');
        break;
      case 'OrderUpdated':
        console.log('OrderUpdated');
        break;
      case 'UserAdded':
        console.log('UserAdded');
        break;
      case 'SubscriptionChanged':
        console.log('SubscriptionChanged');
        break;
      default:
        throw new Error(`Ohanterat eventtyp: ${event.eventType}`);
    }
    res.status(200).send(event);
    console.log(event, event.data.items);
  } catch (error) {
    console.error('Error handling event:', error);
    res.status(500).send({ error: error.message });
  }
};
