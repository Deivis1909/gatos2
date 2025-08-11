import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface RacaGato {
  nome: string;
  descricao: string;
  imagem: string;
}

@Component({
  selector: 'app-root',
  standalone: true, // 👈 ESSA LINHA É OBRIGATÓRIA NO MODO STANDALONE
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  racas: RacaGato[] = [
    {
      nome: 'Persa',
      descricao: 'O gato Persa é calmo, carinhoso e muito sociável.',
      imagem: 'https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg'
    },
    {
      nome: 'Siamês',
      descricao: 'O gato Siamês é falante, inteligente e muito apegado ao tutor.',
      imagem: 'https://www.patasdacasa.com.br/sites/default/files/styles/article_detail_desktop/public/inline-images/siam%C3%AAs%20%282%29_0.jpg.webp?itok=RYOT8TwE'
    },
    {
      nome: 'Maine Coon',
      descricao: 'O Maine Coon é grande, amigável e excelente com crianças.',
      imagem: 'https://www.patasdacasa.com.br/sites/default/files/styles/article_detail_desktop/public/inline-images/maine%20coon%20%285%29_0.jpg.webp?itok=Dn0fw31h'
    },
    {
      nome: 'Frajola',
      descricao: 'O icônico gato de desenho, travesso e carismático.',
      imagem: 'https://www.patasdacasa.com.br/sites/default/files/styles/article_detail_desktop/public/2025-04/gato-frajola.jpg.webp?itok=bndU9fxb' // você pode substituir por outro link de sua preferência
    }
  ];

  racaSelecionada: RacaGato | null = null;

  selecionarRaca(raca: RacaGato) {
    this.racaSelecionada = raca;
  }

  fecharDetalhes() {
    this.racaSelecionada = null;
  }
}
