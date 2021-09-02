import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimaisRoutingModule } from './animais-routing.module';
import { ListaAnimaisComponent } from './lista-animais/lista-animais.component';
import { AnimalComponent } from './animal/animal.component';
import { CartaoModule } from '../componentes/cartao/cartao.module';
import { GradeFotosAnimaisComponent } from './grade-fotos-animais/grade-fotos-animais.component';
import { CabecalhoModule } from '../componentes/cabecalho/cabecalho.module';
import { RodapeModule } from '../componentes/rodape/rodape.module';
import { DetalheAnimalComponent } from './detalhe-animal/detalhe-animal.component';
@NgModule({
  declarations: [ListaAnimaisComponent, AnimalComponent, GradeFotosAnimaisComponent, DetalheAnimalComponent],
  imports: [CommonModule, AnimaisRoutingModule, CartaoModule, CabecalhoModule, RodapeModule ],
})
export class AnimaisModule {}
