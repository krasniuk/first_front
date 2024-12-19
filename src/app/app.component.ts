import { Component } from '@angular/core';
import { CalcularorComponent } from "./calcularor/calcularor.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CalcularorComponent]
})
export class AppComponent {
    public Title = 'There is a var';
    public VarInput = 'input something';
    public show_message(){
        alert('Hello world!!')
    }
}
