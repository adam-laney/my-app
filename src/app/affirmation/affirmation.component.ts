import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AffirmationService } from '../affirmation.service';
@Component({
  selector: 'app-affirmation',
  templateUrl: './affirmation.component.html',
  styleUrls: ['./affirmation.component.css']
})
export class AffirmationComponent implements OnInit{
  affirmations!: Observable<string[]>
  randomAffirmation!: string
  constructor(
    private affirmationService: AffirmationService,
  ) {}
  ngOnInit(): void {
    this.affirmations = this.affirmationService.getAffirmations();
    this.affirmations.subscribe(x =>  this.randomAffirmation = x[Math.floor(Math.random() * x.length)]);
  }
 
}
