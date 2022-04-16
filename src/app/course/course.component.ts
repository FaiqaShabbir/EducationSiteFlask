import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  course = [
    {'id':1, 'name':'Learn Angular', 'description':'Sed ullamcorper, nulla sed cursus scelerisque, tortor ipsum ullamcorper sapien, eu molestie lacus felis nec sapien. Curabitur aliquam, quam porta aliquam facilisis, nibh urna pulvinar sapien, quis euismod mi turpis eget dolor. Aliquam eget est id ex auctor suscipit luctus sit amet justo. Quisque finibus sagittis tempus. Fusce arcu augue.', 'image':'../../assets/angular.jpg'},
    {'id':2, 'name':'Learn Typescript', 'description':'Maecenas quis sem vitae felis pharetra cursus. Sed consectetur turpis eu lorem tincidunt aliquet. Nullam ut dolor ac nulla semper iaculis eu in metus. Sed rutrum, libero sed feugiat porttitor, metus tortor varius nibh, eu eleifend elit odio ac risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam a nunc porttitor.', 'image':'../../assets/typescript.jpg'},
    {'id':3, 'name':'Learn Nodejs', 'description':'Morbi interdum semper lorem, non gravida ligula accumsan iaculis. Curabitur id risus tempor, cursus urna ut, imperdiet tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Praesent in ex eu ipsum aliquet maximus. Curabitur lacus diam, vehicula id eros at, tristique pretium diam. Vestibulum viverra.', 'image':'../../assets/nodejs.jpg'},
    {'id':4, 'name':'Learn Reactjs', 'description':'Nam sapien felis, laoreet non feugiat et, imperdiet quis arcu. Maecenas vitae gravida risus, at aliquet dolor. Integer ultricies lacus diam, et maximus elit congue eget. Nullam id justo vitae est pellentesque consectetur sit amet et orci. Suspendisse odio dolor, malesuada quis condimentum id, aliquam sed sapien.', 'image':'../../assets/reactjs.jpg'}
  ]

}
