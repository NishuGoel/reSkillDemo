import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpReqService {
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  constructor(private _httpClient: HttpClient) {
  }

  public getAPIData(): Observable<any> {
    return this._httpClient.get(environment.SERVICE_APIS.GET_LIST_OF_POSTS)
  }

  public getAPIDataAlbum(): Observable<any>{
    return this._httpClient.get(environment.SERVICE_APIS.GET_LIST_OF_ALBUMS)
  }

  public postDataToAPI(title, body, userId): Observable<any> {
    return this._httpClient.post(environment.SERVICE_APIS.POST_API_DATA, {
      title: title,
      body: body,
      userId: userId
    }
    )
  }
  public postDataAlbum(userId, title, id): Observable<any>{
    return this._httpClient.post(environment.SERVICE_APIS.POST_LIST_OF_ALBUMS, {
      title: title,
      id: id,
      userId: userId
    }
    )
  
  }
}
