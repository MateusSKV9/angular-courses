import { Component, computed, OnInit } from '@angular/core';
import { MessageService } from '../../services/message.service';
import { MatButtonModule } from '@angular/material/button';
import { MatAccordion, MatExpansionPanel } from '@angular/material/expansion';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [MatButtonModule, MatAccordion, MatExpansionModule, MatExpansionPanel],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss',
  host: { class: 'class1' },
})
export class MessagesComponent {
  messages: string[] = [];

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.messageService.messages$.subscribe((messages) => {
      this.messages = messages; //
    });
  }

  clearMessage(): void {
    this.messageService.clearMessage();
  }
}
