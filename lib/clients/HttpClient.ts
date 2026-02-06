import { IHttpClient } from "@/lib/interfaces/IHttpClient";
import axios, { AxiosInstance } from "axios";

export class HttpClient implements IHttpClient {
    private client: AxiosInstance;

    constructor(baseURL: string = '') {
        this.client = axios.create({
            baseURL,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    async get<T>(url: string): Promise<T> {
        const response = await this.client.get<T>(url);
        return response.data;
    }

    async post<T>(url: string, data: unknown): Promise<T> {
        const response = await this.client.post<T>(url, data);
        return response.data;
    }
}
