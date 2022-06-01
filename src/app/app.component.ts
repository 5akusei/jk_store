import { Component } from '@angular/core';

import { Product } from './models/product.model';

import { Product1 } from './product.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthImg = 10;

  name = 'Jeison';

  age = 18;

  img = 'https://picsum.photos/200';

  btnDisabled = true;

  products : Product[] = [
    {
      id: '1',
      name: 'Random Product 1',
      image: 'https://picsum.photos/200',
      price: 60
    },
    {
      id: '2',
      name: 'Random Product 2',
      image: 'https://picsum.photos/200',
      price: 290
    },
    {
      id: '3',
      name: 'Random Product 3',
      image: 'https://picsum.photos/200',
      price: 100
    }
  ]

  person = {
    name: 'Jeison',
    age: 18,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
  }

  names: string[] = ['Jei', 'Juli', 'Santi'];

  newName = '';

  box = {
    width: 100,
    height: 100,
    background: 'red'
  };

  products1: Product1[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: 'https://source.unsplash.com/random',
      category: 'all',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: 'https://source.unsplash.com/random'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: 'https://source.unsplash.com/random'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: 'https://source.unsplash.com/random'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: 'https://source.unsplash.com/random'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: 'https://source.unsplash.com/random'
    }
  ]

  onLoaded(img: string) {
    console.log('desde el padre', img);
  }

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.person.age += 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1);
  }
}
