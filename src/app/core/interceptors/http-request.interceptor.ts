import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AuthService} from '../../auth/auth.service';
import {TokenStorageService} from "../services/token-storage.service";

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private tokenService: TokenStorageService) {}

  //intercepting http requests and adding authorization header to all the requests
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = this.authService.authToken || this.tokenService.getToken();
    if (!token) {
      return next.handle(req);
    }
    const modifiedReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });
    return next.handle(modifiedReq);
  }
}
