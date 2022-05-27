import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {
  // uso del decorador Input para poder recibir informacion del padre hacia el hijo
  @Input() img:string = '';
  @Output() loaded:EventEmitter<string> = new EventEmitter<string>();

  imgDefault: string = './assets/images/default.png';

  constructor() { }

  ngOnInit(): void {
  }

  imgError(): void {
    this.img = this.imgDefault;
  }

  loadedImg(): void {
    console.log('Desde el hijo');
    this.loaded.emit(this.img);
  }

}
