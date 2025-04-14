import { HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoadingService } from '../../services/loading.service';
import { tap } from 'rxjs';

let pendingRequest = 0;

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);
  loadingService.showLoading();
  pendingRequest++;

  return next(req).pipe(
    tap({
      next: (event) => {
        if (event.type === HttpEventType.Response) {
          pendingRequest--;
          if (pendingRequest === 0) {
            loadingService.hideLoading();
          }
        }
      },
      error: (_) => {
        pendingRequest--;
        if (pendingRequest === 0) {
          loadingService.hideLoading();
        }
      },
    })
  );
};
