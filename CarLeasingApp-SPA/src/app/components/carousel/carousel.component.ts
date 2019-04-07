import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  public slides = [
    {
      image: ''
    },
    {
      image: ''
    },
    {
      image: ''
    },
    {
      image: ''
    },
    {
      image: ''
    }
  ];

  constructor() { }

  ngOnInit() {
    console.log(this.slides);
  }

}
