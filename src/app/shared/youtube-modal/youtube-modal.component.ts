import {Component, Input, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';
import {Product} from "../../app.models";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube-modal',
  templateUrl: './youtube-modal.component.html',
  styleUrls: ['./youtube-modal.component.scss']
})
export class YoutubeModalComponent implements OnInit {

  _ref:any;
  //@Input('product') product: Product = null;
  public product: Product;
  public url;

  constructor(public dialogRef: MatDialogRef<YoutubeModalComponent>, private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.url = this._sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.product.video}`);
  }

  public removeObject(){
    this._ref.destroy();
  }

  public close(): void {
    this.dialogRef.close();
  }

}
