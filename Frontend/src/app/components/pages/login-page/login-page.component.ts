import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  standalone: false,
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  loginForm!:FormGroup;
  isSubmitted=false;
  returnURL="";
  constructor(private fb:FormBuilder,private userService:UserService,
    private active:ActivatedRoute,private route:Router) { }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: new FormControl('',[Validators.required,Validators.email]),
      password: new FormControl('',[Validators.required])
    });

    this.returnURL=this.active.snapshot.queryParams.returnUrl;
  }

  get fc(){
    return this.loginForm.controls;
  }

  submit(){
    this.isSubmitted=true;
    if(this.loginForm.invalid) return;
    this.userService.login({email:this.fc.email.value,password:this.fc.password.value}).subscribe((user)=>{
      if(user){
        this.route.navigateByUrl(this.returnURL);
      }
    }
    ,(err)=>{
      console.log(err);
    }
    );
  }
}
