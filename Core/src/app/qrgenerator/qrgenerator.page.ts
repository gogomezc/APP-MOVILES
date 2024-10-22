import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import html2canvas from 'html2canvas';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Share } from '@capacitor/share';
import { LoadingController, Platform, NavController } from '@ionic/angular';

@Component({
  selector: 'app-qrgenerator',
  templateUrl: './qrgenerator.page.html',
  styleUrls: ['./qrgenerator.page.scss'],
})
export class QrgeneratorPage {
  qrText: string = '';

  constructor(
    private route: ActivatedRoute,
    private loadingController: LoadingController,
    private platform: Platform,
    private navController: NavController,
  ) { }

  ngOnInit() {
    // Obtener el código web de la URL
    this.qrText = this.route.snapshot.paramMap.get('codigo_web') || '';
  }

  captureScreen() {
    const element = document.getElementById('qrImage') as HTMLElement;
    html2canvas(element).then((canvas: HTMLCanvasElement) => {
      if (this.platform.is('capacitor')) this.shareImage(canvas);
      else this.downloadImage(canvas);
    });
  }

  downloadImage(canvas: HTMLCanvasElement) {
    const link = document.createElement('a');
    link.href = canvas.toDataURL();
    link.download = 'qr.png';
    link.click();
  }

  async shareImage(canvas: HTMLCanvasElement) {
    let base64 = canvas.toDataURL();
    let path = 'qr.png';
    const loading = await this.loadingController.create({ spinner: 'crescent' });
    await loading.present();

    await Filesystem.writeFile({ path, data: base64, directory: Directory.Cache }).then(async (res) => {
      let uri = res.uri;
      await Share.share({ url: uri });
      await Filesystem.deleteFile({ path, directory: Directory.Cache });
    }).finally(() => {
      loading.dismiss();
    });
  }
  goBack() {
    this.navController.pop(); // Retrocede a la página anterior
  }
}
