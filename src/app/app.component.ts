import { Component } from "@angular/core";



@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})



export class AppComponent {

  title = <string>"labyrinth-80129";

  faviconer_func(): void {
    <string>"use strict";
    try {

      const faviconer_func_def = () => {

        const fav_ele = document.querySelector(<string>"#html-head-link-fav") as HTMLLinkElement;

        setTimeout(() => {
          fav_ele
            .setAttribute(
              <string>"href",
              String(
                "data:image/x-icon;" +
                "base64," +
                "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUA" +
                "AAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAARSURBVDhPYxgFo2AUQAEDAwADEAABuGyTOQAAAABJRU5ErkJggg=="
              ));
        }, <number>0);

        setTimeout(() => {
          fav_ele
            .setAttribute(
              <string>"href",
              String(
                "data:image/x-icon;" +
                "base64," +
                "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAAXNSR" +
                "0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad" +
                "5mH3gAAAA0SURBVDhPnczBCQAADIPAzN3pO4AgJD7uae4uKZzyJS3" +
                "zGZ3yJS3zGZ3yJS3zGZ3yJW1KHul8W4GZ0w85AAAAAElFTkSuQmCC"
              ));
        }, <number>600);

        setTimeout(() => {
          fav_ele
            .setAttribute(
              <string>"href",
              String(
                "data:image/x-icon;" +
                "base64," +
                "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAAXNSR0" +
                "IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5m" +
                "H3gAAAA2SURBVDhPncyxDQBADIPAzJ25f4D0j4RkU1zJNL3dyDCf0S" +
                "pf0jCf0Spf0jCf0Spf0jCf/c4cTtF6AS6Lt5gAAAAASUVORK5CYII="
              ));
        }, <number>1200);

        setTimeout(() => {
          fav_ele
            .setAttribute(
              <string>"href",
              String(
                "data:image/x-icon;" +
                "base64," +
                "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAAXNSR0" +
                "IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5m" +
                "H3gAAAA2SURBVDhPncwxDQAwEMPA4H7cBVAAliwlHm507l1SOOVLWu" +
                "YzOuVLWuYzOuVLWuYzOuVL2pR8i6p6AXaq1awAAAAASUVORK5CYII="
              ));
        }, <number>1800);

        setTimeout(() => {
          fav_ele
            .setAttribute(
              <string>"href",
              String(
                "data:image/x-icon;" +
                "base64," +
                "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAAXNSR0" +
                "IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5m" +
                "H3gAAAA2SURBVDhPncyxDQBADIPAzJ25f4D0j4RkU1zJNO2+yDCf0S" +
                "pf0jCf0Spf0jCf0Spf0jCf/c4cEdF6AdCRK9cAAAAASUVORK5CYII="
              ));
        }, <number>2400);

        setTimeout(() => {
          fav_ele
            .setAttribute(
              <string>"href",
              String(
                "data:image/x-icon;" +
                "base64," +
                "iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAAXNSR0" +
                "IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5m" +
                "H3gAAAA1SURBVDhPnczBCQAADIPA7D9vB+gAgpD4uKe5u6Rwype0zG" +
                "d0ype0zGd0ype0zGd0ype0KXnP97cBExRJtQAAAABJRU5ErkJggg=="
              ));
        }, <number>3000);

        setTimeout(() => faviconer_func_def(), <number>3600);
      };

      window.onload = () => faviconer_func_def();

    } catch (err_) {

      if (err_) {
        console.clear();
        alert(<string>("bug"));
        console.log(err_);
      }

    }

  }

}