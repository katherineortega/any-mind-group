import { Injectable } from '@angular/core';
import { HttpClientService } from "@clients/http/http-client.service";
import { environment } from "@environments/environment";
import { Observable } from "rxjs";
import { IUser } from "@interfaces/user.interface";
import { IChannel } from "@interfaces/channel.interface";

@Injectable()
export class ChatClientService {
  constructor(private httpClient: HttpClientService) {
  }

  userList(): Observable<Array<IUser>> {
    const endpoint = `${environment.local}user-list.json`
    return this.httpClient.httpGet<Array<IUser>>(endpoint);
  }

  channelList(): Observable<Array<IChannel>> {
    const endpoint = `${environment.local}channel-list.json`
    return this.httpClient.httpGet<Array<IChannel>>(endpoint);
  }


}
