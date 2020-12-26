import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AuthService} from '../../auth/auth.service';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Observable<boolean | UrlTree>{
    if (this.authService.isLoggedIn()) {
       return of(true);
    } else {
      // try to auto login user from the available token
      return this.authService.autoLogin().pipe(
        map(user => {
          if(user) {
            return true;
          }
          return this.router.createUrlTree(['/identify']);
        })
      );

    }
  }

}
