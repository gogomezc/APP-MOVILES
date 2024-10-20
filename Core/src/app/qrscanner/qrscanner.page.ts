import { Component, OnInit } from '@angular/core';
import html2canvas from 'html2canvas';
import { Filesystem, Directory, Encoding } from '@capacitor/filesystem';
import { Share } from '@capacitor/share';
import { LoadingController, ModalController, Platform } from '@ionic/angular';
import { BarcodeScanningModalComponent } from './barcode-scanning-modal.component';
import { LensFacing,BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { FilePicker } from '@capawesome/capacitor-file-picker';

@Component({
  selector: 'app-qrscanner',
  templateUrl: './qrscanner.page.html',
  styleUrls: ['./qrscanner.page.scss'],
})
export class QrscannerPage implements OnInit {

segment = 'generate';
qrText = 'Test'

scanResult='';
  constructor(
    private loadingController: LoadingController,
    private platform: Platform,
    private modalController: ModalController
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

}
