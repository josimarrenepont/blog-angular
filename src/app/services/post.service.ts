import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private readonly apiUrl = 'http://localhost:3000/posts';

  constructor(private readonly http: HttpClient) {}

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getPostById(id: string): Observable<any> { // ✅ O nome do método e tipo estão corretos?
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addPost(post: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, post);
  }
}
