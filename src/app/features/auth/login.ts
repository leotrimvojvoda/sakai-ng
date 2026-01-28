import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { AppFloatingConfigurator } from '../../core/layout/component/app.floatingconfigurator';
import { AuthService } from '../../core/services/auth.service';
import { LoginCredentials } from '../../core/models/auth.model';

import { CommonModule } from '@angular/common';

import { JwtService } from '../../core/services/jwt.service';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, ButtonModule, CheckboxModule, InputTextModule, PasswordModule, FormsModule, RouterModule, RippleModule, AppFloatingConfigurator],
    templateUrl: './login.html'
})
export class Login {
    credentials: LoginCredentials = {
        email: '',
        password: ''
    };

    checked: boolean = false;
    error: string | null = null;

    private authService = inject(AuthService);
    private jwtService = inject(JwtService);
    private router = inject(Router);

    onSignIn() {
        this.error = null;
        this.authService.login(this.credentials).subscribe({
            next: (response: any) => {
                console.log('Login successful', response);
                if (response && response.token) {
                    this.jwtService.saveToken(response.token);
                }
                this.router.navigate(['/']);
            },
            error: (error) => {
                console.error('Login failed', error);
                this.error = 'Invalid credentials. Please try again.';
            }
        });
    }
}
