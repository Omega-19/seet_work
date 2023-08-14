import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumSearchComponent } from './album-search.component';

describe('AlbumSearchComponent', () => {
  let component: AlbumSearchComponent;
  let fixture: ComponentFixture<AlbumSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumSearchComponent]
    });
    fixture = TestBed.createComponent(AlbumSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
