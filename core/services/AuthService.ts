import Service from './Service';

export default class AuthService extends Service {
  static async login(
    username: string,
    password: string
  ): Promise<{ token: string }> {
    return this.Http.post(
      '/auth/login',
      { username, password },
      { withCredentials: true }
    ).then(this.getData);
  }

  static async logout(): Promise<void> {
    return this.Http.post('/auth/logout', {}, { withCredentials: true });
  }

  static isAuthenticated(): Promise<{ isAuth: boolean }> {
    return this.Http.get('/auth/is-auth', {
      withCredentials: true,
    }).then(this.getData);
  }
}
