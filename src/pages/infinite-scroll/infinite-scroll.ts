import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { reorderArray } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-infinite-scroll',
  templateUrl: 'infinite-scroll.html',
})
export class InfiniteScrollPage {
  
  static pageSize: number = 250;
  static loadItemsPer: number = 10;

  private currentItemIndex: number = 0;
  public shows: any[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: HttpClient) {
    this.loadMore();
  }

  loadMore(infiniteScroll: any = undefined) {
    let pageNumber = this.currentItemIndex / InfiniteScrollPage.pageSize;
    let itemIndexInPage = this.currentItemIndex % InfiniteScrollPage.pageSize;
    this.currentItemIndex += InfiniteScrollPage.loadItemsPer;

    this.http.get<any[]>('http://api.tvmaze.com/shows?page=' + pageNumber)
      .subscribe(results => {
        this.shows = this.shows.concat(results.splice(itemIndexInPage, InfiniteScrollPage.loadItemsPer));
        if (infiniteScroll) {
          infiniteScroll.complete();
        }
      });
  }

  reorderItems(indexes) {
    this.shows = reorderArray(this.shows, indexes);
  }
}
