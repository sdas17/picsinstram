import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicsstgramComponent } from './picsstgram.component';

describe('PicsstgramComponent', () => {
  let component: PicsstgramComponent;
  let fixture: ComponentFixture<PicsstgramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PicsstgramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PicsstgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
