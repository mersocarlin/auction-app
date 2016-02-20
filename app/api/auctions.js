import api from './api-client';

const serviceUrl = 'api/v1/auction';


export async function fetchAuctions () {
  const options = {
    url: serviceUrl,
  };

  const { data } = await api.get(options);

  return data;
}


export async function fetchAuctionById (id) {
  const options = {
    url: `${serviceUrl}/${id}`,
  };

  const { data } = await api.get(options);

  return data;
}


export async function placeBid (auctionId, buyerId) {
  const options = {
    url: `${serviceUrl}/bid/${auctionId}/${buyerId}`,
  };

  const { data } = await api.post(options);

  return data;
}
