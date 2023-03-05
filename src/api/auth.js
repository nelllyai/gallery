import {
  ACCESS_KEY,
  REDIRECT_URI,
  RESPONSE_TYPE,
  SCOPE,
  SECRET_KEY,
  URL_AUTH
} from './const';

const authSearchParams = new URLSearchParams('');
authSearchParams.append('client_id', ACCESS_KEY);
authSearchParams.append('redirect_uri', REDIRECT_URI);
authSearchParams.append('response_type', RESPONSE_TYPE);
authSearchParams.append('scope', SCOPE);

const tokenSearchParams = new URLSearchParams('');
tokenSearchParams.append('client_id', ACCESS_KEY);
tokenSearchParams.append('client_secret', SECRET_KEY); //
tokenSearchParams.append('redirect_uri', REDIRECT_URI);
tokenSearchParams.append('grant_type', 'authorization_code');

export const urlAuth =
  URL_AUTH + '/authorize?' + authSearchParams.toString().replaceAll('%2B', '+');

export const urlToken =
  URL_AUTH + '/token?' + tokenSearchParams.toString();
