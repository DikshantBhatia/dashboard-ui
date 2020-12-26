import {HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs';
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {TokenStorageService} from "../services/token-storage.service";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router, private tokenService: TokenStorageService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    return next.handle(request).pipe(
      catchError((err) => {
        // generic error handler called for all http requests which resulted in error
        return this.handleError(err);
      })
    );
  }


  private handleError(errorResponse: HttpErrorResponse) {

    let errorMessage = '';

    if (errorResponse.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${errorResponse.error.message}`;
    } else {
      // server-side error
      if (errorResponse.status === 401) {
        this.tokenService.removeToken();
        this.router.navigateByUrl('/identify');
      }
      errorMessage = errorResponse.error ? errorResponse.error.message : '';
    }
    return throwError(errorMessage);
  }

}
