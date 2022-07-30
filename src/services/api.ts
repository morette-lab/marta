const API_URL = process.env.REACT_APP_API_URL || ""

export const requestAPIPOST = async (token: string, body: object) => {
 const request = await fetch(API_URL, {
    method: "POST",
    headers: {
      "X-ACCESS-TOKEN": token
    },
   body: JSON.stringify(body)
 })

  return await request
}

export const requestAPIGET = async (token: string, queryParams?: object) => {
  if (queryParams) {
    return doGetWithParams(token, buildURLwithQueryParams(API_URL, queryParams))
  }

  return doGetWithoutParams(token, API_URL)
}

const doGetWithParams = async (token: string, url: string) => {
  const request = await fetch(url, {
    method: "GET",
    headers: {
      "X-ACCESS-TOKEN": token
    }
  })

  return await request
}

const doGetWithoutParams = async (token: string, url: string) => {
  const request = await fetch(url, {
    method: "GET",
    headers: {
      "X-ACCESS-TOKEN": token
    }
  })

  return await request  
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

