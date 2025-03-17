import { Component } from '@angular/core';
import { NgForm } from '@angular/forms'; // Import NgForm
import { AuthService } from '../../../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private authService: AuthService, private router: Router) { }

  onRegister(form: NgForm): void {
    if (form.valid) {
      this.authService.register(form.value).subscribe({
        next: () => {
          alert('Registration successful!');
          this.router.navigate(['/login']); // Redirect to login
        },
        error: (err) => {
          console.error('Registration failed:', err);
          alert('Registration failed. Please try again.');
        }
      });
    } else {
      alert('Please fill out all required fields.');
    }
  }
}
