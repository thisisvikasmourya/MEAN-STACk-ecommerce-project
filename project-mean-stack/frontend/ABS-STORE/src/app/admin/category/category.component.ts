import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../common/service/category.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  cartList: any;
  constructor(private categoryService: CategoryService,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
   this.loadCategories();
  }

  loadCategories() {
    this.categoryService.getCategories().subscribe((result) => {
      if (result.status === 'success') {
        this.cartList = result.data;
      }
    });
  }

  saveCategories(category: any) {
    this.categoryService.postCategories(category).subscribe((result) => {
      this.snackBar.open(result.message, 'Category', {
        duration: 1000
      });
      this.loadCategories();
    });
  }
 

}