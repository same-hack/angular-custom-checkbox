import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'custom-checkbox';
  checkBoxValue: boolean = false;

  forms = [
    { id: 1, userName: 'サメハック', isChecked: false },
    { id: 2, userName: 'いぬハック', isChecked: false },
    { id: 3, userName: 'ねこハック', isChecked: false },
    { id: 4, userName: 'ぶたハック', isChecked: false },
  ];

  // チェックボックス変更を検知するメソッド
  onCheckboxChange(isChecked: boolean, id: number) {
    console.log('id', id);
    console.log('isChecked', isChecked);
  }
}
