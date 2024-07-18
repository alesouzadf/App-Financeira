export default class Request {
  static headers: any = {
    "Content-Type": "application/json",
    "Acces-Control-Allow-Origin": "*",
  };
  static baseUrl: string = `http://localhost:4000`;

  static addToken(token: string) {
    Request.headers = {...Request.headers, Authorization: `Bearer ${token}`};
  }

  static deleteToken() {
    delete Request.headers.Authorization;
    return;
  }

  static async genericRequest(
    method: string,
    complementURL: string,
    dataBody?: any
  ) {
    const data = await fetch(Request.baseUrl + `${complementURL}`, {
      method: method,
      headers: Request.headers,
      body: JSON.stringify(dataBody),
    });
    const result = await data.json();
    return result;
  }

  static async get(complementURL: string) {
    const result = await Request.genericRequest("GET", complementURL);
    return result;
  }

  static async post(complementURL: string, dataBody: any) {
    console.log(complementURL, dataBody);
    const result = await Request.genericRequest(
      "POST",
      complementURL,
      dataBody
    );
    return result;
  }

  static async put(complementURL: string, dataBody: any) {
    const result = await Request.genericRequest("PUT", complementURL, dataBody);
    return result;
  }

  static async delete(complementURL: string) {
    const result = await Request.genericRequest("DELETE", complementURL);
    return result;
  }
}
