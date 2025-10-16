/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Dashboard]Component } from './dashboard].component';

describe('Dashboard]Component', () => {
  let component: Dashboard]Component;
  let fixture: ComponentFixture<Dashboard]Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dashboard]Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dashboard]Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
