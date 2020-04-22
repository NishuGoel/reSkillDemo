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

  public postDataToAPI(title, body, userId): Observable<any> {
    return this._httpClient.post(environment.SERVICE_APIS.POST_API_DATA, {
      title: title,
      body: body,
      userId: userId
    }
    )
  }
// PUT calls CRUD operation
  public updateDataToPosts(title, postId): Observable<any> {
   return this._httpClient.put(environment.SERVICE_APIS.PUT_API_DATA + postId, {
      title: title
    })
  }

  // Delete calls CRUD operation
}
