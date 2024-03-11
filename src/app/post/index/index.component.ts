import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

  posts:Post[]=[];

  constructor(public postService:PostService){}


    ngOnInit():void{
        this.postService.getAll().subscribe((data:Post[])=>{
          this.posts = data;
          console.log(this.posts)
        })
    }

  

}
