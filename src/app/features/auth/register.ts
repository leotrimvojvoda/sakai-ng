import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { AppFloatingConfigurator } from '../../core/layout/component/app.floatingconfigurator';
import { CreateAccountCredentials } from '../../core/models/auth.model';
import { AuthService } from '../../core/services/auth.service';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [CommonModule, ButtonModule, CheckboxModule, InputTextModule, PasswordModule, FormsModule, RouterModule, RippleModule, AppFloatingConfigurator],
    templateUrl: './register.html'
})
export class Register {
    credentials: CreateAccountCredentials = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phoneNumber: '',
        identificationNumber: ''
    };

    error: string | null = null;
    loading: boolean = false;

    private authService = inject(AuthService);
    private router = inject(Router);

    onRegister() {
        this.error = null;
        this.loading = true;
        this.authService.register(this.credentials).subscribe({
            next: (response) => {
                console.log('Registration successful', response);
                this.router.navigate(['/auth/login']);
            },
            error: (error) => {
                console.error('Registration failed', error);
                this.error = 'Registration failed. Please try again.';
                this.loading = false;
            }
        });
    }
}
