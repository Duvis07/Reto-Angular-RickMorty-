import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickandmortyListComponent } from './rickandmorty-list.component';

describe('RickandmortyListComponent', () => {
  let component: RickandmortyListComponent;
  let fixture: ComponentFixture<RickandmortyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RickandmortyListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RickandmortyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
