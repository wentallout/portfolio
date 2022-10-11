class HttpError {
  constructor(status, body) {
    this.status = status;
    if (typeof body === "string") {
      this.body = { message: body };
    } else if (body) {
      this.body = body;
    } else {
      this.body = { message: `Error: ${status}` };
    }
  }
  toString() {
    return JSON.stringify(this.body);
  }
}
class Redirect {
  constructor(status, location) {
    this.status = status;
    this.location = location;
  }
}
class ValidationError {
  constructor(status, data) {
    this.status = status;
    this.data = data;
  }
}
function error(status, message) {
  return new HttpError(status, message);
}
function json(data, init) {
  const headers = new Headers(init == null ? void 0 : init.headers);
  if (!headers.has("content-type")) {
    headers.set("content-type", "application/json");
  }
  return new Response(JSON.stringify(data), {
    ...init,
    headers
  });
}
export {
  HttpError as H,
  Redirect as R,
  ValidationError as V,
  error as e,
  json as j
};
