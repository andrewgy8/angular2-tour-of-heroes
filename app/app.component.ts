import { Component } from '@angular/core';

import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';

/*the heros arrray is of type Hero created above, and all heros have an id and name.*/
const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
    selector: 'my-app',
    /*{{something}} allows the component to be rendered with the app component data
    *this is interpolation of one way data-binding
    */

    template: `
	    <h1>{{title}}</h1>
	    <h2>My Heroes</h2>
	    <ul class="heroes">
	    	<li *ngFor="let hero of heroes"
	    		[class.selected]="hero === selectedHero"
	    		(click)="onSelect(hero)">
	    		<span class="badge">{{hero.id}}</span> {{hero.name}}
	    	</li>
	    </ul>
	    <my-hero-detail [hero]="selectedHero"></my-hero-detail>
	    `,
    /*___ngModel____ allows two-way data binding, and the live changes to 
    be seen when hero.name is called.  The use of the {{}} is not necessary aroun hero.name
	
	___ngFor__ take each hero in the HEROES array and store it in the variable hero, and then generate a list in the template

	the asterisk * infront of ngFor is critical beacaue it allows the template to be generated for the ngFor method

	placing styles here is possible and allows only this component to have the styles listed here, 
	but they can be placed elsewhere for better syntaxt and readability

	___ngIf___ If there is a selected hero, then display them.
	if not selectedHero, then display nothing but the list

	___[class.selected]___ if it is true that hero===selectedHero, apply the CSS "selected" class,
	otherwise remove if they dont match

	[]___ is syntax for property binding in angular. Where data flows one way from the data source to 
	a property, this instance class.

    */

    styles: [`
    	.selected {
    		background-color: #CFD8DC !important;
    		color: white;
    	}
    	.heroes {
    		margin: 0 0 2em 0;
    		list-style-type: none;
    		padding: 0;
    		width: 15em;
    	}
    	.heroes li {
    		cursor: pointer;
    		position: relative;
    		left: 0;
    		background-color: #EEE;
    		margin: .5em;
    		padding: .3em 0;
    		height: 1.6em;
    		border-radius: 4px;
    	}
    	.heroes li.selected:hover {
    		background-color: #607D8B;
    		color: white;
    	}
    	.heroes li:hover {
    		color: #607D8B;
    		background-color: #DDD;
    		left: .1em;

    	}
    	.heroes .text {
    		position: relative;
    		top: -3px;
    	}
    	.heroes .badge {
    		display: inline-block;
    		font-size: small;
    		color: white;
    		padding: 0.8em 0.7em 0 0.7em;
    		background-color: #607D8B;
    		line-height: 1em;
    		position: relative;
    		left: -1px;
    		top: -4px;
    		height: 1.8em;
    		margin-right: .8em;
    		border-radius: 4px 0 0 4px;
    	}
    `],
    /*directives prevents the site from receiving unwanted html code ie, an attack,
    the directive will allow htmml from herodetailcomponent to be inserted*/
    directives: [HeroDetailComponent]

})

export class AppComponent { 
	title = 'Tour of Heroes';
	heroes = HEROES;
	selectedHero: Hero;

	/*When the hero is selected from the list, it is assigned tp the selectedHero Variable*/
	onSelect(hero: Hero) { this.selectedHero = hero; }

	/*our hero is an instance of the class hero
	This is ONE-WAY BINDIng, meaning it cannot be modified by the user in browser
	hero: Hero = {
		id: 1,
		name: 'Windstorm'
	}; 
	*/
	/*dont have to infer heros type becasue typescript can infer it from the array created below*/
	
}



