import { Component } from "@angular/core";
import { MenusService } from "../menus.service";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"]
})
export class Tab2Page {
  rootMenus: any;
  options = {};
  constructor(private service: MenusService) {}
  ionViewWillEnter() {
    this.service.getAll().subscribe((list: any) => {
      this.rootMenus = list;
      console.log(this.rootMenus);
    });
  }
}
