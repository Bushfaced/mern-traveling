import sendRequest from './send-request';

const BASE_URL = '/api/logs';

export function getAll() {
  return sendRequest(BASE_URL);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function add(payload) {
  return sendRequest(BASE_URL, "POST", payload);
}

export function deleteLog(id) {
  return sendRequest(`${BASE_URL}/${id}`, "DELETE");
}