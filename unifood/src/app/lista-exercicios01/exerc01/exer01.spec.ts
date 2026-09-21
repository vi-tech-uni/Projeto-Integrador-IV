import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exer01 } from './exer01';

describe('Exer01', () => {
  let component: Exer01;
  let fixture: ComponentFixture<Exer01>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Exer01],
    }).compileComponents();

    fixture = TestBed.createComponent(Exer01);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
