import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerComponentsComponent } from './container-components.component';

describe('ContainerComponentsComponent', () => {
  let component: ContainerComponentsComponent;
  let fixture: ComponentFixture<ContainerComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerComponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
