import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnPage } from './own.page';

describe('OwnPage', () => {
  let component: OwnPage;
  let fixture: ComponentFixture<OwnPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
