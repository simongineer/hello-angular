import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WantsComponent } from './wants.component';

describe('WantsComponent', () => {
  let component: WantsComponent;
  let fixture: ComponentFixture<WantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
