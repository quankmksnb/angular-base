import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderLayoutComponent } from './shared/header-layout/header-layout.component';
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderLayoutComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // // text
  // title = {
  //   name: 'minh quan',
  //   age: 20
  // };

  // // properties
  // isDisabled = false;

  // // attribute
  // contentImg = "hello bà già";
  nameBtn = 'Click tôi ';
  ClickMessage = '';
  handleClick() : void {
    this.ClickMessage = 'Đã ấn cờ lích';
  };
  updateField() : void {
    console.log('updateField');
  };

  bindingMessage = '';
}
