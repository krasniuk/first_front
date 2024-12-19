import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
    public Title = 'There is a var';
    public VarInput = 'input something';
    public show_message(){
        alert('Hello world!!')
    }
}
