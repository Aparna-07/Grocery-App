import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmitterService {

  @Output() subEmitter = new EventEmitter<any>();
  @Output() trashEmitter = new EventEmitter<any>();

  constructor() { }

  subCatSelected(id:any, name:any){
    let result=[id, name]
    this.subEmitter.emit(result);
  }

  trashClicked(pdt:any){
    this.trashEmitter.emit(pdt);
  }
}
