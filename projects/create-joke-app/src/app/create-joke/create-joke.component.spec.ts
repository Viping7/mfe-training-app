import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJokeComponent } from './create-joke.component';

describe('CreateJokeComponent', () => {
  let component: CreateJokeComponent;
  let fixture: ComponentFixture<CreateJokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateJokeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateJokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
