import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Course } from '../models/course.model';
import { IFiredata } from '../models/IFireData.model';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {
  public courses: Observable<Course[]>;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.courses = this.getCourses('/courses');
  }

  // move to a service that will use interface and return interface
  getCourses(listPath): Observable<IFiredata[]> {
    return this.db.list<IFiredata>(listPath).valueChanges();
  }

}
