import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletePostsComponent } from './delete-posts.component';

describe('DeletePostsComponent', () => {
  let component: DeletePostsComponent;
  let fixture: ComponentFixture<DeletePostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeletePostsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeletePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
