import { Injectable } from '@angular/core';
import { ManaSymbols } from './ManaSymbols';



@Injectable({
  providedIn: 'root'
})
export class ConvertCostService {
   // Objeto con símbolos de mana
   private manaSymbols: ManaSymbols = {
    '{G}': '<img class="manaicon" src="../assets/images/g.svg" alt="G">',
    '{W}': '<img class="manaicon" src="../assets/images/w.svg" alt="W">',
    '{U}': '<img class="manaicon" src="../assets/images/u.svg" alt="U">',
    '{B}': '<img class="manaicon" src="../assets/images/b.svg" alt="B">',
    '{R}': '<img class="manaicon" src="../assets/images/r.svg" alt="R">',
    '{C}': '<img class="manaicon" src="../assets/images/c.svg" alt="C">',
    '{X}': '<img class="manaicon" src="../assets/images/x.svg" alt="X">',
    '{0}': '<img class="manaicon" src="../assets/images/0.svg" alt="1">',
    '{1}': '<img class="manaicon" src="../assets/images/1.svg" alt="1">',
    '{2}': '<img class="manaicon" src="../assets/images/2.svg" alt="2">',
    '{3}': '<img class="manaicon" src="../assets/images/3.svg" alt="3">',
    '{4}': '<img class="manaicon" src="../assets/images/4.svg" alt="4">',
    '{5}': '<img class="manaicon" src="../assets/images/5.svg" alt="5">',
    '{6}': '<img class="manaicon" src="../assets/images/6.svg" alt="6">',
    '{7}': '<img class="manaicon" src="../assets/images/7.svg" alt="7">',
    '{8}': '<img class="manaicon" src="../assets/images/8.svg" alt="8">',
    '{9}': '<img class="manaicon" src="../assets/images/9.svg" alt="9">',
    '{10}': '<img class="manaicon" src="../assets/images/10.svg" alt="10">',
    '{11}': '<img class="manaicon" src="../assets/images/11.svg" alt="11">',
    '{12}': '<img class="manaicon" src="../assets/images/12.svg" alt="12">',
    '{13}': '<img class="manaicon" src="../assets/images/13.svg" alt="13">',
    '{15}': '<img class="manaicon" src="../assets/images/15.svg" alt="15">',
    '{16}': '<img class="manaicon" src="../assets/images/16.svg" alt="16">',
    '{T}': '<img class="manaicon" src="../assets/images/t.svg" alt="T"',
    '{W/U}': '<img class="manaicon" src="../assets/images/wu.svg" alt="White or blue"',
    '{W/B}': '<img class="manaicon" src="../assets/images/wb.svg" alt="White or black"',
    '{B/R}': '<img class="manaicon" src="../assets/images/br.svg" alt="Blac or Green"',
    '{U/B}': '<img class="manaicon" src="../assets/images/ub.svg" alt="Red or white">',
    '{G/W}': '<img class="manaicon" src="../assets/images/gw.svg" alt="Green or white"',
    '{G/U}': '<img class="manaicon" src="../assets/images/gu.svg" alt="Green or blue"',
    '{W/P}': '<img class="manaicon" src="../assets/images/wp.svg" alt="White or 2 life"',
    '{U/P}': '<img class="manaicon" src="../assets/images/up.svg" alt="Blue or 2 life"',
    '{B/P}': '<img class="manaicon" src="../assets/images/bp.svg" alt="Black or 2 life"',
    '{R/P}': '<img class="manaicon" src="../assets/images/rp.svg" alt="Red or 2 life"',
    '{G/P}': '<img class="manaicon" src="../assets/images/gp.svg" alt="Green or 2 life"'
  };

  constructor() { }
   
  
  // Funcion para convertir manaCost en imagenes
   convertManaCostToSymbols(manaCost: string): string {
    if (!manaCost){
      return '';
    }
    const manaCostRegex = /{([^}]+)}/g; //Expresion regular para capturar cualquier cosa que este entre {}

    return manaCost.replace(manaCostRegex, match => this.manaSymbols[match] || match);
  }
  
}
