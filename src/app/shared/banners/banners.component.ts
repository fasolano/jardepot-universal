import {Component, OnInit, Input, HostListener} from '@angular/core';
import {AppService} from '../../app.service';

@Component({
    selector: 'app-banners',
    templateUrl: './banners.component.html',
    styleUrls: ['./banners.component.scss']
})
export class BannersComponent implements OnInit {

    @Input('banners') banners: Array<any> = [];
    bannerResize: Array<any> = [];
    window;

    constructor(private appService: AppService) {
    }

    ngOnInit() {
        this.window = (typeof window !== 'undefined') ? window : null;
        this.appService.getBanners().subscribe(data => {
            this.banners = data;
            if (this.window) {
                if (this.window.innerWidth < 960) {
                    this.bannerResize[0] = {
                        'background-image': 'url(' + data[0].mobile + ')'
                    };
                    this.bannerResize[1] = {
                        'background-image': 'url(' + data[1].mobile + ')'
                    };
                    this.bannerResize[2] = {
                        'background-image': 'url(' + data[2].mobile + ')'
                    };
                } else {
                    this.bannerResize[0] = {
                        'background-image': 'url(' + data[0].image + ')'
                    };
                    this.bannerResize[1] = {
                        'background-image': 'url(' + data[1].image + ')'
                    };
                    this.bannerResize[2] = {
                        'background-image': 'url(' + data[2].image + ')'
                    };
                }
            }


        });
    }

    @HostListener('window:resize')
    public onWindowResize(): void {
        if (this.window) {
            if (this.window.innerWidth < 960) {
                this.bannerResize[0] = {
                    'background-image': 'url(' + this.banners[0].mobile + ')'
                };
                this.bannerResize[1] = {
                    'background-image': 'url(' + this.banners[1].mobile + ')'
                };
                this.bannerResize[2] = {
                    'background-image': 'url(' + this.banners[2].mobile + ')'
                };
            } else {
                this.bannerResize[0] = {
                    'background-image': 'url(' + this.banners[0].image + ')'
                };
                this.bannerResize[1] = {
                    'background-image': 'url(' + this.banners[1].image + ')'
                };
                this.bannerResize[2] = {
                    'background-image': 'url(' + this.banners[2].image + ')'
                };
            }
        }
    }

    public getBanner(index) {
        return this.banners[index];
    }

    public getBgImage(index) {
        let bgImage;
        if (this.window) {
            if (this.window.innerWidth < 960) {
                bgImage = {
                    'background-image': index != null ? 'url(' + this.banners[index].mobile + ')' : 'url(https://via.placeholder.com/600x400/ff0000/fff/)'
                };
            } else {
                bgImage = {
                    'background-image': index != null ? 'url(' + this.banners[index].image + ')' : 'url(https://via.placeholder.com/600x400/ff0000/fff/)'
                };
            }
        }
        return bgImage;
    }

}
