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

  ngOnInit() {
    this._getAPIDatafromService();
    this._postAPIData();
    this._updateData();
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

  private _updateData()  {
    this._httpreq.updateDataToPosts('New title value', 1)
    .subscribe({next: this._putAPISuccess, error: this._putAPIError})
  }

  private _putAPISuccess = (data) => console.log(data);
  private _putAPIError = (err) => console.log(err);
  
}
