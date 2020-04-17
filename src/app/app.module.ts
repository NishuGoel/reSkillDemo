import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildOneComponent } from './child-one/child-one.component';
import { ChildTwoComponent } from './child-two/child-two.component';
import { ReuseComponent } from './reuse/reuse.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductViewComponent } from './product-view/product-view.component';
import { ColorDirectiveDirective } from './color-directive.directive';
import { ExampleOneComponent } from './example-one/example-one.component';
import { ExampleTwoComponent } from './example-two/example-two.component';
import { ColorHighlightDirective } from './color-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChildOneComponent,
    ChildTwoComponent,
    ReuseComponent,
    PageNotFoundComponent,
    ProductViewComponent,
    ColorDirectiveDirective,
    ExampleOneComponent,
    ExampleTwoComponent,
    ColorHighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
