import { DataSource } from 'falcor';

export interface Request {
  url: string;
  method: string;
  body: {
    [key: string]: any;
  };
}

export interface Response {
  status (code: number): Response;
  json (json: any): any;
  send (data: string): any;
}

export function dataSourceRoute <T extends Request, U extends Response> (getDataSource: (req: T, res: U) => DataSource): (req: T, res: U, next: (error: Error) => void) => void;
