import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngulardailyLibsComponent } from './angulardaily-libs.component';

describe('AngulardailyLibsComponent', () => {
  let component: AngulardailyLibsComponent;
  let fixture: ComponentFixture<AngulardailyLibsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngulardailyLibsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngulardailyLibsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
