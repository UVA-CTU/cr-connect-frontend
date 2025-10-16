import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternateMessageComponent } from './alternate-message.component';

describe('AlternateMessageComponent', () => {
  let component: AlternateMessageComponent;
  let fixture: ComponentFixture<AlternateMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlternateMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlternateMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
