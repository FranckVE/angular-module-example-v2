import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CherryChocolateComponent } from './cherry-chocolate.component';

describe('CherryChocolateComponent', () => {
  let component: CherryChocolateComponent;
  let fixture: ComponentFixture<CherryChocolateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CherryChocolateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CherryChocolateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
