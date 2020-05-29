import {Injectable} from "@angular/core";
import {HttpClient, HttpParams} from "@angular/common/http";

export interface Device {
  id: number
  modelName: string
}

@Injectable({providedIn: 'root'})
export class DeviceService {
  public devices: Device[] = [{id: 1, modelName: "name"}];

  constructor(private mddbRestClient: HttpClient) {
  }

  //TODO hard code pagination
  params = new HttpParams().set('pageNumber', "0")
    .set('pageSize', "3");

  fetchDevices(): void {
    this.mddbRestClient.get<Device[]>('http://localhost:8080/phones?pageNumber=2&pageSize=3', { params: this.params })
      .subscribe(x => {
        // console.log(x);
             for (const d of x) {
               this.devices.push(d);
             }
      });
  }
}
