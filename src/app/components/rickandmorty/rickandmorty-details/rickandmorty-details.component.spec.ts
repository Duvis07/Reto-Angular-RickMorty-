import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RickandmortyDetailsComponent } from './rickandmorty-details.component';

describe('RickandmortyDetailsComponent', () => {
  let component: RickandmortyDetailsComponent;
  let fixture: ComponentFixture<RickandmortyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RickandmortyDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RickandmortyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
