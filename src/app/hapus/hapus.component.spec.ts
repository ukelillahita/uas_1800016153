import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HapusComponent } from './hapus.component';

describe('HapusComponent', () => {
  let component: HapusComponent;
  let fixture: ComponentFixture<HapusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HapusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HapusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
