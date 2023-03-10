import { gql } from "apollo-angular";
import { TypedDocumentNode } from "@apollo/client/core";
import { IMessage, LatestMessageParams, MoreMessageParams } from "@interfaces/message.interface";

export class MessageSchemas {

  public static fetchLatestMessagesQuery: TypedDocumentNode<{ fetchLatestMessages: IMessage[] }, LatestMessageParams> = gql`
              query fetchLatestMessages($channelId: String!) {
                fetchLatestMessages(channelId: $channelId) {
                  messageId
                  text
                  datetime
                  userId
                }
              }`;

  public static MessagesFetchLatestQuery: TypedDocumentNode<{ MessagesFetchLatest: IMessage[] }, LatestMessageParams> = gql`
              query MessagesFetchLatest($channelId: ChannelId!) {
                MessagesFetchLatest(channelId: $channelId) {
                  messageId
                  text
                  datetime
                  userId
                }
              }`;

  public static fetchMoreMessagesQuery: TypedDocumentNode<{ fetchMoreMessages: IMessage[] }, MoreMessageParams> = gql`
              query fetchMoreMessages($channelId: String!, $messageId: String!, $old: Boolean!) {
                fetchMoreMessages(channelId: $channelId, messageId: $messageId, old: $old) {
                  messageId
                  text
                  datetime
                  userId
                }
              }`;

  public static MessagesFetchMoreQuery: TypedDocumentNode<{ MessagesFetchMore: IMessage[] }, MoreMessageParams> = gql`
              query MessagesFetchMore($channelId: ChannelId!, $messageId: String!, $old: Boolean!) {
                MessagesFetchMore(channelId: $channelId, messageId: $messageId, old: $old) {
                  messageId
                  text
                  datetime
                  userId
                }
              }`;

  public static postMessageMutation: TypedDocumentNode<{ postMessage: IMessage }> = gql`
                mutation postMessage($channelId: String!, $text: String!, $userId: String!) {
                  postMessage(channelId: $channelId, text: $text, userId: $userId) {
                    messageId
                    text
                    datetime
                    userId
                  }
                }`;

  public static MessagePostMutation: TypedDocumentNode<{ postMessage: IMessage }> = gql`
                mutation MessagePost($channelId: ChannelId!, $text: String!, $userId: UserId!) {
                  MessagePost(channelId: $channelId, text: $text, userId: $userId) {
                    messageId
                    text
                    datetime
                    userId
                  }
                }`;
}
