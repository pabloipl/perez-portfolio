import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CardComponent } from '../card/card.component';
import { Card } from '../_models/card';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
  providers: []
})
export class PortfolioComponent {

  projects: Card[] = [
    {
      id: 1,
      name: 'Unearth The Unknown',
      summary: 'Unearth The Unknown is a horror-mystery video game developed in Unity with C# as part of a six-day game jam.This project blends suspense and intrigue, offering players a chilling experience as they explore eerie environments and uncover hidden secrets.',
      description: ' Unearth The Unknown is a horror-mystery video game developed in Unity with C# over a six-day game jam, created in collaboration with university classmates and a 3D modeler. The story follows a protagonist who arrives in a haunting town to meet his friends at the cemetery. After a strange incident where he falls into an open grave, he wakes up back at the train station as if nothing happened. Confused and determined to find his friends, he returns to the cemetery only to find it deserted and filled with an oppressive atmosphere.The game invites players to explore the lurking mystery and terror, confronting the blurred lines between reality and illusion as they search for clues to uncover the fate of the protagonist’s friends',
      projectLink: 'https://itch.io/jam/beginners-jam-halloween-2024/rate/3075602',
      pictures: ["../../assets/utu1.png","../../assets/Captura1.png", "../../assets/Captura2.png", "../../assets/Captura3.png", "../../assets/Captura4.png"]
    }

  ]


  constructor(private titleService: Title) {
    this.titleService.setTitle('P.perez | Portfolio')
  }

  trackById(index: number, project: Card): number {
    return project.id;
  }

}
