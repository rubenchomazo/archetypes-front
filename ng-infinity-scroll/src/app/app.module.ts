import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from "ngx-spinner";
import { HttpClientModule } from '@angular/common/http';
import { FooterModule } from './footer/footer.module';
import { HeaderModule } from './header/header.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
    HttpClientModule,
    FooterModule,
    HeaderModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
