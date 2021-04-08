import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styled from 'styled-components'
import { likePost, likeReply } from '../../../firebase'

// Colors https://coolors.co/d1c6ad-bbada0-390040-a1869e-797596

const MessageArea = styled.div`
    padding-top: 2px;     
    font-weight: 400;
    font-size: 20px;
    
`
const MessageRoot = styled.div`
    margin-top: 20px;     
    padding-left:20px;
    padding-bottom: 20px;
    //border-top: 2px solid;
    //border-radius: 25px;
    background-color: #bbada0;
    color: #390040;
    border-radius: 15px;
    -moz-border-radius: 15px;

`

const MessageHeader = styled.div`
    padding-top: 20px;     
    font-weight: 200;    
`

const ReplyHeader = styled.div`
    padding-top: 20px;
    padding-left: 40px;     
    font-weight: 200;    
`

const ReplyMessageArea = styled.div`
    padding-top: 2px;     
    padding-left:40px;
    font-weight: 400;
    font-size: 20px;
`

const ReplyArea = styled.div`
    padding-top: 2px;     
    padding-left:40px;    
`

const LikeButton = styled.button`
    border: none;
    background-color: #bbada0;
    color: #390040;
    font-size: 20px;
`

const utcToDate = (dateAsUtc) => {
    let date = new Date(dateAsUtc);
    date = date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear()
    return date;
}

const showLikes = (message, likePost) => {
    let likes = message.likes
    if (likes.length > 0) {
        return (
            <>
                {likes.length} likes&nbsp; <LikeButton onClick={(() => { likePost(message) })}><FontAwesomeIcon icon="thumbs-up" /></LikeButton>
            </>
        )
    } else {
        return (
            <>
                <LikeButton onClick={(() => { likePost(message) })}><FontAwesomeIcon icon="thumbs-up" /></LikeButton>
            </>
        )
    }
}


export const MessageComponent = (props) => {
    return (
        <>
            <MessageRoot>
                <MessageHeader>Den {utcToDate(props.message.date)} skrev {props.message.fromEmail}:</MessageHeader>
                <MessageArea>{props.message.messageText}</MessageArea>
                {showLikes(props.message, likePost)} 
                
                {props.message.replies && props.message.replies.map(reply => {
                    return (
                        <>
                            <ReplyHeader> Den { utcToDate(reply.date)} { reply.fromEmail} svarte:</ReplyHeader>
                            <ReplyMessageArea>{reply.messageText}</ReplyMessageArea>
                            <ReplyArea>{showLikes(reply, likeReply)}</ReplyArea>
                        </>
                    )
                })}

            </MessageRoot>
        </>
    )
}

/*

date = new Date('2013-03-10T02:00:00Z');
date.getFullYear()+'-' + (date.getMonth()+1) + '-'+date.getDate();//prints expected format.
*/