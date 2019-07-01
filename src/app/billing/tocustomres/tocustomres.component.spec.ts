import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TocustomresComponent } from './tocustomres.component';

describe('TocustomresComponent', () => {
  let component: TocustomresComponent;
  let fixture: ComponentFixture<TocustomresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TocustomresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TocustomresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
