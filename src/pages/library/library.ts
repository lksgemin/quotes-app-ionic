import { Component, OnInit } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import quotes from '../../data/quotes';
import { Quote } from '../../data/quote.interface';
import { QuotesPage } from '../quotes/quotes';

@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit{

  quoteCollection: {category: string, quotes: Quote[], icon: string}[];
  quotesPage = QuotesPage;

  ngOnInit(){
    this.quoteCollection = quotes;
  }

}
