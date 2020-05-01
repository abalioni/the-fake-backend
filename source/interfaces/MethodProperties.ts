import { Request } from 'express';
import Search from './Search';
import { ResponseHeaders } from '../types';

export default interface MethodProperties {
  code?: number;
  data?: any;
  file?: string;
  headers?: ResponseHeaders;
  paginated?: boolean;
  search?: Search;
}
