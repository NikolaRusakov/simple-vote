import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  showLoginModalOb = new BehaviorSubject<boolean>(false);

  constructor() {
  }

  toggleShowLoginState() {
    this.showLoginModalOb.next(!this.showLoginModalOb.value);
  }
}
