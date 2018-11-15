import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostSocketService, PostService, NotificationService } from 'services';
import { Post, PostContent } from 'models';

@Component({
    selector: 'social-feed',
    templateUrl: 'social-feed.html'
})
export class SocialFeedComponent implements OnInit {
    items: Post[] = [];
    channelId: string;

    constructor(
        private postService: PostService,
        private notificationService: NotificationService,
        private postSocket: PostSocketService,
        private route: ActivatedRoute
    ) { 

    }

    onSubmit(message: string) {
        //TODO utiliser le postService pour ajouter le message
        this.postService.post(this.channelId, message);
        this.notificationService.addPostNotif();
    }

    ngOnInit() {
        this.route.params
            .subscribe((params) => {
                this.channelId = params['id'];
                this.postService
                    .getAll(this.channelId)
                    .then((items) => {
                        this.items = items
                    });
            });

        this.postSocket.onPost((message) =>{
            this.items.unshift(message);
        });
    }
}
