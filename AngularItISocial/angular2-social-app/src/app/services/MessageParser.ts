import {
    Post,
    PostContent,
    YoutubePostContent,
    PicturePostContent,
    VideoPostContent
} from '../models';

const youtube = "https://youtu.be/";

/**
 * Parse le contenu d'un post pour en extraire le texte, les images, les vidéos et les liens Youtube.
 */
export class MessageParser {
    parse(post: Post): PostContent<any>[] {
        let mediaList = [];
        var getURL;
        const pictureRegex = /http[s]?:\/\/.+?\.(jpeg|png|jpg|gif)/gmi;
        const youtubeRegex = /(http[s]?:\/\/)?www\.(?:youtube\.com\/\S*(?:(?:\/e(?:mbed))?\/|watch\/?\?(?:\S*?&?v\=))|youtu\.be\/)([a-zA-Z0-9_-]{6,11})/gmi;
        const videoRegex = /http[s]?:\/\/.+\.(mp4|webm|ogg)/gmi;

        while(getURL = pictureRegex.exec(post.message)){
            mediaList.push(new PicturePostContent(getURL[0]));
        }
        
        while(getURL = youtubeRegex.exec(post.message)){
            mediaList.push(new YoutubePostContent(getURL[2]));
        }

        while(getURL = videoRegex.exec(post.message)){
            mediaList.push(new VideoPostContent(getURL[0]));
        }

        if(mediaList.length > 0){
            return mediaList;
        }
        return null;
    }
}
