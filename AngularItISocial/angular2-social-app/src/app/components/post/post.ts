import { Component, Input } from '@angular/core';
import { Post } from 'models';
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
        if(this.post.content){
            console.log(this.post.content);
        }
        this.postSocket.onComment((message)=>{
            this.post.comments.unshift(message);
        })
    }

    onComment(message: string) {
        // TODO envoyer le message
        this.postService.comment(this.post, message);
    }
}
