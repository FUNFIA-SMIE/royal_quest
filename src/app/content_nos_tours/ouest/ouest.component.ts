import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ouest',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ouest.component.html',
  styleUrl: './ouest.component.scss'
})
export class OuestComponent {
  slides = [
    [
      '/Pangalanes/Pangalane1.jpg',
      '/Pangalanes/Pangalane2.jpg',
      '/Pangalanes/Pangalane3.jpg'
    ],
    [
      '/Pangalanes/Pangalane5.jpg',
      '/Pangalanes/Pangalane6.jpg',
      '/Pangalanes/Pangalane1.jpg'
    ]
  ];
}
