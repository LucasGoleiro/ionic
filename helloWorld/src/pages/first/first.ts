import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FirstPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-first',
  templateUrl: 'first.html',
})
export class FirstPage {
  pessoas:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pessoas = [
      {nome: 'Lucas', idade: 25},
      {nome: 'Carla', idade: 35},
      {nome: 'Ana', idade: 12}
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstPage');
  }

}
