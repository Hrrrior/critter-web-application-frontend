import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {GameComponent} from './components/game/game.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GameGridComponent} from './components/game-grid/game-grid.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AppRoutingModule, routingComponents} from './app-routing.module';
import {LayoutModule} from '@angular/cdk/layout';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatSliderModule} from '@angular/material/slider';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MainPageComponent} from './components/main-page/main-page.component';
import {AddGameComponent} from './components/add-game/add-game.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FilterPipe } from './components/filter/filter.pipe';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { AddReviewComponent } from './components/add-review/add-review.component';
import { ReviewComponent } from './components/review/review.component';
import { ReviewListComponent } from './components/review-list/review-list.component';
import { RegisterComponent } from './components/register/register.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { LoginComponent } from './components/login/login.component';
import {JwtInterceptor} from "./helpers/jwt.interceptor";
import {ErrorInterceptor} from "./helpers/error.interceptor";
import { FormInputComponent } from './components/form-input/form-input.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    GameGridComponent,
    routingComponents,
    NavBarComponent,
    MainPageComponent,
    AddGameComponent,
    AddGameComponent,
    SearchBarComponent,
    FilterPipe,
    FilterBarComponent,
    AddReviewComponent,
    ReviewComponent,
    ReviewListComponent,
    RegisterComponent,
    LoginComponent,
    FormInputComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    AppRoutingModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatSliderModule,
    MatSnackBarModule,
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule {
}
