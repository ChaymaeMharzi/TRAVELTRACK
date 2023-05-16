import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { PixabayResponse } from './pixabay-response';



@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  public keyword!: string;
  public currentPage: number = 1;
  public size: number = 30;
  public dataImages :any;
  private totalPages: any;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }

  onLoadImages() {
    this.dataImages = [];
    this.doSearch();
    this.currentPage;
    this.totalPages = 0;


  }
  doSearch() {
     this.httpClient.get<PixabayResponse>('https://pixabay.com/api/?key=36305322-03d879757a02e8c2d458fcf38&q=' +
      this.keyword +
      '&per_page=' +
      this.size +
      '&page=' +
      this.currentPage)
      .subscribe(data => {
        this.dataImages = data;
      }, err => {
        console.log(err);
      }
      )
  }


 loadData(evt: any) {
   if (this.currentPage < this.totalPages) {
     console.log(this.currentPage + "/" + this.totalPages);
      ++this.currentPage;
      this.doSearch();
      evt.target.complete();
    }
  }
}
