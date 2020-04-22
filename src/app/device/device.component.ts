import {Component, OnInit} from '@angular/core';
import {DeviceService} from "../shared/device.service";

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  constructor(public deviceService: DeviceService) {}

  ngOnInit(): void {
    this.deviceService.fetchDevices();
  }

}
