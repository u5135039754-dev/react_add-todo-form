export interface User {
  find(arg0: (u: boolean) => boolean): unknown;
  id: number;
  name: string;
  username: string;
  email: string;
}
