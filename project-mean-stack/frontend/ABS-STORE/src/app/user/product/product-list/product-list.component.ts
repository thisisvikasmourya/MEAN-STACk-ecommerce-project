import { Component, OnInit , Input} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() productList: any;
  @Input() categoryName: string;
  @Input() productCount: number;
  constructor(private productService: ProductService,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.productService.getAllProducts().subscribe((result)=>{
      this.productList = result.data
    })

  }

}
