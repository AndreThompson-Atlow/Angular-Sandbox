import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/Post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: Post[];
  isEdit: boolean = false;
  currentPost: Post = {
    title: '',
    body: '',
    id: 0,
  };

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }

  onNewPost(post: Post) {
    this.posts.unshift(post);
  }

  editPost(post: Post) {
    this.currentPost = post;
    this.isEdit = true;
  }

  onUpdatedPost(post: Post) {
    this.isEdit = false;
    this.posts.forEach((cur, index) => {
      if (post.id === cur.id) {
        this.posts.splice(index, 1);
        this.posts.unshift(post);
      }
    });
  }

  deletePost(post: Post) {
    this.postService.removePost(post).subscribe(() => {
      console.log(`Removed Post`);
      this.posts.forEach((cur, index) => {
        if (post.id === cur.id) {
          this.posts.splice(index, 1);
        }
      });
    });
  }
}
