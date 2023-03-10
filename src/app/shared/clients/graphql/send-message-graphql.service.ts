import { Injectable } from '@angular/core';
import { Apollo, MutationResult } from "apollo-angular";
import { IMessage, LatestMessageParams, SendMessageParams } from "@interfaces/message.interface";
import { map, Observable } from "rxjs";
import { MessageSchemas } from "../../schemas/message.schemas";

@Injectable({
  providedIn: 'root'
})
export class SendMessageGraphqlService {


  constructor(
    private apollo: Apollo
  ) {
  }

  postMessage(sendMessageParams: SendMessageParams): Observable<IMessage | null> {
    const latestMessageParams: LatestMessageParams = {channelId: sendMessageParams.channelId};
    const mutation: Observable<MutationResult<{ postMessage: IMessage }>> =
      this.apollo.mutate({
        mutation: MessageSchemas.postMessageMutation,
        variables: sendMessageParams,
        refetchQueries: [
          {
            query: MessageSchemas.fetchLatestMessagesQuery,
            variables: latestMessageParams
          }
        ]
      });
    return mutation
      .pipe(
        map((mutationResult: MutationResult<{ postMessage: IMessage }>) =>
          mutationResult?.data?.postMessage || null)
      );
  }

}
