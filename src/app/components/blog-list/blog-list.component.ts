import { Component } from '@angular/core';
import { BlogService } from '../../services/api.service';
import { DatePipe } from '@angular/common'; 

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent {
  [x: string]: any;
  posts: any[] = [];

  constructor(private blogService: BlogService, datePipe:DatePipe) { }
  transformDate(date: any) {
    return this['datePipe'].transform(date, 'ago', null, 'es'); 
  }
  ngOnInit(): void {
    this.blogService.getPosts().subscribe(response => {
      this.posts = response.results.posts.map((post: { thumbnail: any; avatar: any; }) => {
        return {
          ...post,
          thumbnail: `http://localhost:8000${post.thumbnail}`,
          avatar: `http://localhost:8000${post.avatar}`
        };
      });
    });
  }
  
  
}
