import { Component, Input } from '@angular/core';
import { Post, Comment } from 'models';
import { PostService, PostSocketService, LoggedUser, MessageParser } from 'services';

/**
 * Affiche les poste
 */
@Component({
  selector: 'post',
  templateUrl: 'post.html'
})
export class PostComponent { 
    @Input() post: Post;
    
    constructor(
        private postSocket: PostSocketService, 
        private user: LoggedUser,
        private postService: PostService,
        private parser: MessageParser
    ) {}

    ngOnInit() {
        // détermine le bon type de contenu
        this.post.content = this.parser.parse(this.post);
        this.postSocket.onComment((message: Comment) => {
            if(this.post.id === message.post.id) this.post.comments.push(message);
        })
    }

    onComment(message: string) {
        // TODO envoyer le message
        this.postService.comment(this.post, message);
    }

    onLike() {
        this.post.liked = true;
        this.postService.like(this.post);
    }
}
