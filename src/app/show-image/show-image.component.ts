import { Component, OnInit } from '@angular/core';
import { DataProviderService } from '../data-provider.service';
import { Image }  from './../models/Image'

@Component({
  selector: 'app-show-image',
  templateUrl: './show-image.component.html',
  styleUrls: ['./show-image.component.css']
})
export class ShowImageComponent implements OnInit {

  //imageUrl: String = "http://leeford.in/wp-content/uploads/2017/09/image-not-found.jpg";
  imageUrl: String = "https://res.cloudinary.com/practicaldev/image/fetch/s--bIcIUu5D--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://thepracticaldev.s3.amazonaws.com/i/t7u2rdii5u9n4zyqs2aa.jpg";
  toShowImage: Boolean = false;
  images: Image[] = [];



  constructor(private service: DataProviderService) {
    this.importImages()
  }


  importImages(){
    this.service.getImageList().subscribe( res => {
      let rows = res.json()['result'];
      for(let rowIndex in rows){
        this.images.push(new Image(rows[rowIndex]['name'], rows[rowIndex]['fs_id'], rows[rowIndex]['file_size']));
        console.log(this.images[rowIndex])
      }
    })
  }


  showImage(){
    //1st image by default
    this.toShowImage = false

   // this.imageUrl = String(this.service.getImage(this.images[0].fs_id));
    this.service.getImage(this.images[0].fs_id).subscribe( res => {
      this.imageUrl = res['url'];
    })

    this.toShowImage = true
  }

  showRandomImage(){

  }



  toggleToShowImage(){
    this.toShowImage = !this.toShowImage;
  }


  ngOnInit() {
  }

}
