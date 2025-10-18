import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtesanosComponent } from './artesanos.component';

describe('ArtesanosComponent', () => {
  let component: ArtesanosComponent;
  let fixture: ComponentFixture<ArtesanosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtesanosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtesanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
