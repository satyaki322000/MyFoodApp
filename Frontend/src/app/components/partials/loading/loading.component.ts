import { Observable } from 'rxjs';
import { LoadingService } from './../../../services/loading.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  standalone: false,
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent {
  isLoading$!: Observable<boolean>;
  constructor(loadingService:LoadingService){
    // loadingService.showLoading()
    this.isLoading$ = loadingService.isLoading;
  }
}
