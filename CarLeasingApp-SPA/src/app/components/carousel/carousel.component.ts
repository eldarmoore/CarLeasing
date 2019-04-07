import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  public slides = [
    {
      image: 'http://wowslider.com/sliders/demo-77/data1/images/road220058.jpg'
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQirGngC-8gLpyc92JKL6rVmAcKD9bPZE8nEgYCZcW_bvVLB0PZ'
    },
    {
      image: 'http://wowslider.com/sliders/demo-77/data1/images/road220058.jpg'
    },
    {
      image: 'http://wowslider.com/sliders/demo-77/data1/images/road220058.jpg'
    },
    {
      image: 'http://wowslider.com/sliders/demo-77/data1/images/road220058.jpg'
    }
  ];

  constructor() { }

  ngOnInit() {
    console.log(this.slides);
  }

}
