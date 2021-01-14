import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegionssComponent } from './regionss.component';

describe('RegionssComponent', () => {
  let component: RegionssComponent;
  let fixture: ComponentFixture<RegionssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegionssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegionssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
