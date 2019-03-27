import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Menu } from "./menu-model";

@Injectable({
  providedIn: "root"
})
export class MenusService {
  url = "http://localhost:5000/menus";
  constructor(private http: HttpClient) {}
  getAll() {
    return this.http.get<any[]>(this.url);
  }
  addMenu(menu: Menu) {
    return this.http.post<Menu>(this.url, menu);
  }
}
