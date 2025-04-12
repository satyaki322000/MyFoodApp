import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotFoundComponent } from './not-found.component';

describe('MotFoundComponent', () => {
  let component: MotFoundComponent;
  let fixture: ComponentFixture<MotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MotFoundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
