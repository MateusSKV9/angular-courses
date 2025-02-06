import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroDatailComponent } from './hero-datail.component';

describe('HeroDatailComponent', () => {
  let component: HeroDatailComponent;
  let fixture: ComponentFixture<HeroDatailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroDatailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroDatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
