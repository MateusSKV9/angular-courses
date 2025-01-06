import { Component } from '@angular/core';
import { Componente01Component } from '../componente01/componente01.component';
import { Componente10Component } from '../componente10/componente10.component';
import { Componente08Component } from '../componente08/componente08.component';
import { Componente06Component } from '../componente06/componente06.component';
import { Componente05Component } from '../componente05/componente05.component';
import { Componente09Component } from '../componente09/componente09.component';
import { Componente07Component } from '../componente07/componente07.component';
import { Componente03Component } from '../componente03/componente03.component';
import { Componente2Component } from '../componente02/componente02.component';
import { Componente04Component } from '../componente04/componente04.component';

@Component({
  selector: 'app-container-components',
  standalone: true,
  imports: [
    Componente01Component,
    Componente10Component,
    Componente08Component,
    Componente06Component,
    Componente05Component,
    Componente09Component,
    Componente07Component,
    Componente03Component,
    Componente2Component,
    Componente04Component,
  ],
  templateUrl: './container-components.component.html',
  styleUrl: './container-components.component.css',
})
export class ContainerComponentsComponent {}
