import { Injectable } from '@angular/core';
import { Apollo, QueryRef } from "apollo-angular";
import { IMessage, MoreMessageParams } from "@interfaces/message.interface";
import { map, Observable } from "rxjs";
import { ApolloQueryResult } from "@apollo/client/core";
import { MessageSchemas } from "../../schemas/message.schemas";

@Injectable()
export class MoreMessagesGraphqlService {
  private moreMessagesQueryRef: QueryRef<{ fetchMoreMessages: IMessage[]; }, MoreMessageParams> | undefined;

  constructor(
    private apollo: Apollo
  ) {
  }

  fetchMoreMessages(moreMessageParams: MoreMessageParams): Observable<IMessage[]> {
    this.moreMessagesQueryRef =
      this.apollo.watchQuery({
        query: MessageSchemas.fetchMoreMessagesQuery,
        variables: moreMessageParams
      })
    return this.moreMessagesQueryRef
      .valueChanges
      .pipe(
        map((queryResult: ApolloQueryResult<{ fetchMoreMessages: IMessage[] }>) =>
          queryResult?.data?.fetchMoreMessages)
      );
  }

  refetchMoreMessages(moreMessageParams: MoreMessageParams) {
    this.moreMessagesQueryRef?.refetch(moreMessageParams)
  }

}
