'use strict';
import 'dotenv/config';
import axios from 'axios';

const USECURE_API_URL = process.env.USECURE_API_URL;
const USECURE_API_KEY = process.env.USECURE_API_KEY;

export const createOrgUsecure = async (event) => {
  try {
    console.log(event, 'this is in the function');
    const query = {
      query: `
        mutation {
          createTenant(
            name: "${event.organizationName}",
            externalId: "${event.subscriptionId}",
            parentCompanyExternalId: "${event.brokerId}",
            settings: {
              freeTrial: false,
              domainLock: false
            }
          ) {
            id
            name
          }
        }
      `,
    };

    const response = await axios.post(`${USECURE_API_URL}`, query, {
      headers: {
        'x-api-key': `${USECURE_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    console.log(response?.data);
    return response.data;
  } catch (error) {
    console.error(
      `something wrong ${error}, ${JSON.stringify(error?.response?.data)},${
        error?.response?.status
      }`
    );
  }
};
