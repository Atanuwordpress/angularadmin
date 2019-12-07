import { Component,  NgZone, OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import {MatTableModule} from '@angular/material/table';


am4core.useTheme(am4themes_animated);
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  private chart: am4charts.XYChart;
  
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource;

  constructor(private zone: NgZone) {

   
     this.dataSource = ELEMENT_DATA;

  }

  

  ngOnInit() {
    
    this.zone.runOutsideAngular(() => {
      let chart = am4core.create("chartdiv", am4charts.XYChart);

      chart.paddingRight = 20;

      let data = [];
      let visits = 10;
      for (let i = 1; i < 30; i++) {
        visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
        data.push({ date: new Date(2019, 0, i), name: "name" + i, value: visits });
      }

      chart.data = data;

      let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.grid.template.location = 0;

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.tooltip.disabled = true;
      valueAxis.renderer.minWidth = 35;

      let series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.dateX = "date";
      series.dataFields.valueY = "value";

      series.tooltipText = "{valueY.value}";
      chart.cursor = new am4charts.XYCursor();

      let scrollbarX = new am4charts.XYChartScrollbar();
      scrollbarX.series.push(series);
      chart.scrollbarX = scrollbarX;

      this.chart = chart;
    });

    let chart2 = am4core.create("columndiv", am4charts.XYChart);
chart2.hiddenState.properties.opacity = 0; // this creates initial fade-in

chart2.paddingBottom = 30;

chart2.data = [{
    "name": "Monica",
    "steps": 45688,
    "href": "https://www.amcharts.com/wp-content/uploads/2019/04/monica.jpg"
}, {
    "name": "Joey",
    "steps": 35781,
    "href": "https://www.amcharts.com/wp-content/uploads/2019/04/joey.jpg"
}, {
    "name": "Ross",
    "steps": 25464,
    "href": "https://www.amcharts.com/wp-content/uploads/2019/04/ross.jpg"
}, {
    "name": "Phoebe",
    "steps": 18788,
    "href": "https://www.amcharts.com/wp-content/uploads/2019/04/phoebe.jpg"
}, {
    "name": "Rachel",
    "steps": 15465,
    "href": "https://www.amcharts.com/wp-content/uploads/2019/04/rachel.jpg"
}, {
    "name": "Chandler",
    "steps": 11561,
    "href": "https://www.amcharts.com/wp-content/uploads/2019/04/chandler.jpg"
}];

let categoryAxis = chart2.xAxes.push(new am4charts.CategoryAxis());
categoryAxis.dataFields.category = "name";
categoryAxis.renderer.grid.template.strokeOpacity = 0;
categoryAxis.renderer.minGridDistance = 10;
categoryAxis.renderer.labels.template.dy = 35;
categoryAxis.renderer.tooltip.dy = 35;

let valueAxis = chart2.yAxes.push(new am4charts.ValueAxis());
valueAxis.renderer.inside = true;
valueAxis.renderer.labels.template.fillOpacity = 0.3;
valueAxis.renderer.grid.template.strokeOpacity = 0;
valueAxis.min = 0;
valueAxis.cursorTooltipEnabled = false;
valueAxis.renderer.baseGrid.strokeOpacity = 0;

let series = chart2.series.push(new am4charts.ColumnSeries);
series.dataFields.valueY = "steps";
series.dataFields.categoryX = "name";
series.tooltipText = "{valueY.value}";
series.tooltip.pointerOrientation = "vertical";
series.tooltip.dy = - 6;
series.columnsContainer.zIndex = 100;

let columnTemplate = series.columns.template;
columnTemplate.width = am4core.percent(50);
columnTemplate.maxWidth = 66;
columnTemplate.column.cornerRadius(60, 60, 10, 10);
columnTemplate.strokeOpacity = 0;

series.heatRules.push({ target: columnTemplate, property: "fill", dataField: "valueY", min: am4core.color("#e5dc36"), max: am4core.color("#5faa46") });
series.mainContainer.mask = undefined;

let cursor = new am4charts.XYCursor();
chart2.cursor = cursor;
cursor.lineX.disabled = true;
cursor.lineY.disabled = true;
cursor.behavior = "none";

let bullet = columnTemplate.createChild(am4charts.CircleBullet);
bullet.circle.radius = 30;
bullet.valign = "bottom";
bullet.align = "center";
bullet.isMeasured = true;
//bullet.mouseEnabled = false;
bullet.verticalCenter = "bottom";
bullet.interactionsEnabled = false;

let hoverState = bullet.states.create("hover");
let outlineCircle = bullet.createChild(am4core.Circle);
outlineCircle.adapter.add("radius", function (radius, target) {
    let circleBullet:any = target.parent;
    return circleBullet.circle.pixelRadius + 10;
})

let image = bullet.createChild(am4core.Image);
image.width = 60;
image.height = 60;
image.horizontalCenter = "middle";
image.verticalCenter = "middle";
image.propertyFields.href = "href";

image.adapter.add("mask", function (mask, target) {
    let circleBullet:any = target.parent;
    return circleBullet.circle;
})

let previousBullet;
chart2.cursor.events.on("cursorpositionchanged", function (event) {
    let dataItem:any = series.tooltipDataItem;

    if (dataItem.column) {
        let bullet = dataItem.column.children.getIndex(1);

        if (previousBullet && previousBullet != bullet) {
            previousBullet.isHover = false;
        }

        if (previousBullet != bullet) {

            let hs = bullet.states.getKey("hover");
            hs.properties.dy = -bullet.parent.pixelHeight + 30;
            bullet.isHover = true;

            previousBullet = bullet;
        }
    }
});

let chart3 = am4core.create("piediv", am4charts.PieChart);
chart3.hiddenState.properties.opacity = 0; // this creates initial fade-in

chart3.data = [
  {
    country: "Lithuania",
    value: 260
  },
  {
    country: "Czech Republic",
    value: 230
  },
  {
    country: "Ireland",
    value: 200
  },
  {
    country: "Germany",
    value: 165
  },
  {
    country: "Australia",
    value: 139
  },
  {
    country: "Austria",
    value: 128
  }
];


  }

}
