import {Component} from '@angular/core';
import {ApiService, WorkflowSpec} from 'cr-connect-workflow-lib';

@Component({
  selector: 'app-workflow-spec-list',
  templateUrl: './workflow-spec-list.component.html',
  styleUrls: ['./workflow-spec-list.component.scss']
})
export class WorkflowSpecListComponent  {
  workflowSpecs: WorkflowSpec[];

  constructor(private api: ApiService) {
    this.loadWorkflowSpecs();
  }

  loadWorkflowSpecs() {
    this.api.getWorkflowSpecList().subscribe(wf => this.workflowSpecs = wf);
  }
}
