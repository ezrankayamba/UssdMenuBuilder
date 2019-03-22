import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class MenusService {
  url = "http://localhost:5000/menus";
  constructor(private http: HttpClient) {}
  getAll() {
    return this.http.get<any[]>(this.url);
  }
}
