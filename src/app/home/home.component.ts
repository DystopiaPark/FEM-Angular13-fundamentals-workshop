import { Component, OnInit } from '@angular/core';
import { LessonsService } from '../common/services/lessons.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  lessons = [];
  selectedLesson = null;

  constructor(private lessonsService: LessonsService) {
    this.lessons = this.lessonsService.lessons;
  }

  ngOnInit() {}

  selectLesson(lesson) {
    this.selectedLesson = lesson;
  }
}
