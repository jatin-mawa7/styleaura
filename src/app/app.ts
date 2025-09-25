import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import Header from './header/header';
import Footer from './footer/footer';
import { CommonModule } from '@angular/common';
import Home from './home/home';
import { Ourproducts } from './ourproducts/ourproducts';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer, CommonModule, HttpClientModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}
