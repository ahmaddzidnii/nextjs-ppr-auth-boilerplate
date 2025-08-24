export interface AuthUser {
  id: string;
  email: string;
  name: string;
  avatarUrl: string | null;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: AuthUser | null;
}

export interface AuthContextType extends AuthState {}

export interface DataLoginResponse {
  data: {
    id: string;
    name: string;
    email: string;
    avatarUrl: string | null;
  };
}
