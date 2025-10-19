import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilArtesanoComponent } from './perfil-artesano.component';

describe('PerfilArtesanoComponent', () => {
  let component: PerfilArtesanoComponent;
  let fixture: ComponentFixture<PerfilArtesanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfilArtesanoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilArtesanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
