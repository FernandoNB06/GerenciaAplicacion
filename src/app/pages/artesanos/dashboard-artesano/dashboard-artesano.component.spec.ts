import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardArtesanoComponent } from './dashboard-artesano.component';

describe('DashboardArtesanoComponent', () => {
  let component: DashboardArtesanoComponent;
  let fixture: ComponentFixture<DashboardArtesanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardArtesanoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardArtesanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
