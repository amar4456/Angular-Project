import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent { 
    // Sidebar
    gfg: any;

    // Disable Days
    date5!: Date;
    invalidDates: Array<Date> = [];
    
    // Disable specific dates and/or days Component
    calendarVal?: Date;
    disabledDatesArr = [
        new Date("2/14/2023"), 
        new Date("2/16/2023")
    ];

    // Calendar Enable specific Date Range
    selectedDate!: Date;
    minDate = new Date("2/7/2023");
    maxDate = new Date("2/14/2023");

    // AK Multi Restriction Based on Input
    selectedYear!: any;

    years = ["A","B"]

    disabledDates = [
        new Date("2/14/2023"), 
        new Date("2/16/2023")
    ];

    minDate1: any
    maxDate1: any

    onClick() {
        if (this.selectedYear == 'A') {
            alert("2022")
            this.minDate1 = new Date("2/1/2022");
            this.maxDate1 = new Date("3/30/2022");        
        } else  if (this.selectedYear == 'B') {
            alert("2023")
            this.minDate1 = new Date("2/1/2023");
            this.maxDate1 = new Date("3/30/2023"); 
        }
      }
      
      


    // menubar
    items1: MenuItem[] = [];
    
    //
    items: MenuItem[] = [];

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

        // menubar
        this.items1 = [
            {
                label:'File',
                icon:'pi pi-fw pi-file',
                items:[
                    {
                        label:'New',
                        icon:'pi pi-fw pi-plus',
                        items:[
                        {
                            label:'Bookmark',
                            icon:'pi pi-fw pi-bookmark'
                        },
                        {
                            label:'Video',
                            icon:'pi pi-fw pi-video'
                        },

                        ]
                    },
                    {
                        label:'Delete',
                        icon:'pi pi-fw pi-trash'
                    },
                    {
                        separator:true
                    },
                    {
                        label:'Export',
                        icon:'pi pi-fw pi-external-link'
                    }
                ]
            },
            {
                label:'Edit',
                icon:'pi pi-fw pi-pencil',
                items:[
                    {
                        label:'Left',
                        icon:'pi pi-fw pi-align-left'
                    },
                    {
                        label:'Right',
                        icon:'pi pi-fw pi-align-right'
                    },
                    {
                        label:'Center',
                        icon:'pi pi-fw pi-align-center'
                    },
                    {
                        label:'Justify',
                        icon:'pi pi-fw pi-align-justify'
                    },

                ]
            },
            {
                label:'Users',
                icon:'pi pi-fw pi-user',
                items:[
                    {
                        label:'New',
                        icon:'pi pi-fw pi-user-plus',

                    },
                    {
                        label:'Delete',
                        icon:'pi pi-fw pi-user-minus',

                    },
                    {
                        label:'Search',
                        icon:'pi pi-fw pi-users',
                        items:[
                        {
                            label:'Filter',
                            icon:'pi pi-fw pi-filter',
                            items:[
                                {
                                    label:'Print',
                                    icon:'pi pi-fw pi-print'
                                }
                            ]
                        },
                        {
                            icon:'pi pi-fw pi-bars',
                            label:'List'
                        }
                        ]
                    }
                ]
            },
            {
                label:'Events',
                icon:'pi pi-fw pi-calendar',
                items:[
                    {
                        label:'Edit',
                        icon:'pi pi-fw pi-pencil',
                        items:[
                        {
                            label:'Save',
                            icon:'pi pi-fw pi-calendar-plus'
                        },
                        {
                            label:'Delete',
                            icon:'pi pi-fw pi-calendar-minus'
                        },

                        ]
                    },
                    {
                        label:'Archieve',
                        icon:'pi pi-fw pi-calendar-times',
                        items:[
                        {
                            label:'Remove',
                            icon:'pi pi-fw pi-calendar-minus'
                        }
                        ]
                    }
                ]
            },
            {
                label:'Quit',
                icon:'pi pi-fw pi-power-off'
            }
        ];
    }
}
