import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorButtonsComponent } from './creator-buttons.component';

describe('CreatorButtonsComponent', () => {
  let component: CreatorButtonsComponent;
  let fixture: ComponentFixture<CreatorButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatorButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
