import { Injectable, ElementRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimService {

  constructor() { }

  popupAnim(el: ElementRef, text: string, time: number) {
    el.nativeElement.innerText = text;
    el.nativeElement.classList.add('popup-transition');
    setTimeout(() => {
      el.nativeElement.classList.remove('popup-transition');
    }, time);
  }
}
