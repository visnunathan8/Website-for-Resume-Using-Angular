import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectModalContentComponent } from './project-modal-content.component';

describe('ProjectModalContentComponent', () => {
  let component: ProjectModalContentComponent;
  let fixture: ComponentFixture<ProjectModalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectModalContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
