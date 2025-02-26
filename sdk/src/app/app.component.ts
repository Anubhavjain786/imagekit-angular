import { Component } from '@angular/core';
import { Transformation } from 'imagekit-javascript/dist/src/interfaces/Transformation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  path = "default-image.jpg";
  videoPath = "sample-video.mp4";

  transformation: Array<Transformation> = [{
     height: "200",
     width: "200"
  }];

  flexibleTransformationOne: Array<Transformation> = [{
    height: "300",
    width: "300"
  }];

  flexibleTransformationTwo: Array<Transformation> = [{
    height: "200",
    width: "200"
 }];

  videoAdvanceTransformation: Array<Transformation> = [{
    height: "200",
    width: "600",
    b: "5_red",
    q: "95"
  }];

  lqipOne = { active: true, quality: 20, blur: 10 };
  lqipTwo = { active: true, quality: 20, blur: 30 };

  lazyload = "lazy";

  uploadedImageSource = "https://ik.imagekit.io/demo/default-image.jpg";
  uploadErrorMessage = "";

  applyImgTransformationOne(res) {
    this.flexibleTransformationOne = [{
      "height": "200",
      "width": "600",
      "radius": "max",
    }, {
      "height": "200",
      "width": "200",
      "rotate": "180",
    }, {
      "ot": "TEST",
      "oy": "50",
      "ox": "100",
      "otc": "10C0F0"
    }];
  }

  applyImgTransformationTwo(res) {
    this.flexibleTransformationTwo = [{
      "height": "200",
      "width": "200",
      "radius": "max",
    }];
  }

  validateFileFunction(res: any) {
    console.log('validating')
    if(res.size < 1000000){ // Less than 1mb
      return true;
    }
    return false;
  }

  onUploadStartFunction(res: any) {
    console.log('onUploadStart')
  }

  onUploadProgressFunction(res: any) {
    console.log('progressing')
  }

  handleUploadSuccess(res) {
    console.log('File upload success with response: ', res);
    console.log(res.$ResponseMetadata.statusCode); // 200
    console.log(res.$ResponseMetadata.headers); // headers
    this.uploadedImageSource = res.url;
  }

  handleUploadError(err) {
    console.log('There was an error in upload: ', err);
    this.uploadErrorMessage = 'File upload failed.';
  }
}
