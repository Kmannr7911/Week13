import React from "react";
import LikeButton from "./like-button";
import ReplyButton from './reply-button';
import Like Button from './like-button';

let  e = React.createElement;

export default class Comment extends React.Component {
    render(){
        return e('div', 
            {class: 'card w-75'}
            e('div',
                {class: 'card-header bg-sucess text-white'},
                'Username and Time'),
            e('div',
                {class: 'card-body'},
                'Comment Content'),
            e('div',
            {class: 'card-footer'},
                e(LikeButton, {}, null),
                e('span', {}, ''),
                e(ReplyButton, {}, null)
            )
         );
    }
}