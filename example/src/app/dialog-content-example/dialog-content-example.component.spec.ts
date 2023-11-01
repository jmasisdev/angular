import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogContentExampleComponent } from './dialog-content-example.component';

describe('DialogContentExampleComponent', () => {
  let component: DialogContentExampleComponent;
  let fixture: ComponentFixture<DialogContentExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogContentExampleComponent]
    });
    fixture = TestBed.createComponent(DialogContentExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
