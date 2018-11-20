import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  // heroes = HEROES;
  heroes: Hero[];
  selectedHero: Hero;


  /**
   * 
   * @param heroServeice 
   * 注入 HeroService
   * 这个参数同时做了两件事：1. 声明了一个私有 heroService 属性，
   * 2. 把它标记为一个 HeroService 的注入点。
   */
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

