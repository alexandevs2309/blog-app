import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiBaseUrl = 'http://localhost:8000/api/';  // Reemplaza con la URL de tu API Django

  constructor(private http: HttpClient) { }

  getPosts(): Observable<any> {
    return this.http.get(this.apiBaseUrl + 'blog/');
  }

  getPost(id: number): Observable<any> {
    return this.http.get(this.apiBaseUrl + `blog/${id}/`);
    
  }

  createPost(postData: any): Observable<any> {
    return this.http.post(this.apiBaseUrl + 'posts/', postData);
  }
  updatePost(id: number, postData: any): Observable<any> {
    return this.http.put(this.apiBaseUrl + `posts/${id}/`, postData);
  
  }
  deletePost(id: number): Observable<any> {
    return this.http.delete(this.apiBaseUrl + `posts/${id}/`);
  }

  

  // Agrega más métodos según sea necesario (editar, eliminar, etc.)
}
