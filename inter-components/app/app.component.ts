import {Component} from 'angular2/core';
import {HeroParentComponent} from './hero-parent.component';
import {NameParentComponent} from './name-parent.component';
import {VersionParentComponent} from './version-parent.component';
import {VoteTakerComponent} from './votetaker.component';
import {CountdownLocalVarParentComponent,
        CountdownViewChildParentComponent} from './countdown-parent.component';
import {MissionControlComponent} from './missioncontrol.component';

@Component({
  selector: 'app',
  templateUrl: 'app/app.component.html',
  directives: [
    HeroParentComponent,
    NameParentComponent,
    VersionParentComponent,
    VoteTakerComponent,
    CountdownLocalVarParentComponent,
    CountdownViewChildParentComponent,
    MissionControlComponent
  ]
})
export class AppComponent { }


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/