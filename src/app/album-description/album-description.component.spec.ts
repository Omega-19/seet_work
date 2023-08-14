import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumDescriptionComponent } from './album-description.component';

describe('AlbumDescriptionComponent', () => {
  let component: AlbumDescriptionComponent;
  let fixture: ComponentFixture<AlbumDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumDescriptionComponent]
    });
    fixture = TestBed.createComponent(AlbumDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
