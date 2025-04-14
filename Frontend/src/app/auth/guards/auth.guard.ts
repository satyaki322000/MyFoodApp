import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService); // Inject UserService inside the function
  const router = inject(Router); // Inject Router inside the function

  if (userService.currentUser.token) {
    return true; // Allow access if the user is authenticated
  }

  // Redirect to login page with the return URL
  router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
  return false;
};
