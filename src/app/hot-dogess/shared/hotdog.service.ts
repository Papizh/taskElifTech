import {Injectable} from '@angular/core';

import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {Hotdog} from './hotdog.model';

@Injectable()
export class HotdogService {
    hotdogsList: AngularFireList<any>;
    selectedHotdog: Hotdog = new Hotdog();

    constructor(private firebase: AngularFireDatabase) {
    }

    getData() {
        this.hotdogsList = this.firebase.list('hotdogess');
        return this.hotdogsList;
    }

    insertEmployee(hotdog: Hotdog) {
        this.hotdogsList.push({
            name: hotdog.name,
            typeH: hotdog.typeH,
            weight: hotdog.weight,
        });
    }

    updateEmployee(hotdog: Hotdog) {
        this.hotdogsList.update(hotdog.$key,
            {
                name: hotdog.name,
                typeH: hotdog.typeH,
                weight: hotdog.weight,
            });
    }

    deleteEmployee($key: string) {
        this.hotdogsList.remove($key);
    }

}
