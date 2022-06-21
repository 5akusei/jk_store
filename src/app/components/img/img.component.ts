import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent{

  constructor() { }
  
  // uso del decorador Input para poder recibir informacion del padre hacia el hijo
  @Input() img:string = '';
  @Output() loaded:EventEmitter<string> = new EventEmitter<string>();

  imgDefault: string = './assets/images/default.png';

  imgError(): void {
    this.img = this.imgDefault;
  }

  loadedImg(): void {
    console.log('Desde el hijo');
    this.loaded.emit(this.img);
  }

}
