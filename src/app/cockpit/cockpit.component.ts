import { Component, OnInit, Output,EventEmitter,ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // newServerName = '';
  //newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput:ElementRef;

  @Output('sc') serverCreated = new EventEmitter < {serverName:string,serverContent:string} >(); //output and alias
  @Output('bc') blueprintCreated = new EventEmitter < {serverName:string,serverContent:string} >();
  constructor() { }

  ngOnInit(): void {
  }
  onAddServer(nameInput:HTMLInputElement){
    this.serverCreated.emit({
      serverName:nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value //bunu asla yapma
    });

  }
  onAddBlueprint(nameInput:HTMLInputElement){
    this.blueprintCreated.emit({
      serverName:nameInput.value,
      serverContent:this.serverContentInput.nativeElement.value // bunu asla yapma
    });

  }
  

}
