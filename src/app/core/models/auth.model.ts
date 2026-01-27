export interface CreateAccountCredentials {
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    password: string | null;
    phoneNumber: string | null;
    identificationNumber: string | null;
}

export interface LoginCredentials {
    email: string | null;
    password: string | null;
}

export interface AuthResponse {
    token: string;
}