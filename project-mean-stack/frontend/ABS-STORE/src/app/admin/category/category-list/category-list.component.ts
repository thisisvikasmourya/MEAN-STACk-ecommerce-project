import { Component, Input, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/common/service/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  displayedColumns = ['_id', 'categoryName', 'isLive'];

  @Input() categoryList: any;

  

  constructor() { }

  ngOnInit(): void {

  }

}
