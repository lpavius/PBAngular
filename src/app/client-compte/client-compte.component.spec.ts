import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCompteComponent } from './client-compte.component';

describe('ClientCompteComponent', () => {
  let component: ClientCompteComponent;
  let fixture: ComponentFixture<ClientCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientCompteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
