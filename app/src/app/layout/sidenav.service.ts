import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  private _isOpen = signal(false);
  readonly isOpen = this._isOpen.asReadonly();

  toggle(): void {
    this._isOpen.update(value => !value);
  }

  close(): void {
    this._isOpen.set(false);
  }
}
