const baseUrl =
  import.meta.env.VITE_BASE_API_URL ||
  "https://app.ftoyd.com/fronttemp-service";

class ApiClient {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async get<T>(path: string) {
    const response = await fetch(`${this.baseUrl}${path}`);
    return response.json() as Promise<T>;
  }

  async post<T>(path: string, data: T) {
    const response = await fetch(`${this.baseUrl}${path}`, {
      method: "POST",
      body: JSON.stringify(data),
    });
    return response.json() as Promise<T>;
  }
}

export default new ApiClient(baseUrl);
