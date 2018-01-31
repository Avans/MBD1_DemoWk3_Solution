import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-css-components',
  templateUrl: 'css-components.html',
})
export class CssComponentsPage {
  private allCourses: any[];
  courses: any[];
  selectedCourse: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.allCourses = [
      { name: 'MBD1', imageUrl: 'https://ionicframework.com/img/ionic-logo-blog.png', enabled: true, details: 'Mobile development with Ionic' },
      { name: 'MBD2-IOS', imageUrl: 'https://image.flaticon.com/icons/svg/25/25345.svg', enabled: true, details: 'Mobile development with Android' },
      { name: 'MBD2-Android', imageUrl: 'https://cdn1.iconfinder.com/data/icons/simple-icons/4096/android-4096-black.png', enabled: true, details: 'Mobile development with IOS' },
      { name: 'WEBS5', imageUrl: 'https://camo.githubusercontent.com/ae6c148f364589c80069fcf7e853f082e6c6d363/687474703a2f2f6e6f64656a732d636c6f75642e636f6d2f696d672f31323870782f6e6f64656a732e706e67', enabled: true, details: 'Building webservices with NodeJS' },
      { name: 'WEBS6', imageUrl: 'https://material.angularjs.org/1.0.9/img/icons/angular-logo.svg', enabled: false, details: 'Building advanced web applications with Angular 5' }
    ];
    this.courses = this.allCourses;
  }

  filterCourses(event: any) {
    if (!event.target.value) {
      this.courses = this.allCourses;
    } else {
      let search: string = event.target.value.toUpperCase();
      this.courses = this.allCourses.filter(course => {
        return course.name.indexOf(search) >= 0;
      });
    }
  }

  selectCourse(course: any) {
    this.selectedCourse = course;
  }
}
