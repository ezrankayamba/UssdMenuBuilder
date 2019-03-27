import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuFormPage } from './menu-form.page';

describe('MenuFormPage', () => {
  let component: MenuFormPage;
  let fixture: ComponentFixture<MenuFormPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuFormPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
