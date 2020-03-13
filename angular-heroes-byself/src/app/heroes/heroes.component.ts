import { Component, OnInit } from '@angular/core';
// import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // Tutorial - 1
  // hero = 'Sean Huang';

  // Tutorial - 2
  // hero: Hero = {
  //   id: 1,
  //   name: 'Sean Huang'
  // }

  // Tutorial - 3
  heroes = HEROES;

  constructor() { }

  ngOnInit() {
  }

  // Tutorial - 3 method
  selectedHero: Hero;
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
