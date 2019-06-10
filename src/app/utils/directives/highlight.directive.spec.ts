import { HighlightDirective } from './highlight.directive';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `<p appHighlight></p>`
})
class TestComponent {
}

describe('HighlightDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let p: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        HighlightDirective
      ]
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    p = fixture.debugElement.query(By.css('p'));
  });

  it('should create component', () => {
    expect(component).toBeDefined();
  });

  it('should highlight text when hover', () => {
    // const debugEl: HTMLElement = fixture.debugElement.nativeElement;
    // const p: HTMLElement = debugEl.querySelector('p');
    // p.dispatchEvent(new MouseEvent('mouseover'));
    p.triggerEventHandler('mouseover', null);
    fixture.detectChanges();
    expect(p.nativeElement.style.backgroundColor).toBe('yellow');
  });

  it('убрать заливку параграфа при отсутствии наведения мышки', () => {
    p.triggerEventHandler('mouseout', null);
    fixture.detectChanges();
    expect(p.nativeElement.style.backgroundColor).toBe('inherit');
  });
});
