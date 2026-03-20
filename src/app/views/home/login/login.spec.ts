import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Login } from './login';
import { provideRouter } from '@angular/router';

describe('Login', () => {
  let component: Login;
  let fixture: ComponentFixture<Login>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Login], // Al ser standalone, se importa en lugar de declararse
      providers: [provideRouter([])] // Proveemos un enrutador vacío para las pruebas
    }).compileComponents();

    fixture = TestBed.createComponent(Login);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Dispara el ciclo de vida inicial de Angular
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});