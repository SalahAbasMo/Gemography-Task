import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubTrendingComponent } from './github-trending.component';

describe('GithubTrendingComponent', () => {
  let component: GithubTrendingComponent;
  let fixture: ComponentFixture<GithubTrendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubTrendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubTrendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
