import { Component } from '@angular/core';
import { HttpReqService } from './http-req.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'I am the parent Component passing into child one';
  public myPostsData: any;
  public albumData: any;

  ngOnInit() {
    this._getAPIDatafromService();
    this._postAPIData();
    
  }

  constructor(private _httpreq: HttpReqService) { }

  private _getAPIDatafromService() {
    this._httpreq.getAPIData()
    .subscribe({next: this._getAPIDataSuccess, error: this._getAPIDataError})
  }

  private _getAPIDataSuccess = (data) => {
    this.myPostsData = data;
    console.log(this.myPostsData);
  }

  private _getAPIDataError = (error) => {
    console.log(error);
    // Route to a custom Error page
  }


  private _postAPIData() {
    this._httpreq.postDataToAPI('hello', 'something', 100)
    .subscribe({next: this._postAPISuccess, error: this._postAPIError})
  }

  private _postAPISuccess = (data) => {
    console.log('Data received after post success');
    console.log(data); 
  }

  private _postAPIError = (error) => {
    console.log(error);
  }

  //List of Albums
  public getAlbums(){
    this._httpreq.getAPIDataAlbum()
    .subscribe({next:this._getAlbumSuccessHandler, error: this._getAlbumErrorHandler })
  }
// cases
// camelCase
// kebab-case
// PascalCase
// snake_case


 public _getAlbumSuccessHandler = (data)=> {
    this.albumData= data
 }

 public _getAlbumErrorHandler = (error)=> {
  alert(error); 
}

// Post List of Albums
public postAlbums() {
   this._httpreq.postDataAlbum(123, 'AlbumList', 1)
   .subscribe({next: this._postAlbumSuccessHandler, error: this._postAlbumErrorHandler })
}

   private _postAlbumSuccessHandler = ( data )=> console.log(data);
   
   private _postAlbumErrorHandler = (error) =>  console.log(error);


}
