import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

declare var bootstrap: any;


interface RacaGato {
  nome: string;
  descricao: string;
  imagem: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule], // habilita *ngIf, *ngFor, pipes, etc.
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  racas: RacaGato[] = [
    {
      nome: 'Persa',
      descricao: 'O gato Persa é calmo, carinhoso e muito sociável. Pelagem longa, precisa de escovação frequente e aprecia ambientes tranquilos.',
      imagem: 'https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg'
    },
    {
      nome: 'Siamês',
      descricao: 'O gato Siamês é falante, inteligente e muito apegado ao tutor. Adora interagir e costuma “conversar” com miados característicos.',
      imagem: 'https://www.patasdacasa.com.br/sites/default/files/styles/article_detail_desktop/public/inline-images/siam%C3%AAs%20%282%29_0.jpg.webp?itok=RYOT8TwE'
    },
    {
      nome: 'Maine Coon',
      descricao: 'O Maine Coon é grande, amigável e excelente com crianças. Atlética, essa raça tem pelo médio-longo e costuma ser bem brincalhona.',
      imagem: 'https://www.patasdacasa.com.br/sites/default/files/styles/article_detail_desktop/public/inline-images/maine%20coon%20%285%29_0.jpg.webp?itok=Dn0fw31h'
    },
    {
      nome: 'Frajola',
      descricao: 'O icônico gato de desenho, travesso e carismático. Termo popular para gatos bicolores (preto e branco) com máscara característica.',
      imagem: 'https://www.patasdacasa.com.br/sites/default/files/styles/article_detail_desktop/public/2025-04/gato-frajola.jpg.webp?itok=bndU9fxb'
    }
  ];

  racaSelecionada: RacaGato | null = null;

  selecionarRaca(raca: RacaGato, event?: Event) {
    // impede propagação caso você use clique no card
    if (event) event.stopPropagation();
    this.racaSelecionada = raca;

    // trava a rolagem quando o modal está aberto
    document.body.style.overflow = 'hidden';
  }

  fecharDetalhes(event?: Event) {
    if (event) event.stopPropagation();
    this.racaSelecionada = null;
    document.body.style.overflow = '';
  }

  // fecha pelo ESC
  @HostListener('window:keydown.escape', ['$event'])
  onEsc() {
    if (this.racaSelecionada) {
      this.fecharDetalhes();
    }
  }
    abrirModal(raca: any) {
    this.racaSelecionada = raca;
    const modalEl = document.getElementById('modalRaca');
    if (modalEl) {
      const modal = new bootstrap.Modal(modalEl);
      modal.show();
    }
  }
}
