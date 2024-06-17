import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-checkbox', // コンポーネントのセレクタ
  templateUrl: './custom-checkbox.component.html', // テンプレートファイル
  styleUrls: ['./custom-checkbox.component.scss'], // スタイルファイル
  providers: [
    {
      provide: NG_VALUE_ACCESSOR, // NG_VALUE_ACCESSORトークンを提供
      useExisting: forwardRef(() => CustomCheckboxComponent), // コンポーネント自体を使用
      multi: true, // 複数のプロバイダーを許可
    },
  ],
})
export class CustomCheckboxComponent implements ControlValueAccessor {
  @Input() label: string = ''; // 外部からラベルを受け取るためのInputプロパティ
  @Input() disabled: boolean = false; // 外部からdisabled状態を受け取るためのInputプロパティ
  @Input() color: string = 'default'; // 外部から色情報を受け取るためのInputプロパティ
  value: boolean = false; // チェックボックスの内部状態

  PLEFIX = 'custom-checkbox-';

  getColor() {
    return this.PLEFIX + this.color;
  }

  // コールバック関数の初期化
  onChange = (value: boolean) => {};
  onTouched = () => {};

  // フォームコントロールから新しい値を受け取ったときに呼ばれる
  writeValue(value: boolean): void {
    this.value = value;
  }

  // フォームコントロールに値の変更を伝えるための関数を登録
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // フォームコントロールにタッチイベントを伝えるための関数を登録
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // フォームコントロールからdisabled状態を受け取ったときに呼ばれる
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  // チェックボックスの状態をトグルする
  toggle(): void {
    if (!this.disabled) {
      this.value = !this.value;
      this.onChange(this.value); // 新しい値をフォームコントロールに伝える
      this.onTouched(); // タッチイベントをフォームコントロールに伝える
    }
  }
}
