/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SaberMaisComponent } from './saber-mais.component';

describe('SaberMaisComponent', () => {
  let component: SaberMaisComponent;
  let fixture: ComponentFixture<SaberMaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaberMaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaberMaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
