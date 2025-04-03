import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts = [
    { title: 'Meu primeiro post', content: 'Este é o conteúdo do meu primeiro post!', author: 'João' },
    { title: 'Aprendendo Angular', content: 'Angular é um framework incrível!', author: 'Maria' }
  ];

  getPosts() {
    return this.posts;
  }

  addPost(post: any) {
    this.posts.push(post);
  }
}
