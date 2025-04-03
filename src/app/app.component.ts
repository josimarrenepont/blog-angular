import { Component } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newPost: any = { title: '', content: '', author: '' }; // 🟢 Inicializa newPost
  posts: any[] = []; // 🟢 Inicializa posts como um array vazio

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.postService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }

  addPost() {
    if (this.newPost.title && this.newPost.content && this.newPost.author) {
      this.postService.addPost(this.newPost).subscribe((post) => {
        this.posts.push(post); // Adiciona o novo post à lista
        this.newPost = { title: '', content: '', author: '' }; // Limpa o formulário
      });
    }
  }
}
