import { Component, OnInit } from '@angular/core';
import {
  EFFECTS_CODE,
  REDUCER_CODE,
  DISPATCH_ACTIONS_CODE,
  SUBSCRIBE_STATE_CODE,
  MANAGE_TEMPLATE_CODE1,
  MANAGE_TEMPLATE_CODE2
} from '../../constants/docs.constants';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.scss']
})
export class DocumentationComponent implements OnInit {
  effectsCode = EFFECTS_CODE;
  reducerCode = REDUCER_CODE;
  dispatchActionsCode = DISPATCH_ACTIONS_CODE;
  subscribeStateCode = SUBSCRIBE_STATE_CODE;
  manageTemplateCode1 = MANAGE_TEMPLATE_CODE1;
  manageTemplateCode2 = MANAGE_TEMPLATE_CODE2;

  constructor() { }

  ngOnInit() {
  }

}
