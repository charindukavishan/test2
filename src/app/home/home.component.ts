import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {


    details={
        "_id": {
            "$oid": "5c457304c13afb0b8c57a784"
        },
        "type1": [
            {
                "isBook": false,
                "slotNumber": 1,
                "name": "",
                "nic": "",
                "email": "",
                "parkedAt": "",
                "leavAt": "",
                "isLeav": true
            },
            {
                "isBook": false,
                "slotNumber": 2,
                "name": "",
                "nic": "",
                "email": "",
                "parkedAt": "",
                "leavAt": "",
                "isLeav": true
            },
            {
                "isBook": false,
                "slotNumber": 4,
                "name": "",
                "nic": "",
                "email": "",
                "parkedAt": "",
                "leavAt": "",
                "isLeav": true
            },
            {
                "isBook": false,
                "slotNumber": 3,
                "name": "",
                "nic": "",
                "email": "",
                "parkedAt": "",
                "leavAt": "",
                "isLeav": true
            },
            {
                "isBook": false,
                "slotNumber": 5,
                "name": "",
                "nic": "",
                "email": "",
                "parkedAt": "",
                "leavAt": "",
                "isLeav": true
            }
        ],
        "type2": [
            {
                "isBook": false,
                "slotNumber": 1,
                "name": "",
                "nic": "",
                "email": "",
                "parkedAt": "",
                "leavAt": "",
                "isLeav": true
            },
            {
                "isBook": false,
                "slotNumber": 2,
                "name": "",
                "nic": "",
                "email": "",
                "parkedAt": "",
                "leavAt": "",
                "isLeav": true
            },
            {
                "isBook": false,
                "slotNumber": 3,
                "name": "",
                "nic": "",
                "email": "",
                "parkedAt": "",
                "leavAt": "",
                "isLeav": true
            },
            {
                "isBook": false,
                "slotNumber": 5,
                "name": "",
                "nic": "",
                "email": "",
                "parkedAt": "",
                "leavAt": "",
                "isLeav": true
            },
            {
                "isBook": false,
                "slotNumber": 4,
                "name": "",
                "nic": "",
                "email": "",
                "parkedAt": "",
                "leavAt": "",
                "isLeav": true
            },
            {
                "isBook": false,
                "slotNumber": 6,
                "name": "",
                "nic": "",
                "email": "",
                "parkedAt": "",
                "leavAt": "",
                "isLeav": true
            },
            {
                "isBook": false,
                "slotNumber": 7,
                "name": "",
                "nic": "",
                "email": "",
                "parkedAt": "",
                "leavAt": "",
                "isLeav": true
            }
        ],
        "type3": [
            {
                "isBook": false,
                "slotNumber": 1,
                "name": "",
                "nic": "",
                "email": "",
                "parkedAt": "",
                "leavAt": "",
                "isLeav": true
            }
        ],
        "type4": [
            {
                "isBook": false,
                "slotNumber": 1,
                "name": "",
                "nic": "",
                "email": "",
                "parkedAt": "",
                "leavAt": "",
                "isLeav": true
            },
            {
                "isBook": false,
                "slotNumber": 2,
                "name": "",
                "nic": "",
                "email": "",
                "parkedAt": "",
                "leavAt": "",
                "isLeav": true
            }
        ],
        "type5": [
            {
                "isBook": false,
                "slotNumber": 1,
                "name": "",
                "nic": "",
                "email": "",
                "parkedAt": "",
                "leavAt": "",
                "isLeav": true
            },
            {
                "isBook": false,
                "slotNumber": 2,
                "name": "",
                "nic": "",
                "email": "",
                "parkedAt": "",
                "leavAt": "",
                "isLeav": true
            },
            {
                "isBook": false,
                "slotNumber": 3,
                "name": "",
                "nic": "",
                "email": "",
                "parkedAt": "",
                "leavAt": "",
                "isLeav": true
            }
        ],
        "role": "keeper",
        "isactivate": "yes",
        "state": "open",
        "name": "kottawa",
        "email": "kottawa@gmail.com",
        "username": "park2",
        "password": "$2a$10$oMA5Z2K12FK3q0ZSyanyyOVTIsGfuQnM8TKrsuxmJTzD0e2oqNtv2",
        "mobileNum": "65464532",
        "NICnumber": "531",
        "parkName": "park2",
        "numberOfSlots": 55,
        "openHours": "6am-8pm",
        "alocatedSlots1": 5,
        "hourCharge1": "9",
        "alocatedSlots2": 7,
        "hourCharge2": "5",
        "alocatedSlots3": 1,
        "hourCharge3": "2",
        "alocatedSlots4": 2,
        "hourCharge4": "6",
        "alocatedSlots5": 3,
        "hourCharge5": "55",
        "MaximumWeight": "66",
        "MaximumHeight": "55",
        "lat": 6.841165,
        "lng": 79.965431,
        "ownerid": "5c4560b18518b626901a8c24",
        "__v": 0
    }
    model = {
        left: true,
        middle: false,
        right: false
    };
    constructor() { }

    ngOnInit() {}
    title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;
}
