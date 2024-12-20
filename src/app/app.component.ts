import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WebauthnService } from './services/webauthn.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Biomatrics';
  message: string | null = null; // Message to display feedback to the user
  isSuccess: boolean = false; // Indicates if the last action was successful

  constructor(private webAuthnService: WebauthnService) { }

  // Trigger registration process and update the UI based on the outcome
  async register() {
    try {
      await this.webAuthnService.register();
      this.message = "Registration successful!"; // Success message if registration works
      this.isSuccess = true;
    } catch (err) {
      this.message = "Registration failed. Please try again."; // Error message if something goes wrong
      this.isSuccess = false;
    }
  }

  // Trigger authentication process and update the UI based on the outcome
  async login() {
    try {
      await this.webAuthnService.authenticate();
      this.message = "Authentication successful!"; // Success message if authentication works
      this.isSuccess = true;
    } catch (err) {
      this.message = "Authentication failed. Please try again."; // Error message if something goes wrong
      this.isSuccess = false;
    }
  }
}
