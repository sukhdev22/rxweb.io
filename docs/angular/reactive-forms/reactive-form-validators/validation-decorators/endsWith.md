---
title: endsWith
description: endsWith validation {{validatorType}} allows user to validate the input which ends with particular value.
author: rxcontributortwo
category: form-validations
subcategory: String
type: tabs
linktitle: endsWith
---

<div class="title-bar top_title"><p>{{Title}}</p></div> <div class="title-bar"><p>endsWith validation {{validatorType}} allows user to validate the input which ends with particular value.</p></div>

# When to use
Suppose you want to create a user form, which contains fields like name, profession, taskId and company and you want the user to enter input which ends with a particular value. Here depending upon the requirement, these scenarios may arise..

<ol class='showHideElement'>
  <li>Apply validation on name field in which you want the user to enter value which ends with ‘t’.</li>
  <li>Apply endsWith validation based on matched condition in the form, like if the name is 'Bharat', then the profession must ends with 'r' (Consitional Expressionx with function).</li>
  <li>Apply endsWith validation based on matched condition in the form, like if the name is 'Bharat', then the taskId must ends with '1' (Consitional Expression with string).</li>
  <li>Adding custom validation message to the company field </li>
  <li>Shows the custom message on `Skill` field by using `messageKey` property.</li>
  <data-scope scope="['decorator','validator']">
    <li>Apply endsWith validation dynamically based on server rules.</li>
  </data-scope>
</ol>
Let's see how endsWith  {{validatorType}}  fulfil the need.

# Basic EndsWith Validation
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
First we need to create a User model and define a property of name in the model to achieve the functional need of point 1.
<div component="app-code" key="endsWith-add-model"></div> 
</data-scope>
Through Angular FormBuilder service we create FormGroup in the component.
<data-scope scope="['decorator']">
Here we have covered Add and Edit form operations. 
</data-scope>

<data-scope scope="['validator','template-driven-directives','template-driven-decorators']">
Here we have covered Add form operations. 
</data-scope>

<data-scope scope="['decorator']">
<div component="app-tabs" key="basic-operations"></div>
[!TabGroup]
# [Add](#tab\basicadd)
<div component="app-code" key="endsWith-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="endsWith-add-html"></div> 
<div component="app-example-runner" ref-component="app-endsWith-add"></div>
# [/Add]
# [Edit](#tab\basicedit)
<div component="app-code" key="endsWith-edit-component"></div>

The below default data which is coming from the server in this example of edit form which is set in the `user-data.json` in json format like this:
<div component="app-code" key="endsWith-edit-json"></div> 
Next, we need to write html code.
<div component="app-code" key="endsWith-edit-html"></div> 
<div component="app-example-runner" ref-component="app-endsWith-edit"></div>
# [/Edit]
***
</data-scope>

<data-scope scope="['validator','template-driven-directives','template-driven-decorators']">
<div component="app-code" key="endsWith-add-component"></div> 
Next, we need to write html code.
<div component="app-code" key="endsWith-add-html"></div> 
<div component="app-example-runner" ref-component="app-endsWith-add"></div>
</data-scope>

# DefaultConfig
<data-scope scope="['decorator']">
Below options are not mandatory to use in the `@endsWith()` decorator. If needed then use the below options.
</data-scope>
<data-scope scope="['validator']">
Below options are not mandatory to use in the `RxwebValidators.endsWith()` validator. If needed then use the below options.
</data-scope>
<data-scope scope="['template-driven-directives','template-driven-decorators']">
Below options are not mandatory to use in the `endsWith` validation. If needed then use the below options.
</data-scope>

<table class="table table-bordered table-striped showHideElement">
<tr><th>Option</th><th>Description</th></tr>
<tr><td><a  (click)='scrollTo("#conditionalExpression")'   title="conditionalExpression">conditionalExpression</a></td><td>EndsWith validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work same as client function.</td></tr>
<tr><td><a  (click)='scrollTo("#message")'  title="message">message</a></td><td>To override the global configuration message and set the custom error message on respective FormControl</td></tr>
<tr><td><a (click)='scrollTo("#messageKey")' title="messageKey">messageKey</a></td><td>messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.</td></tr>
<tr><td><a (click)='scrollTo("#value")'   title="value">value</a></td><td>value property of DefaultConfig is used to assign a value based on which the user wants validation to be performed.</td></tr>
</table>

