const API_URL = process.env.REACT_APP_API_URL || ""

interface Credentials {
  email: string;
  password: string;
}

export const loginRequest = async (body: Credentials) => {
  const response = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })

  return await response
}

export const requestAPIPOST = async (path: string, token: string, body: object) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-ACCESS-TOKEN": token
    },
    body: JSON.stringify(body)
  })

  return await response
}

export const requestAPIGET = async (token: string, queryParams?: object) => {
  if (queryParams) {
    return doGetWithParams(token, buildURLwithQueryParams(API_URL, queryParams))
  }

  return doGetWithoutParams(token, API_URL)
}

const doGetWithParams = async (token: string, url: string) => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "X-ACCESS-TOKEN": token
    }
  })

  return await response
}

const doGetWithoutParams = async (token: string, url: string) => {
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "X-ACCESS-TOKEN": token
    }
  })

  return await response 
}

const buildURLwithQueryParams = (url: string, qp: object) => {
  return `${url}?${buildQueryParams(qp)}`
}

const buildQueryParams = (qp: object) => {
  return Object.entries(qp).reduce(reduceFun, "")
}

const reduceFun = (acc: string, keyAndValue: any, index: number) => {
  if (isFirstItem(index)) {
    return acc + `${keyAndValue[0]}=${keyAndValue[1]}`
  }

  return acc + `&${keyAndValue[0]}=${keyAndValue[1]}`
}

const isFirstItem = (index: number) => index === 0

