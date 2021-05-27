import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablapartidosComponent } from './tablapartidos.component';

describe('TablapartidosComponent', () => {
  let component: TablapartidosComponent;
  let fixture: ComponentFixture<TablapartidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablapartidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablapartidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
