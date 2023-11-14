export async function get200(fullRoute) {
  try {
    let res = await fetch(fullRoute)
    let data = await res.json()
    if (res.status != 200) {
      throw `${res.status} from server : ${JSON.stringify(data)}`
    }
    return data
  } catch (e) {
    throw `could not GET ${fullRoute} : ${e}`
  }
}

export async function getSite200(fullRoute) {
  try {
    let res = await fetch(fullRoute)
    let data = await res.text()
    if (res.status != 200) {
      throw `${res.status} from server : ${JSON.stringify(data)}`
    }
    return data
  } catch (e) {
    throw `could not GET ${fullRoute} : ${e || e.message}`
  }
}

export async function getNoCORS(fullRoute) {
  try {
    let res = await fetch(fullRoute, {
      mode: "no-cors",
    })

    return res
  } catch (e) {
    throw `could not GET ${fullRoute} : ${e}`
  }
}

export async function get200WToken(path, token) {
  try {
    let res = await fetch(path, {
      mode: "no-cors",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    let data = await res.json()
    if (res.status != 200) {
      throw `${res.status} from server : ${JSON.stringify(data)}`
    }
    return data
  } catch (e) {
    throw `could not GET ${path} : ${e}`
  }
}

export async function get200WKey(path, key) {
  try {
    let res = await fetch(path, {
      // mode: 'no-cors',
      headers: {
        accept: "application/json",
        "X-API-Key": key,
      },
    })
    let data = await res.json()
    if (res.status != 200) {
      throw `${res.status} from server : ${JSON.stringify(data)}`
    }
    return data
  } catch (e) {
    throw `could not GET ${path} : ${e}`
  }
}

export async function postForm200(fullRoute, body) {
  try {
    let res = await fetch(fullRoute, {
      method: "POST",
      body: body,
    })

    return await res.text()
  } catch (error) {
    throw `could not POST ${fullRoute} : ${error}`
  }
}

export async function post200(fullRoute, body) {
  try {
    let res = await fetch(fullRoute, {
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })

    let data = await res.json()
    if (res.status != 200) {
      throw `${res.status} from server : ${data.error}`
    }

    return data
  } catch (error) {
    throw `could not POST ${fullRoute} : ${error}`
  }
}

export async function post200StripCookie(fullRoute, body) {
  try {
    let res = await fetch(fullRoute, {
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      credentials: "include",
    })
    let cookie = res.headers.get("set-cookie")
    if (!cookie) {
      throw "could not get cookie from server response"
    }

    let data
    try {
      data = await res.json()
      return {
        data: data,
        cookie: parseCookie(cookie),
      }
    } finally {
      if (!data) {
        throw `${res.status} from server : ${JSON.stringify(res.body)}`
      }
    }
  } catch (error) {
    throw `could not POST ${fullRoute} : ${error}`
  }
}

export async function deleteForm200(fullRoute, body) {
  try {
    let res = await fetch(fullRoute, {
      body: body,
      method: "DELETE",
    })
    return await res.text()
  } catch (error) {
    throw `could not POST ${fullRoute} : ${error}`
  }
}

export const encodeParams = (p) =>
  Object.entries(p)
    .map((kv) => kv.map(encodeURIComponent).join("="))
    .join("&")

const parseCookie = (str) =>
  str
    .split(";")
    .map((v) => v.split("="))
    .reduce((acc, v) => {
      if (v.length == 2) {
        acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim())
      }
      return acc
    }, {})
