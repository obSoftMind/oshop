
import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { map } from 'rxjs';


export const AdminAuthGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {

  const auth: AuthService = inject(AuthService);

  return auth.appUser$.pipe(
    map(appUser => appUser!.isAdmin)
  )
}