import {Component, OnInit} from '@angular/core';

import {HotdogService} from './shared/hotdog.service';

@Component({
    selector: 'app-hotdogess',
    templateUrl: './hot-dogess.component.html',
    styleUrls: ['./hot-dogess.component.css'],
    providers: [HotdogService]
})
export class HotDogessComponent implements OnInit {

    constructor(private hotdogService: HotdogService) {
    }

    ngOnInit() {
    }

}
