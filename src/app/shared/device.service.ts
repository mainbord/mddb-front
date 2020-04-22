import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

export interface Device {
  id: number
  modelName: string
}

@Injectable({providedIn: 'root'})
export class DeviceService {
  public devices: Device[] = [{id: 1, modelName: "name"}];

  constructor(private mddbRestClient: HttpClient) {
  }

  fetchDevices(): void {
    this.mddbRestClient.get<Device[]>('http://localhost:8080/phones')
      .subscribe(x => {
        console.log(x);
             for (const d of x) {
               this.devices.push(d);
             }
      });
  }
}
