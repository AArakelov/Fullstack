import {Component, OnInit} from '@angular/core';
import {CategoriesServoces} from '../shared/services/categories.services';
import {Category} from "../shared/interfaces";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  loading = false;
  categories: Category[] = [];

  constructor(private categoriesService: CategoriesServoces) {
  }

  ngOnInit() {
    this.loading = true
    this.categoriesService.fetch().subscribe(cat => {
      this.loading = false
      this.categories = cat
      console.log('category', cat);
    });
  }

}
