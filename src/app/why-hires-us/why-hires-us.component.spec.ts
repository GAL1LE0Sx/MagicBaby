/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WhyHiresUsComponent } from './why-hires-us.component';

describe('WhyHiresUsComponent', () => {
  let component: WhyHiresUsComponent;
  let fixture: ComponentFixture<WhyHiresUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyHiresUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyHiresUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
