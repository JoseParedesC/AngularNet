import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEditarcomentarioComponent } from './agregar-editarcomentario.component';

describe('AgregarEditarcomentarioComponent', () => {
  let component: AgregarEditarcomentarioComponent;
  let fixture: ComponentFixture<AgregarEditarcomentarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEditarcomentarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarEditarcomentarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
