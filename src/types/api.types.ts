export type ApiError = {
  error: string;
};

export type ApiSuccess<T> = {
  data: T;
};
