import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BlogService } from './services/api.service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { CreatePostsComponent } from './components/create-posts/create-posts.component';
import { UpdatePostsComponent } from './components/update-posts/update-posts.component';
import { DeletePostsComponent } from './components/delete-posts/delete-posts.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    BlogDetailComponent,
    CreatePostsComponent,
    UpdatePostsComponent,
    DeletePostsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [BlogService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
