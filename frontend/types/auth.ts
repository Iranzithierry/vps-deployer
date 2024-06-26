export interface LoginResponse {
    message: string;
    success: boolean;
    user:    User;
    tokens:  Tokens;
}
export interface Tokens {
    refresh: string;
    access:  string;
}
export interface User {
    id:                 number;
    username:           string  | null;
    name:               string  | null;
    email:              string;
    image:              string  | null;
    email_verified:     boolean | null;
    connected_github:   boolean | null
}

export interface Session {
    user:    User;
}
