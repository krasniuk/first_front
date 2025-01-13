import {Component} from '@angular/core';

@Component({
  selector: 'app-root', //то как вызываем компонент в index.html <app-root></app-root>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public Title = 'There is my first angular frontend project';
  public ToolTip:string = 'Help information';

  show_message() {
    alert('Success save info')
  }
}
