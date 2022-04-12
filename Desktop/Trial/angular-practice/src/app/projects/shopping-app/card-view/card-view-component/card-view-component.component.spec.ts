import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardViewComponentComponent } from './card-view-component.component';

describe('CardViewComponentComponent', () => {
  let component: CardViewComponentComponent;
  let fixture: ComponentFixture<CardViewComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardViewComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardViewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
