import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ImagekitioAngularModule } from "../../lib/src/imagekitio-angular/imagekitio-angular.module";
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ImagekitioAngularModule.forRoot({
      urlEndpoint: environment.URL_ENDPOINT,
      publicKey: environment.PUBLIC_KEY,
      authenticationEndpoint: environment.AUTHENTICATION_ENDPOINT
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
