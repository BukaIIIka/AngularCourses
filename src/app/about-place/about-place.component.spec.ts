import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPlaceComponent } from './about-place.component';

describe('AboutPlaceComponent', () => {
  let component: AboutPlaceComponent;
  let fixture: ComponentFixture<AboutPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
