import { Component, OnInit, NgZone } from '@angular/core';
import { BLE} from "@ionic-native/ble/ngx";

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  /*private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];*/

  //public devices: Array<{name: string, id: string, rssi: string}> = [];
  devices: any[] = [];

  constructor(private ble: BLE, private ngZone: NgZone ) {
    /*for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }*/
  }

  ngOnInit() {
  }

  Scan() {
    this.devices = [];
    this.ble.scan([], 15).subscribe(
        device => this.onDeviceDiscovered(device)
    );
  }

  onDeviceDiscovered(device) {
    console.log('Discovered: ' + JSON.stringify(device));
    this.ngZone.run(()=>{
      this.devices.push(device);
      console.log(device);
    })
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
