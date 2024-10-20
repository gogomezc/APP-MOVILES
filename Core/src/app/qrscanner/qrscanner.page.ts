import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { Share } from '@capacitor/share';
import { LoadingController, ModalController, Platform, ToastController } from '@ionic/angular';
import { BarcodeScanningModalComponent } from './barcode-scanning-modal.component';
import { LensFacing,BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { FilePicker } from '@capawesome/capacitor-file-picker';
import { AuthService } from '../services/auth.service'; // Asegúrate de importar el servicio de autenticación
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-qrscanner',
  templateUrl: './qrscanner.page.html',
  styleUrls: ['./qrscanner.page.scss'],
})
export class QrscannerPage implements OnInit {

segment = 'generate';
qrText = 'v8tjkA'
apiUrl= 'https://www.presenteprofe.cl/api/v1/clases/'; // Endpoint base

scanResult='';
  constructor(
    private http: HttpClient, // Inyectar el servicio HTTP
    private loadingController: LoadingController,
    private platform: Platform,
    private modalController: ModalController,
    private authService: AuthService, 
    private toastController: ToastController // Para mostrar notificaciones // Inyectar servicio de autenticación
  ) { }

  ngOnInit():void {
// ========================Permisos Cámara si es celular  ========================
    if(this.platform.is('capacitor')){
      BarcodeScanner.isSupported().then;
      BarcodeScanner.checkPermissions().then;
      BarcodeScanner.removeAllListeners();

    }

    
  }


  // ========================Leer QR Desde IMG y guardar resultado en scanResult  ========================
async readBarcodeFromImage(){
    const {files} = await FilePicker.pickImages({});
    const path=files[0]?.path;
    if(!path) return;
    const {barcodes} = await BarcodeScanner.readBarcodesFromImage({
      path,
      formats:[]
    })
    this.scanResult= barcodes[0]?.displayValue;
    if(this.scanResult){
      this.registrarAsistencia(this.scanResult);
    }
}
  
// ======================== Scan QR por cámara y guardar resultado en scanResult  ========================
async startScan() {
  const modal = await this.modalController.create({
  component: BarcodeScanningModalComponent,
  cssClass: 'barcode-scanning-modal',
  showBackdrop: false,
  componentProps: { 
    formats: [],
    lensFacing:LensFacing.Back
   }
  });

  await modal.present();

  const { data } = await modal.onWillDismiss();
  if (data){
    this.scanResult= data?.barcode?.displayValue;
    if(this.scanResult){
      this.registrarAsistencia(this.scanResult);
    }
 
  }

}


// Método para registrar asistencia usando el código escaneado

async registrarAsistencia(code: string) {
  // Mostrar un loading spinner
  const loading = await this.loadingController.create({
    message: 'Validando asistencia...',
    spinner: 'crescent',
  });
  await loading.present();

  try {
    // Obtener el token almacenado
    const token = await this.authService.getToken();
    if (!token) {
      throw new Error('Token no encontrado. Inicia sesión nuevamente.');
    }

    // Crear headers para la solicitud POST
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,  // Incluir el token de autenticación
      'Content-Type': 'application/json',
    });

    // Realizar la solicitud POST
    const response = await this.http.post(
      `${this.apiUrl}${code}/asistencia`,  // URL con el código escaneado
      {},  // Cuerpo vacío porque no se requiere enviar datos adicionales
      { headers }
    ).toPromise();

    // Notificación de éxito
    await this.showToast('Asistencia registrada exitosamente');
  } catch (error) {
    // Manejo de errores
    await this.showToast('Error al registrar asistencia: ' + ((error as any).message || error));
  } finally {
    // Ocultar el spinner
    await loading.dismiss();
  }
}


// ======================== Pantallazo imagen  ========================
captureScreen() {
  const element= document.getElementById('qrImage') as HTMLElement;
  html2canvas(element).then ((canvas: HTMLCanvasElement) => {
    if(this.platform.is('capacitor')) this.shareImage(canvas);
    else this.downloadImage(canvas);

  })
}

// ======================== Descargar imagen (Web) ========================
downloadImage(canvas: HTMLCanvasElement){
  const link= document.createElement('a');
  link.href= canvas.toDataURL();
  link.download= 'qr.png';
  link.click();

}
// ======================== Compartir imagen (Movil) ========================
async shareImage(canvas: HTMLCanvasElement){ 
  let base64= canvas.toDataURL();
  let path= 'qr.png';


    const loading = await this.loadingController.create({spinner: 'crescent'});
    await loading.present();



  await Filesystem.writeFile({
    path,
    data: base64,
    directory: Directory.Cache
  }).then(async(res) => {
    
    let uri= res.uri;
await Share.share({url: uri});  
await Filesystem.deleteFile({
  path,
  directory: Directory.Cache
})
  }).finally(() =>{
    loading.dismiss();
  })


}

// Método para mostrar un toast (mensaje) en pantalla
async showToast(message: string) {
  const toast = await this.toastController.create({
    message,
    duration: 2000,
    position: 'bottom',
  });
  toast.present();
}

}
