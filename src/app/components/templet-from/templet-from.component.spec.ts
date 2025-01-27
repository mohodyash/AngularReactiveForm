import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempletFromComponent } from './templet-from.component';

describe('TempletFromComponent', () => {
  let component: TempletFromComponent;
  let fixture: ComponentFixture<TempletFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempletFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempletFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
