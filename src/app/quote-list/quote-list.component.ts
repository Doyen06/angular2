import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {
  quotes: Array<any>= [
    {
      id: 1,
      text: "I love fries",
      author: "Neil Armstrong"
    },{
      id: 2,
      text: "Damn Gina",
      author: "Martin"
    },{
      id: 42,
      text: "Put something on your step!",
      author: "Eddie Murphy"
    }
  ];

  constructor() { }

  ngOnInit() {
  }
  removeQuote(id){
    this.quotes =this.quotes.filter(
      (oneQuote) => oneQuote.id !== id
    );
  }

}
