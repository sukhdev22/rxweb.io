import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { CHOICE_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/choice/choice.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { CHOICE_ROUTING } from "src/app/components/form-validation/choice/choice.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [CHOICE_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: CHOICE_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class ChoiceModule { }



