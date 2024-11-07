import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { FilePicker } from '@capawesome/capacitor-file-picker';
import { AuthService } from '../services/auth.service';
import { LoadingController, ModalController, Platform, ToastController } from '@ionic/angular';
import { BarcodeScanningModalComponent } from './barcode-scanning-modal.component';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular'; 
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-qrscanner',
  templateUrl: './qrscanner.page.html',
  styleUrls: ['./qrscanner.page.scss'],
})
export class QrscannerPage implements OnInit {
  scanResult: string = '';

  constructor(
    private http: HttpClient,
    private loadingController: LoadingController,
    private platform: Platform,
    private modalController: ModalController,
    private authService: AuthService,
    private toastController: ToastController,
    private navCtrl: NavController,
    private alertController: AlertController
  ) { }

  ngOnInit(): void {
    if (this.platform.is('capacitor')) {
      BarcodeScanner.isSupported().then();
      BarcodeScanner.checkPermissions().then();
      BarcodeScanner.removeAllListeners();
    }
  }

  async startScan() {
    const modal = await this.modalController.create({
      component: BarcodeScanningModalComponent,
      cssClass: 'barcode-scanning-modal',
      showBackdrop: false,
      componentProps: { formats: [], lensFacing: 'back' }
    });

    await modal.present();
    const { data } = await modal.onWillDismiss();

    if (data) {
      this.scanResult = data?.barcode?.displayValue;
      if (this.scanResult) {
        this.registrarAsistencia(this.scanResult);
      }
    }
  }

  async readBarcodeFromImage() {
    const { files } = await FilePicker.pickImages({});
    const path = files[0]?.path;
    if (!path) return;

    const { barcodes } = await BarcodeScanner.readBarcodesFromImage({ path, formats: [] });
    this.scanResult = barcodes[0]?.displayValue;
    if (this.scanResult) {
      this.registrarAsistencia(this.scanResult);
    }
  }

  async registrarAsistencia(code: string) {
    const loading = await this.loadingController.create({ message: 'Validando asistencia...', spinner: 'crescent' });
    await loading.present();

    try {
      const token = await this.authService.getToken();
      if (!token) throw new Error('Token no encontrado. Inicia sesión nuevamente.');

      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      });

      await this.http.post(`https://www.presenteprofe.cl/api/v1/clases/${code}/asistencia`, {}, { headers }).toPromise();
      await this.showToast('Asistencia registrada exitosamente');
    } catch (error) {
      await this.showToast('Error al registrar asistencia: ' + ((error as any).message || error));
    } finally {
      await loading.dismiss();
    }
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({ message, duration: 2000, position: 'bottom' });
    toast.present();
  }


  // Esta función se invoca cuando el usuario hace clic en el botón "Cerrar sesión"
  async presentAlert() {
    const alert = await this.alertController.create({
      header: '¿Quieres Salir?',
      message: '¡¡Cerraras tu sesion actual!!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cierre de sesión cancelado');
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            console.log('Cierre de sesión confirmado');
            this.navCtrl.navigateRoot('/home'); // Redirige a la página principal (home)
          }
        }
      ]
    });

    await alert.present(); // Presentamos la alerta
  }
}

