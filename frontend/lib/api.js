const API_URL = process.env.NEXT_PUBLIC_API_URL;

const handleResponse = async (res) => {
  if (!res.ok) {
    const error = await res.json().catch(() => ({ error: res.statusText }));
    throw new Error(error.error || `Request failed: ${res.status}`);
  }
  return res.json();
};

export const getApplications = (status) => {
  const url = status
    ? `${API_URL}/api/applications?status=${encodeURIComponent(status)}`
    : `${API_URL}/api/applications`;
  return fetch(url).then(handleResponse);
};

export const getStats = () =>
  fetch(`${API_URL}/api/stats`).then(handleResponse);

export const submitApplication = (data) =>
  fetch(`${API_URL}/api/applications`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then(handleResponse);

export const updateApplicationStatus = (id, payload) =>
  fetch(`${API_URL}/api/applications/${id}/status`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  }).then(handleResponse);
