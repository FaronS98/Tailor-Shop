import { Component } from '@angular/core';

@Component({
  selector: 'app-tailor-footer',
  templateUrl: './tailor_footer.component.html',
  styleUrls: ['./tailor_footer.component.scss']
})
export class TailorFooterComponent  {

  showLink(){
    alert('Przycisk plik wektorowy utworzone przez macrovector - pl.freepik.com -> https://pl.freepik.com/wektory/przycisk');
    }
}
