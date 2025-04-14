import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PasswordMatchValidator } from '../../../shared/validators/password_match_validator';
import { IUserRegister } from '../../../shared/Interfaces/IUserRegister';
@Component({
  selector: 'app-register-page',
  standalone: false,
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  registerForm!:FormGroup;
  isSubmitted = false;
  returnUrl='';
  constructor(
    private fb:FormBuilder,
    private userService:UserService,
    private active:ActivatedRoute,
    private route:Router
  ) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.registerForm=this.fb.group({
      name:new FormControl('',[Validators.required,Validators.minLength(5)]),
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',[Validators.required,Validators.minLength(5)]),
      confirmPassword:new FormControl('',Validators.required),
      address:new FormControl('',[Validators.required,Validators.minLength(10)])
    },{
      validators:PasswordMatchValidator('password','confirmPassword')
    });

    this.returnUrl=this.active.snapshot.queryParams.returnUrl;
  }

  get fc(){
    return this.registerForm.controls;
  }

  submit(){
    this.isSubmitted=true;
    if(this.registerForm.invalid) return;

    const fv=this.registerForm.value;
    const user:IUserRegister={
      name:fv.name,
      email:fv.email,
      password:fv.password,
      confirmPassword:fv.confirmPassword,
      address:fv.address
    };

    this.userService.register(user).subscribe(_=>{
      this.route.navigateByUrl(this.returnUrl);
    })
  }
}
