import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

import {HotdogService} from '../shared/hotdog.service';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-hotdog',
    templateUrl: './hotdog.component.html',
    styleUrls: ['./hotdog.component.css']
})
export class HotdogComponent implements OnInit {

    constructor(public hotdogService: HotdogService, public tostr: ToastrService) {
    }

    ngOnInit() {

        this.resetForm();
    }

    onSubmit(hotdogForm: NgForm) {
        if (hotdogForm.value.$key == null) {
            this.hotdogService.insertEmployee(hotdogForm.value);
        } else {
            this.hotdogService.updateEmployee(hotdogForm.value);
        }
        this.resetForm(hotdogForm);
        this.tostr.success('Submitted Successfully', 'Hot-dog created');
    }

    resetForm(hotdogForm?: NgForm) {
        if (hotdogForm != null) {
            hotdogForm.reset();
        }
        this.hotdogService.selectedHotdog = {
            $key: null,
            name: '',
            typeH: '',
            weight: '',
        };
    }
}
