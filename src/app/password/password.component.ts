import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  private _pwd: string;
  private _state = 'hidden';

  @Input() get pwd() {
    return this._pwd;
  }

  @Output() pwdChange = new EventEmitter();
  set pwd(val) {
    this._pwd = val;
    this.pwdChange.emit(this._pwd);
  }

  setState(state) {
    this._state = state;
  }


  constructor() { }

  ngOnInit() {
  }

}
