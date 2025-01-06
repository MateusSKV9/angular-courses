import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExemploComponentComponent } from './exemplo-component.component';

describe('ExemploComponentComponent', () => {
  let component: ExemploComponentComponent;
  let fixture: ComponentFixture<ExemploComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExemploComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExemploComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
