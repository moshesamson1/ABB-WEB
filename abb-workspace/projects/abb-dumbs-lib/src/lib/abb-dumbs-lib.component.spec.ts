import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbbDumbsLibComponent } from './abb-dumbs-lib.component';

describe('AbbDumbsLibComponent', () => {
  let component: AbbDumbsLibComponent;
  let fixture: ComponentFixture<AbbDumbsLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbbDumbsLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbbDumbsLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
