import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'the-gang-live-coding';
  taskNumber = 1;
  clickerData = [0, 0, 0, 0, 0]

  incrementCount = (index:number) => {
    this.clickerData = this.clickerData.map((eachClicker, idx) => {
      if (idx === index) {
        return  eachClicker + 1;
      }
      return eachClicker;
    })
  } 

  onAddClicker = () => {
    this.clickerData = [...this.clickerData, 0]
  }
  onRemoveClicker = () => {
    if (this.clickerData.length === 1) {
      return;
    } else {
      this.clickerData = this.clickerData.filter((i,idx) => {
        if (idx === this.clickerData.length - 1) {
          return false;
        }
        return true;
      })
    }
  }

  onSecondLargestValue = () => {
    let largest = 0;
    let secondLargest = 0;
    this.clickerData.map((eachValue) => {
      if (eachValue > largest) {
        largest = eachValue
      }
    })

    return this.clickerData.map((eachSecond) => {
      if (eachSecond !== largest && eachSecond > secondLargest) {
        secondLargest = eachSecond;
      }
    }).length !== 0 ? secondLargest : false;
  }

  totalCounts = () => {
    return this.clickerData.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  }
}
