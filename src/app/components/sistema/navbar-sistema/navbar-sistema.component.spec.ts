import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSistemaComponent } from './navbar-sistema.component';

describe('NavbarSistemaComponent', () => {
  let component: NavbarSistemaComponent;
  let fixture: ComponentFixture<NavbarSistemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarSistemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
