import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetails } from '../product-details';

 
@Component({
  selector: 'app-ourproducts',
  imports: [CommonModule],
  // providers: [ProductDetails],
  templateUrl: './ourproducts.html',
  standalone: true,
  styleUrl: './ourproducts.css',
})
export class Ourproducts implements OnInit {
  filteredProducts: any[] = [];
  selectedCategory: any[] = [];
  constructor(private pdservice: ProductDetails) {}
  ngOnInit(): void {
    this.pdservice.getProducts().subscribe((data) => {
    this.filteredProducts = data.products;
    this.selectedCategory = data.products;
  });
}
  filterProducts(category: String) {
    if (category === 'all') {
      this.filteredProducts = this.selectedCategory;
    } else if (category === 'Best Seller') {
      this.filteredProducts = this.selectedCategory.filter((p) => p.rating > 4);
    } 
    else {
      this.filteredProducts = this.selectedCategory.filter((p) => p.category === category);
    }
  }
}
 
 