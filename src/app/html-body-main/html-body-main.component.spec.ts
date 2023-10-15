import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HtmlBodyMainComponent } from "./html-body-main.component";
import { MatDividerModule } from "@angular/material/divider";



describe(<string>"HtmlBodyMainComponent", () => {

  let component: HtmlBodyMainComponent;
  let fixture: ComponentFixture<HtmlBodyMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HtmlBodyMainComponent],
      imports: [MatDividerModule]
    });
    fixture = TestBed.createComponent(HtmlBodyMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it(<string>"should create", () => {
    expect(component).toBeTruthy();
  });
});