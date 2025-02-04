import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import { FormGroup, ReactiveFormsModule, Validators, FormBuilder } from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-signup',
  imports: [
    DefaultLoginLayoutComponent,
    ReactiveFormsModule,
    PrimaryInputComponent,
  ],
  providers: [
    LoginService
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signupForm: FormGroup;
  toastService: any;

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    private loginService: LoginService
  
  ){
    this.signupForm = this.fb.group({

    name: ['', [Validators.minLength(3)]],      
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.minLength(6)]],
    passwordConfirm: ['', [Validators.required]],

    });

  }
 
  submit(){
    
    this.loginService.cadastro(this.signupForm.value.name ,this.signupForm.value.email, this.signupForm.value.password, this.signupForm.value.passwordConfirm).subscribe({
      next: () => this.toastService.success("Login realizado com sucesso!"),
      error: () => this.toastService.error("Erro: falla na tentativa de login, tente novamente!"),     

    })
  }

  navigate(){
    
    this.router.navigate(["login"])
  }
}
