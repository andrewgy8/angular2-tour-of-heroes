"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var hero_detail_component_1 = require('./hero-detail.component');
/*the heros arrray is of type Hero created above, and all heros have an id and name.*/
var HEROES = [
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
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Tour of Heroes';
        this.heroes = HEROES;
    }
    /*When the hero is selected from the list, it is assigned tp the selectedHero Variable*/
    AppComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            /*{{something}} allows the component to be rendered with the app component data
            *this is interpolation of one way data-binding
            */
            template: "\n\t    <h1>{{title}}</h1>\n\t    <h2>My Heroes</h2>\n\t    <ul class=\"heroes\">\n\t    \t<li *ngFor=\"let hero of heroes\"\n\t    \t\t[class.selected]=\"hero === selectedHero\"\n\t    \t\t(click)=\"onSelect(hero)\">\n\t    \t\t<span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n\t    \t</li>\n\t    </ul>\n\t    <my-hero-detail [hero]=\"selectedHero\"></my-hero-detail>\n\t    ",
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
            styles: ["\n    \t.selected {\n    \t\tbackground-color: #CFD8DC !important;\n    \t\tcolor: white;\n    \t}\n    \t.heroes {\n    \t\tmargin: 0 0 2em 0;\n    \t\tlist-style-type: none;\n    \t\tpadding: 0;\n    \t\twidth: 15em;\n    \t}\n    \t.heroes li {\n    \t\tcursor: pointer;\n    \t\tposition: relative;\n    \t\tleft: 0;\n    \t\tbackground-color: #EEE;\n    \t\tmargin: .5em;\n    \t\tpadding: .3em 0;\n    \t\theight: 1.6em;\n    \t\tborder-radius: 4px;\n    \t}\n    \t.heroes li.selected:hover {\n    \t\tbackground-color: #607D8B;\n    \t\tcolor: white;\n    \t}\n    \t.heroes li:hover {\n    \t\tcolor: #607D8B;\n    \t\tbackground-color: #DDD;\n    \t\tleft: .1em;\n\n    \t}\n    \t.heroes .text {\n    \t\tposition: relative;\n    \t\ttop: -3px;\n    \t}\n    \t.heroes .badge {\n    \t\tdisplay: inline-block;\n    \t\tfont-size: small;\n    \t\tcolor: white;\n    \t\tpadding: 0.8em 0.7em 0 0.7em;\n    \t\tbackground-color: #607D8B;\n    \t\tline-height: 1em;\n    \t\tposition: relative;\n    \t\tleft: -1px;\n    \t\ttop: -4px;\n    \t\theight: 1.8em;\n    \t\tmargin-right: .8em;\n    \t\tborder-radius: 4px 0 0 4px;\n    \t}\n    "],
            /*directives prevents the site from receiving unwanted html code ie, an attack,
            the directive will allow htmml from herodetailcomponent to be inserted*/
            directives: [hero_detail_component_1.HeroDetailComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map