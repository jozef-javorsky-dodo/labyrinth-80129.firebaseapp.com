import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HtmlBodyHeaderComponent } from "./html-body-header.component";
import { MatDividerModule } from "@angular/material/divider";
import { MatProgressBarModule } from "@angular/material/progress-bar";



describe(<string>"HtmlBodyHeaderComponent", () => {

  let component: HtmlBodyHeaderComponent;
  let fixture: ComponentFixture<HtmlBodyHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HtmlBodyHeaderComponent],
      imports: [
        MatDividerModule,
        MatProgressBarModule
      ]
    });
    fixture = TestBed.createComponent(HtmlBodyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(<string>"should create", () => {
    expect(component).toBeTruthy();
  });
});