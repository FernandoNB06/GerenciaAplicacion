import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroArtesanoComponent } from './registro-artesano.component';

describe('RegistroArtesanoComponent', () => {
  let component: RegistroArtesanoComponent;
  let fixture: ComponentFixture<RegistroArtesanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroArtesanoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroArtesanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
