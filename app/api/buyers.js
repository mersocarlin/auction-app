import api from './api-client';

const serviceUrl = 'api/v1/buyer';


export async function fetchBuyers () {
  const options = {
    url: serviceUrl,
  };

  const { data } = await api.get(options);

  return data;
}
