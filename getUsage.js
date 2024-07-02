'use strict';
const axios = require('axios');
require('dotenv').config();

const USECURE_API_URL = process.env.USECURE_API_URL;
const USECURE_API_KEY = process.env.USECURE_API_KEY;

const getUsage = async () => {
  const query = {
    query: `
        {
          company {
		name
        id
        usage {
	    startDate
        maxLearners
        currency
        distributorId

        }
        clients {
            name
            id
            usage {
	    startDate
        maxLearners
        currency
        distributorId

        }
        }
	}
        }`,
  };

  try {
    const response = await axios.post(`${USECURE_API_URL}`, query, {
      headers: {
        'x-api-key': `${USECURE_API_KEY}`,
        'Content-Type': 'application/json',
      },
    });

    const data = response.data.data;
    const latestMonthData = filterLatestMonth(data.company.usage);
    const latestClientUsage = data.company.clients.map((client) => ({
      ...client,
      usage: filterLatestMonth(client.usage),
    }));

    const result = {
      company: {
        ...data.company,
        usage: latestMonthData,
        clients: latestClientUsage,
      },
    };

    console.log(response.data.data);
    console.log(JSON.stringify(result, null, 2));
  } catch (error) {
    console.log(error);
  }
};

const filterLatestMonth = (usageData) => {
  if (!usageData.length) return [];

  const latestDate = usageData.reduce((latest, current) =>
    new Date(current.startDate) > new Date(latest.startDate) ? current : latest
  ).startDate;

  return usageData.filter((entry) => entry.startDate === latestDate);
};

getUsage();
