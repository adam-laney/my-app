import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AffirmationService } from '../affirmation.service';
@Component({
  selector: 'app-affirmation-buy',
  templateUrl: './affirmation-buy.component.html',
  styleUrls: ['./affirmation-buy.component.css']
})
export class AffirmationBuyComponent implements OnInit{
  affirmations!: Observable<string[]>
  affirmationBuy:AffirmationCups[]=[]; 
  constructor(
    private affirmationService: AffirmationService,
  ) {}
  ngOnInit(): void {
    this.affirmations = this.affirmationService.getAffirmations();
    this.affirmations.subscribe(x => x.forEach(y => this.affirmationBuy.push(<AffirmationCups> { Affirmation: y , CupAddress: "/CupBuy/"+ y   })));
    }
}
interface AffirmationCups {
  Affirmation: string;
  CupAddress: string;
}
