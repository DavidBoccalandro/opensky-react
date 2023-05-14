export class LocalStorage {
  static set jwt(token: string | null) {
    if (!token) {
      localStorage.removeItem('jwt');
      return;
    }
    localStorage.setItem('jwt', token);
  }

  static get jwt(): string | null {
    return localStorage.getItem('jwt');
  }
}
