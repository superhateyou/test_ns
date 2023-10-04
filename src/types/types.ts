class FetchError extends Error {
  constructor(
    public response: Response,
    public data?: unknown,
  ) {
    super(`Fetch Error: ${response.status} ${response.statusText}`);
  }
}

export default FetchError;
