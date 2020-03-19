import {Component, OnInit, HostListener} from '@angular/core';
import {AppService} from '../../app.service';

@Component({
    selector: 'app-banners',
    templateUrl: './banners.component.html',
    styleUrls: ['./banners.component.scss']
})
export class BannersComponent implements OnInit {

    public banners: Array<any> = [
        {
            'title': 'Jardinería',
            'subtitle': 'Un pasto bien cuidado...<br>Comienza con el equipo adecuado.',
            'image': 'assets/images/productos/Cover/podadora.jpg',
            'mobile': 'assets/images/productos/Cover/podadora-mob.jpg'
        },
        {
            'title': 'Agricultura',
            'subtitle': 'Tu proyecto merece el mejor respaldo.',
            'image': 'assets/images/productos/Cover/motocultor.jpg',
            'mobile': 'assets/images/productos/Cover/motocultor-mob.jpg'
        },
        {
            'title': 'Aspersoras',
            'subtitle': 'Para cuidar tu esfuerzo,<br>es bueno contar con el mejor equipo',
            'image': 'assets/images/productos/Cover/aspersora.jpg',
            'mobile': 'assets/images/productos/Cover/aspersora-mob.jpg'
        }
    ];
    bannerResize: Array<any> = [];
    window;

    constructor(private appService: AppService) {
    }

    ngOnInit() {
        this.window = (typeof window !== 'undefined') ? window : null;
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
