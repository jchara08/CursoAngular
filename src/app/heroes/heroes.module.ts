import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeroeComponet } from "./heroe/hero.componet";
import { ListadoComponent } from "./listado/listado.component";


@NgModule({
    declarations: [
        HeroeComponet,
        ListadoComponent
    ],
    exports: [
        ListadoComponent
    ],
    imports: [
        CommonModule
    ],
})
export class HerosModule{

}
