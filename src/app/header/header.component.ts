import { Component,  Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {

        collapsed = true;

        @Output() valueSelected = new EventEmitter<string>();
        
        onSelect(value: string){

            this.valueSelected.emit(value);   
        }
}