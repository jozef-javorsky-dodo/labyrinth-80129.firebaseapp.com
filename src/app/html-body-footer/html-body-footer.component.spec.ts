import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HtmlBodyFooterComponent } from "./html-body-footer.component";
import { MatDividerModule } from "@angular/material/divider";
import { MatProgressBarModule } from "@angular/material/progress-bar";



describe(<string>"HtmlBodyFooterComponent", () => {

  let component: HtmlBodyFooterComponent;
  let fixture: ComponentFixture<HtmlBodyFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HtmlBodyFooterComponent],
      imports: [
        MatDividerModule,
        MatProgressBarModule
      ]
    });
    fixture = TestBed.createComponent(HtmlBodyFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(<string>"should create", () => {
    expect(component).toBeTruthy();
  });
});