import { Component } from "@angular/core";



@Component({
  selector: "app-html-body-main",
  templateUrl: "./html-body-main.component.html",
  styleUrls: ["./html-body-main.component.css"]
})



export class HtmlBodyMainComponent { }



const pseudo_maze_func = () => {


  return setTimeout(() => {

    const pseudo_maze_container = document.querySelector(<string>"#html-body-main-table-tbody") as HTMLElement;

    for (let yindex: number = <number>0; yindex <= <number>12; yindex++) {

      const tr_ele = document.createElement(<string>"tr") as HTMLElement;

      for (let xindex: number = <number>0; xindex <= <number>25; xindex++) {

        const td_ele = document.createElement(<string>"td") as HTMLElement;

        td_ele.setAttribute(<string>"class", <string>"TDCell");
        td_ele.style.padding = <string>"2mm 2mm 2mm 2mm";
        if (
          ((yindex % <number>3 === <number>0) && (xindex % <number>3 === <number>0)) ||
          ((yindex % <number>4 === <number>0) && (xindex % <number>4 === <number>0))
        ) {
          td_ele.style.backgroundColor = <string>"rgb(0, 0, 0)";
        }
        td_ele.style.border = <string>"1mm solid rgb(0, 0, 0)";
        td_ele.style.borderRadius = <string>"1mm";
        tr_ele.appendChild(td_ele);
      }
      pseudo_maze_container.appendChild(tr_ele);
    }

    {


      const tds_cells = document.querySelectorAll(<string>"td");
      const r_0 = tds_cells[Number(0)] as HTMLTableCellElement;
      const r_1 = tds_cells[Number(1)] as HTMLTableCellElement;
      const r_2 = tds_cells[Number(0) + <number>26] as HTMLTableCellElement;
      const r_arr: HTMLTableCellElement[] = [r_0, r_1, r_2];
      const b_0 = tds_cells[Number(tds_cells.length) - <number>27] as HTMLTableCellElement;
      const b_1 = tds_cells[Number(tds_cells.length) - <number>2] as HTMLTableCellElement;
      const b_2 = tds_cells[Number(tds_cells.length) - <number>1] as HTMLTableCellElement;
      const b_arr: HTMLTableCellElement[] = [b_0, b_1, b_2];
      const w_arr: number[] = [
        Number(2), <number>5, <number>7, <number>10, <number>11,
        <number>13, <number>14, <number>17, <number>19,
        <number>22, <number>23, <number>25, <number>52, <number>130,
        <number>182, <number>260, <number>286,
        <number>313, <number>314, <number>317, <number>319, <number>322,
        <number>323, <number>325, <number>326,
        <number>329, <number>331, <number>334, <number>335, <number>337 - <number>26 * <number>2,
        <number>337 - <number>26 * <number>3, <number>337 - <number>26 * <number>4,
        <number>337 - <number>26 * <number>5, <number>337 - <number>26 * <number>6,
        <number>337 - <number>26 * <number>7, <number>337 - <number>26 * <number>8,
        <number>337 - <number>26 * <number>9, <number>337 - <number>26 * <number>10,
        <number>337 - <number>26 * <number>11
      ];


      [...r_arr].forEach(c => c.style.backgroundColor = <string>"rgb(244, 61, 61)");
      [...b_arr].forEach(c => c.style.backgroundColor = <string>"rgb(61, 61, 244)");
      [...w_arr].forEach(i => {

        const c_i = tds_cells[i] as HTMLTableCellElement;

        c_i.style.backgroundColor = <string>"rgb(244, 244, 244)";
      });

      {


        const g_0 = tds_cells[Number(1) + <number>26] as HTMLTableCellElement;
        let startie: number = <number>1 + <number>26;
        const pos_idxs: number[] = [
          Number(-26), Number(-25), Number(-1), Number(1), Number(25), Number(26), Number(27)
        ];


        g_0.style.backgroundColor = <string>"rgb(122, 244, 122)";

        {

          const pseudo_yx = () => {

            setTimeout(() => {


              let nextie: number = <number>startie + pos_idxs[Number(Math.floor(Math.random() * <number>7))];
              const nextie_ele = tds_cells[nextie] as HTMLTableCellElement;
              const prev_ele = tds_cells[startie] as HTMLTableCellElement;


              if (nextie_ele.style.backgroundColor === <string>"rgb(244, 61, 61)") nextie = nextie + <number>0
              else if (nextie_ele.style.backgroundColor === <string>"rgb(244, 244, 244)") nextie = nextie + <number>0
              else if (nextie_ele.style.backgroundColor === <string>"rgb(0, 0, 0)") nextie = nextie + <number>0
              else if (nextie_ele.style.backgroundColor === <string>"rgb(61, 61, 244)")
                setTimeout(() => window.location.reload(), <number>1333)
              else if (startie === <number>284) setTimeout(() => window.location.reload(), <number>1333)
              else if (startie === <number>309) setTimeout(() => window.location.reload(), <number>1333)
              else if (startie === <number>310) setTimeout(() => window.location.reload(), <number>1333)
              else {

                nextie_ele.style.backgroundColor = <string>"rgb(122, 244, 122)";
                prev_ele.style.backgroundColor = <string>"rgb(61, 122, 61)";
                startie = nextie;

              }


              {

                pseudo_yx();

              }

            }, <number>33);

          }

          pseudo_yx();

        }

      }

    }

  }, <number>444);

};

setTimeout(() => { pseudo_maze_func(); }, <number>344);