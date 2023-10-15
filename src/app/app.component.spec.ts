import { TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { HtmlBodyHeaderComponent } from "./html-body-header/html-body-header.component";
import { HtmlBodyMainComponent } from "./html-body-main/html-body-main.component";
import { HtmlBodyFooterComponent } from "./html-body-footer/html-body-footer.component";
import { MatRippleModule } from "@angular/material/core";
import { MatDividerModule } from "@angular/material/divider";
import { MatProgressBarModule } from "@angular/material/progress-bar";



describe(<string>"AppComponent", () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [
      AppComponent,
      HtmlBodyHeaderComponent,
      HtmlBodyMainComponent,
      HtmlBodyFooterComponent
    ],
    imports: [
      MatRippleModule,
      MatDividerModule,
      MatProgressBarModule
    ]
  }));

  it(<string>"should create the app", () => {

    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(app).toBeTruthy();
  });

  it(<string>"should have as title 'labyrinth-80129'", () => {

    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(app.title).toEqual(<string>"labyrinth-80129");
  });

  it(<string>"should render title", () => {

    const fixture = TestBed.createComponent(AppComponent);

    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector(<string>".content span")?.textContent)
      .toContain(<string>"labyrinth-80129 app is running!");
  });
});