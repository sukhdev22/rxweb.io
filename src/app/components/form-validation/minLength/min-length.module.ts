import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';


import { MIN_LENGTH_COMPONENT_EXAMPLE_CONSTANT } from "src/app/components/form-validation/minLength/min-length.constants";

import { COMPONENT_EXAMPLE } from "src/app/domain/application.const";
import { MIN_LENGTH_ROUTING } from "src/app/components/form-validation/minLength/min-length.routing";
import { PageModule } from "src/app/components/page/page.module";



@NgModule({
  imports: [MIN_LENGTH_ROUTING,PageModule],
  exports: [RouterModule],
    providers:[{ provide: COMPONENT_EXAMPLE, useValue: MIN_LENGTH_COMPONENT_EXAMPLE_CONSTANT }]
  })
export class MinLengthModule { }



