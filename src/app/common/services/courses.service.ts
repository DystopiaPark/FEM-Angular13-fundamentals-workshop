import { Injectable } from '@angular/core';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  courses: Course[] = [
    {
      id: '1',
      title: 'Angular 13 Fundamentals',
      description: 'Learn the fundamentals of Angular 13',
      percentComplete: 5,
      favorite: true,
    },
    {
      id: '2',
      title: 'JavaScript The HARDEST PARTS EVER!',
      description: 'Learn the Javascript like a pro! with Will',
      percentComplete: 42,
      favorite: false,
    },
    {
      id: '3',
      title: 'Rapid Application Development Patterns',
      description: 'THIS MUST BE DONE BY 3:30 OR ELSE! Dont forget!',
      percentComplete: 88,
      favorite: true,
    },
  ];
}