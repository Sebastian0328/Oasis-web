import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavOasisComponent } from './nav-oasis.component';

describe('NavOasisComponent', () => {
  let component: NavOasisComponent;
  let fixture: ComponentFixture<NavOasisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavOasisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavOasisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
