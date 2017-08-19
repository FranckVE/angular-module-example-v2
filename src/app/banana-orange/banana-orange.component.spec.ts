import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BananaOrangeComponent } from './banana-orange.component';

describe('BananaOrangeComponent', () => {
  let component: BananaOrangeComponent;
  let fixture: ComponentFixture<BananaOrangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BananaOrangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BananaOrangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
