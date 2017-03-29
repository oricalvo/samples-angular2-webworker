import {Component, Inject, Renderer2} from '@angular/core';
import {CalcService} from "./CalcService";

@Component({
    selector: 'my-app',
    template: require("./app.component.html!text"),
    styles: [require("./app.component.css!text")]
})
export class AppComponent {
    constructor(private calcService: CalcService, private renderer: Renderer2) {
    }

    calc() {
        console.log(this.renderer);

        this.calcService.run(2500).then(val => {
            console.log(val);
        });
    }
}