import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent { 
    items: MenuItem[] = [];

    gfg: any;

    date5!: Date;
    invalidDates: Array<Date> = [];
    
    selectedDate!: Date;

    calendarVal?: Date;
    disabledDatesArr = [
        new Date("2/14/2023"), 
        new Date("2/16/2023")
    ];

    minDate = new Date("2/7/2023");
    maxDate = new Date("2/14/2023");

    ngOnInit() {
        this.items = [
            {
            label: 'File',
            icon:'pi pi-fw pi-file',
            items: [
                {
                    label: 'New',
                    icon:'pi pi-fw pi-plus',
                    items: [
                        {
                        label: 'Bookmark',
                        icon:'pi pi-fw pi-bookmark',
                        },
                        {
                        label: 'Video',
                        icon:'pi pi-fw pi-video'
                        }
                    ]
                },
                {
                    label: 'Delete',
                    icon:'pi pi-fw pi-trash'
                },
                {
                    label: 'Export',
                    icon:'pi pi-fw pi-external-link'
                }
            ]
            },
            
        ]
    }
}
