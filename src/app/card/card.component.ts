import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../app.component';

@Component({
  selector: 'app-card',

  //вставляем из файла
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  //начало и конец шаблона, по умолчанию {{ и }}
  //interpolation: ['[[', ']]'],

  //пишем html  прямо тут
  // template: `<div class="card">
  //   <h2>Card component</h2>
  //   <p>
  //     Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis minus
  //     ullam deserunt fugit suscipit odit sed enim sapiente perspiciatis? Non ex
  //     repudiandae reiciendis necessitatibus reprehenderit dolorem, esse ad
  //     expedita illo?
  //   </p>
  // </div>`,
  // styles: [
  //   `
  //     .card {
  //       padding: 0.5rem 1rem;
  //       border: 1px dashed #ccc;

  //       margin-bottom: 1rem;
  //     }

  //     h2 {
  //       margin-bottom: 0.5rem;
  //     }
  //   `,
  // ],
})
export class CardComponent implements OnInit {
  @Input() card!: Card;
  @Input() index!: number;

  cardDate: Date = new Date();

  // //можно указывать типы, так как TS
  title: string = 'My Card Title';
  text = 'My sample text';

  textColor: string = '';

  ngOnInit() {}

  changeTitle() {
    this.card.title = 'Title has been changed';
  }

  changeHandler() {
    //console.log(this.title);
  }
  //two way Binding
  // inputHandler(event: any) {
  //   this.title = event.target.value;
  // }

  // inputHandlerValue(value: string) {
  //   this.title = value;
  // }

  // number = 42;
  // array = [1, 2, 4, 8, 12];
  // obj = { name: 'Dima', info: { age: 25, job: 'front' } };
  // getInfo(): string {
  //   return 'This is my info';
  // }
  // disabled = false;
  // ngOnInit() {
  //   //візіваеться когда стартует компонент, жизненный цикл
  //   //заменим картинку через 4 сек, в штлм имя аттрибута в [] - байдинг
  //   setTimeout(() => {
  //     this.disabled = true;
  //     this.imgUrl =
  //       'https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png';
  //   }, 4000);
  // }
  // imgUrl =
  //   'https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg';
}
