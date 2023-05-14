import { ApiError, ApiSuccess } from 'types/api.types';

export const apiSuccess = <R>(res: ApiSuccess<R> | ApiError): res is ApiSuccess<R> => !('error' in res);
