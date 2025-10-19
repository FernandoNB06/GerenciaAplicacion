import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroCompradorComponent } from './registro-comprador.component';

describe('RegistroCompradorComponent', () => {
  let component: RegistroCompradorComponent;
  let fixture: ComponentFixture<RegistroCompradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroCompradorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroCompradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
