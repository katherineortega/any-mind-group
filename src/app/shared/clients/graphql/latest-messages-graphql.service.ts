import { Injectable } from '@angular/core';
import { Apollo, QueryRef } from "apollo-angular";
import { IMessage, LatestMessageParams } from "@interfaces/message.interface";
import { map, Observable } from "rxjs";
import { ApolloQueryResult } from "@apollo/client/core";
import { MessageSchemas } from "../../schemas/message.schemas";

@Injectable()
export class LatestMessagesGraphqlService {
  private latestMessagesQueryRef: QueryRef<{ fetchLatestMessages: IMessage[]; }, LatestMessageParams> | undefined;

  constructor(
    private apollo: Apollo
  ) {
  }

  latestMessages(latestMessageParams: LatestMessageParams): Observable<IMessage[]> {
    this.latestMessagesQueryRef =
      this.apollo.watchQuery({
        query: MessageSchemas.fetchLatestMessagesQuery,
        variables: latestMessageParams
      })
    return this.latestMessagesQueryRef
      .valueChanges
      .pipe(
        map((queryResult: ApolloQueryResult<{ fetchLatestMessages: IMessage[] }>) =>
          queryResult.data.fetchLatestMessages)
      );
  }

  refetchLatestMessages(latestMessageParams: LatestMessageParams) {
    this.latestMessagesQueryRef?.refetch(latestMessageParams)
  }
}
