import { Component, Injectable } from "@angular/core";
import { MenusService } from "../menus.service";
import { ModalController } from "@ionic/angular";
import { MenuFormPage } from "../menu-form/menu-form.page";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { Menu } from "../menu-model";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"]
})
export class Tab2Page {
  ROOT: any;
  current: any;
  previous: any;
  menu: any;
  modal: any;
  constructor(
    private service: MenusService,
    private modalController: ModalController
  ) {
    this.menu = {
      name: "",
      text_en: "",
      text_sw: "",
      order: ""
    };
  }
  ionViewWillEnter() {
    this.service.getAll().subscribe((list: any) => {
      this.ROOT = list[0];
      this.current = this.ROOT;
      console.log(this.ROOT);
    });
    console.log("ionViewWillEnter", this.service);
  }
  next(menu) {
    this.previous = this.current;
    this.current = menu;
    this.current.parent = this.previous;
  }
  prev(menu) {
    this.current = this.previous;
    this.previous = this.previous ? this.previous.parent : undefined;
  }
  async presentModal() {
    this.modal = await this.modalController.create({
      component: MenuFormPage,
      componentProps: {
        dismiss: this.dismiss,
        submit: this.submit,
        model: this.menu,
        parent: this.current,
        service: this.service
      }
    });

    return await this.modal.present();
  }

  dismiss() {
    this.modal.dismiss();
  }
  submit(model, parent, service) {
    console.log("Saving menu...", model, service);
    const newMenu = new Menu();
    newMenu.name = model.name;
    newMenu.parent_id = parent.id;
    service.addMenu(newMenu).subscribe(data => {
      console.log("Response: ", data);
      if (data.result === 0) {
        newMenu.id = data.id;
        parent.menus.push(newMenu);
      }
      this.dismiss();
    });
  }
}
