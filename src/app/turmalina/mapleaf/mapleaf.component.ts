import { Component, OnInit } from '@angular/core';
import { MapleafService } from './mapleaf.service';
import { map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import * as L from 'leaflet';
import { analyzeAndValidateNgModules } from '@angular/compiler';
@Component({
  selector: 'app-mapleaf',
  templateUrl: './mapleaf.component.html',
  styleUrls: ['./mapleaf.component.css']
})
export class MapleafComponent implements OnInit {
  mapLeaflet:any;
  private map:any;

  private initMap(): void {
    this.map = L.map('map', {
      center: [ -7.1311923, -36.8275259 ],
      zoom: 5
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 8,
    });

    tiles.addTo(this.map);
    this.map.setMaxBounds(this.map.getBounds());
  }
  

  public mapReady(map: L.Map) {
    this.mapLeaflet = map;

    this.mapService.getParaibaGeoJson().subscribe((data: any) => {
      L.geoJSON(data).addTo(map)
    });
  }

  constructor(private mapService: MapleafService) {
  }

  ngOnInit(): void {
    this.initMap();
    this.mapReady(this.map);
  }

}
