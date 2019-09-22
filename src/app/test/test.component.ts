import { Component, OnInit } from '@angular/core';
import { Image }  from './../models/Image'
import { DataProviderService } from '../data-provider.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  flShowImages = false;
  name: String = "Andrey";
  images: Image[] = [];
  imageUrl: String = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/An_up-close_picture_of_a_curious_male_domestic_shorthair_tabby_cat.jpg/440px-An_up-close_picture_of_a_curious_male_domestic_shorthair_tabby_cat.jpg";

  constructor(private service: DataProviderService) { 
    // for(let i = 0; i < 10; i ++){
    //   let img = new Image();
    //   img.name = "image " + i;
    //   img.size = i * 10;
    //   this.images.push(img);
    // }
  }

  toggleImages(){
    this.flShowImages = !this.flShowImages;
  }


  showImages(){
    this.imageUrl = 'http://localhost:5000/imgs/5d7fe720568b0cd316bbeec8';


    this.flShowImages = false;
    this.images = [];
    
    this.service.getImageList().subscribe( res  => {
      let rows = res.json()['result'] ;
      console.log(res.json()['result']);

      for( let rowIndex in rows){
        console.log(rows[rowIndex]);
        let img = new Image();
        img.name = rows[rowIndex]['_id'];
        img.size = 0;

        this.images.push(img);
        this.flShowImages = true;
      }
    })
  }

  resetName(){
    this.name = "Andrey";
  }

  ngOnInit() {
  }

}
