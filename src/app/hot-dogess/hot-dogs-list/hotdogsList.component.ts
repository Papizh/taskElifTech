import {Component, OnInit} from '@angular/core';

import {HotdogService} from '../shared/hotdog.service';
import {Hotdog} from '../shared/hotdog.model';
import {ToastrService} from 'ngx-toastr';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-hotdogsList',
    templateUrl: './hotdogsList.component.html',
    styleUrls: ['./hotdogsList.component.css']
})

export class HotdogsListComponent implements OnInit {
    hotdogsList: Hotdog[];

    constructor(private hotdogService: HotdogService, private tostr: ToastrService) {
    }

    ngOnInit() {
        const x = this.hotdogService.getData();
        x.snapshotChanges().subscribe(item => {
            this.hotdogsList = [];
            item.forEach(element => {
                const y = element.payload.toJSON();
                y['$key'] = element.key;
                this.hotdogsList.push(y as Hotdog);
            });
        });
    }

    onEdit(hotdog: Hotdog) {
        this.hotdogService.selectedHotdog = Object.assign({}, hotdog);
    }

    onDelete(key: string) {
        if (confirm('Are you sure you would like to delete this record ?') === true) {
            this.hotdogService.deleteEmployee(key);
            this.tostr.warning('Deleted Successfully', 'HotDogs deleted');
        }
    }

}
