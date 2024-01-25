import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { map } from 'rxjs';


export const AuthGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router: Router = inject(Router);
  const auth: AuthService = inject(AuthService);
 
  return auth.user$
    .pipe(
      map(user => {
          if(user) return true;
          router.navigate(['/login'], {queryParams: {returnUrl:state.url}});
          return false
      })
    )
}