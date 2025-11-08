declare module '@apiverve/numbertowords' {
  export interface numbertowordsOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface numbertowordsResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class numbertowordsWrapper {
    constructor(options: numbertowordsOptions);

    execute(callback: (error: any, data: numbertowordsResponse | null) => void): Promise<numbertowordsResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: numbertowordsResponse | null) => void): Promise<numbertowordsResponse>;
    execute(query?: Record<string, any>): Promise<numbertowordsResponse>;
  }
}
