import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "./auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AuthType} from "./auth-type";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  authType = AuthType;

  authForm: FormGroup;
  submitted = false;
  formType = AuthType.SIGNIN;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private _snackBar: MatSnackBar, private router: Router) {
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.authForm.controls;
  }

  ngOnInit(): void {
    this.authForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(5)]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  getDisplayLabel() {
    return this.formType;
  }

  authenticate() {
    this.submitted = true;
    if (!this.authForm.valid) {
      return;
    }

    let authObservable = this.formType == AuthType.SIGNIN ? this.authService.signin(this.authForm.value)
      : this.authService.signup(this.authForm.value);

    authObservable.subscribe(
      () => {
        //navigate to home page if sigin/signup is successfull
        this.router.navigate(['/home']);
      }, (error) => {
        //display custom message if error message is not coming from backend
        let msg = error ? error : 'Invalid username or password';
        this._snackBar.open(msg, 'close', {
          duration: 4000
        })
      });

  }

  getErrorMessage(control: AbstractControl) {
    return control.errors.required ? "Please enter a value" :
      "Please enter atleast " + control.errors.minlength.requiredLength + "  characters"
  }


}