## conditionalExpression 
Type :  `Function`  |  `string` 

EndsWith validation should be applied if the condition is matched in the `conditionalExpression` function. Validation framework will pass two parameters at the time of `conditionalExpression` check. Those two parameters are current `FormGroup` value and root `FormGroup` value. You can apply the condition on respective object value.
If there is need of dynamic validation means it is not fixed in client code, it will change based on some criterias. In this scenario you can bind the expression based on the expression value is coming from the web server in `string` format. The `conditionalExpression` will work same as client function.

> This won't work if you return without expression or fixed boolean value true or false; like : `conditionalExpression: (x) => x.toggle`

<data-scope scope="['validator','decorator']">
> Binding `conditionalExpression` with `Function` object.
<div component="app-code" key="endsWith-conditionalExpressionExampleFunction-model"></div> 
</data-scope>

> Binding `conditionalExpression` with `string` object.
<div component="app-code" key="endsWith-conditionalExpressionExampleString-model"></div> 

<div component="app-example-runner" ref-component="app-endsWith-conditionalExpression" title="endsWith {{validatorType}} with conditionalExpression" key="conditionalExpression"></div>

## message 
Type :  `string` 

To override the global configuration message and set the custom message on respective FormControl.

<div component="app-code" key="endsWith-messageExample-model"></div> 
<div component="app-example-runner" ref-component="app-endsWith-message" title="endsWith {{validatorType}} with message" key="message"></div>

## messageKey
Type : `string`

messageKey property of BaseConfig can be used when the user wants to show a different custom validation message on some of their fields. User can define a custom messageKey globally by defining it in ReactiveFormConfig and set it in the message property of the validation.

<div component="app-code" key="endsWith-messageKeyExample-model"></div> 
<div component="app-example-runner" ref-component="app-endsWith-messageKey" title="endsWith {{validatorType}} with messageKey" key="messageKey"></div>

## value
Type :  `string` 

value property of DefaultConfig is used to assign a value based on which the user wants validation to be performed.

<div component="app-code" key="endsWith-valueExample-model"></div> 
<div component="app-example-runner" ref-component="app-endsWith-value" title="endsWith {{validatorType}} with value" key="value"></div>

# Complete endsWith Example

This Complete endsWith example which includes all the DefaultConfig properties will fulfil the requirement of scenarios 1, 2, 3 and 4.

<div component="app-tabs" key="complete"></div>
[!TabGroup]
# [Example](#tab\completeexample)
<div component="app-example-runner" ref-component="app-endsWith-complete"></div>
# [/Example]
<data-scope scope="['decorator','template-driven-directives','template-driven-decorators']">
# [Model](#tab\completemodel)
<div component="app-code" key="endsWith-complete-model"></div> 
# [/Model]
</data-scope>
# [Component](#tab\completecomponent)
<div component="app-code" key="endsWith-complete-component"></div> 
# [/Component]
# [Html](#tab\completehtml)
<div component="app-code" key="endsWith-complete-html"></div> 
# [/Html]
***

<data-scope scope="['decorator','validator']">
# Dynamic endsWith Example

This Dynamic EndsWith example is executed on the basis of json passed in the formBuilderConfiguration which comes under `RxFormBuilder` of reactive-form-validators. `conditionalExpression` with function would not be applied in dynamic endsWith example. This example will fulfil the requirement of our last point.

<div component="app-tabs" key="dynamic"></div>

[!TabGroup]
# [Example](#tab\dynamicexample)
<div component="app-example-runner" ref-component="app-endsWith-dynamic"></div>
# [/Example]
<data-scope scope="['decorator']">
# [Model](#tab\dynamicmodel)
<div component="app-code" key="endsWith-dynamic-model"></div>
# [/Model]
</data-scope>
# [Component](#tab\dynamiccomponent)
<div component="app-code" key="endsWith-dynamic-component"></div>
# [/Component]
# [Json](#tab\dynamicjson)
<div component="app-code" key="endsWith-dynamic-json"></div>
# [/Json]
# [Html](#tab\dynamichtml)
<div component="app-code" key="endsWith-dynamic-html"></div> 
# [/Html]
***
</data-scope>
