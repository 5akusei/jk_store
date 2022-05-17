import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {
  // uso del decorador Input para poder recibir informacion del padre hacia el hijo
  @Input() img:string = 'valor inicial';

  constructor() { }

  ngOnInit(): void {
  }

}
