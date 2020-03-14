import { Component, OnInit } from '@angular/core';
// import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

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
  // heroes = HEROES;

  // Tutorial - 5
  heroes: Hero[];
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  // Tutorial - 3 method
  selectedHero: Hero;
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  // Tutorial - 5 method
  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }
}
