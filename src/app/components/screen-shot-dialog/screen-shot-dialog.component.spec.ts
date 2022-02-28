import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenShotDialogComponent } from './screen-shot-dialog.component';

describe('ScreenShotDialogComponent', () => {
  let component: ScreenShotDialogComponent;
  let fixture: ComponentFixture<ScreenShotDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenShotDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenShotDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
