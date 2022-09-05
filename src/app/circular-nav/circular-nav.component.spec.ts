import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CircularNavComponent } from './circular-nav.component';

describe('CircularNavComponent', () => {
  let component: CircularNavComponent;
  let fixture: ComponentFixture<CircularNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CircularNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CircularNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
