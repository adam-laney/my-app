import { Component , OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CheeseService } from '../cheese.service';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-cheese',
  templateUrl: './cheese.component.html',
  styleUrls: ['./cheese.component.css']
})
export class CheeseComponent implements OnInit{
  cheeses!: Observable<string[]>
  randomCheese!: string
  cheeseURL!: string
  constructor(
    private cheeseService: CheeseService,
   private http: HttpClient
  ) {}
  ngOnInit(): void {
    this.cheeses = this.cheeseService.getCheeses();
    this.cheeses.subscribe(x => { this.randomCheese = x[Math.floor(Math.random() * x.length)];
                                  this.cheeseURL = this.randomCheese.split(" ").join("-").toLowerCase().replace('(', '').replace(')', '').replace("'", "" );
                                });
    ;
  }
 
}
