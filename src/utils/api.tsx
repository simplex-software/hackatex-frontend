const API_ENDPOINT = 'http://192.168.0.60:3012/api/v1';

export async function callApi(method: string, path: string, data?: any) {
  const res = await fetch(`${API_ENDPOINT}${path}`, {
    method,
    headers: {
      Accept: 'application/json'
    },
    body: JSON.stringify(data)
  })
  return res.json()
}