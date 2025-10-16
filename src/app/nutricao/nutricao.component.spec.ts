/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NutricaoComponent } from './nutricao.component';

describe('NutricaoComponent', () => {
  let component: NutricaoComponent;
  let fixture: ComponentFixture<NutricaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutricaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutricaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
