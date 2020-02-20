import {ChangeDetectorRef, Component, Injectable, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.scss']
})
@Injectable({
    providedIn: 'root'
})
export class NotFoundComponent implements OnInit {

    formSearch: FormGroup;

    constructor(public router: Router, private fb: FormBuilder,
    private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.router.navigate(['/not-exist']);
        // this.createForm();
    }
}
