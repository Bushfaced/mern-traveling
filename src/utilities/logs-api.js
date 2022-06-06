const BASE_URL = '/api/logs';

export function getAll() {
  return sendRequest(BASE_URL);
}

export function add(logData) {
  return sendRequest(BASE_URL, 'LOG', logData)
}