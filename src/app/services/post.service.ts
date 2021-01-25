import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/Post';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class PostService {
  postsUrl: string = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }

  savePost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.postsUrl, post, httpOptions);
  }

  updatePost(post: Post): Observable<Post> {
    const url = `${this.postsUrl}/${post.id}`;
    return this.http.put<Post>(url, post, httpOptions);
  }

  removePost(post: Post): Observable<any> {
    const url = `${this.postsUrl}/${post.id}`;
    return this.http.delete<Post>(url);
  }

  getPost(id: number): Observable<any> {
    const url = `${this.postsUrl}/${id}`;
    return this.http.get<Post>(url);
  }
}
