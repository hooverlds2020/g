import Stack from "./Stack";
import deepCopy from "../helpers/deepCopy";

class Tower {
  constructor(maxLength) {    
    this.disks = new Stack();
  }
  add(disk) {
    this.disks.push(disk);
    this.length++;
    return this;   
    
    //if (this.stack.isEmpty() || disk < this.stack.top.value) {
      //this.stack.push(disk);
    //}
    
  }

  /*moveTopTo(destination) {
    if (destination.add(this.disks.top.value)) {
      this.disks.pop();
      destination.setTower(deepCopy(destination));
      this.setTower(deepCopy(this));
      return this;
    } else {
      return false;
    }
  }*/

  moveTopTo(destination) {
    //mover el disco que se encuentra en top
    //hacia la torre destino
    if (this.disks.top !== null) {
      let disk = this.disks.top.value;
      destination.setTower(deepCopy(destination))
      this.disks.pop();
      this.setTower(deepCopy(this));      
      destination.add(disk);
      return this; //Quitamos el disco que se encuentra en top
    }
  }


  *moveDisks(disks, towerDestination, towerAux) {
    if (disks === 0) {
      return true;
    }
    if (disks === 1) {
      yield this.moveTopTo(towerDestination);
    }
    if (disks >= 2) {
      yield* this.moveDisks(disks - 1, towerAux, towerDestination);
      yield this.moveTopTo(towerDestination);
      yield* towerAux.moveDisks(disks - 1, towerDestination, this);
    }
    return true;
  }
}

export default Tower;
