import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  private minimumLoadingTime = 2000; // Minimum loading time in milliseconds
  private loadingTimeout: any;

  constructor() {}

  showLoading() {
    if (this.loadingTimeout) {
      clearTimeout(this.loadingTimeout); // Clear any existing timeout
    }
    this.isLoadingSubject.next(true);
  }

  hideLoading() {
    this.loadingTimeout = setTimeout(() => {
      this.isLoadingSubject.next(false);
    }, this.minimumLoadingTime); // Ensure loading is shown for at least 4 seconds
  }

  get isLoading() {
    return this.isLoadingSubject.asObservable();
  }
}
