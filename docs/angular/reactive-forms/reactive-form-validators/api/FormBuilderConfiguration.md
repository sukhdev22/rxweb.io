---
title: FormBuilderConfiguration
description: FormBuilderConfiguration is used to create object property instance and array property instance through dynamic configuration in your formGroup. 
author: rxcontributorone
category: api
type: simple
linktitle: FormBuilderConfiguration
---
FormBuilderconfiguration is used for dynamic validation of the FormControl as well as some other activities like to create an instance of nested objects on runtime. 
This gives flixibility to add new properties or exclude the properties while using the Decorator based validation approach.

While using nested formGroup in reactive forms, if your nested object property is undefined then the formbuilder will not create the nested formgroup, In such case you need to pass dynamic configuration which is done through FormBuilderConfiguration.

# Create an object instance
If you have nested formGroup in your component and you may not have that particular property in your model class in your component, decorator cannot configure property.  

In such case, object property instance can be created using `objectPropInstanceConfig` which comes under `AutoInstanceConfig` interface,you need to set the propertyName of the object into it.

For example you have a user form and during edit you want a property named `state` which doesnt exist in your model class, so it can be created using it, Lets see how
<data-scope scope="['decorator']">
<div component="app-code" key="FormBuilderConfiguration-objectinstance-component"></div> 
<div component="app-example-runner" ref-component="app-formbuilderconfiguration-object" title="creating object instance" key="object"></div>
</data-scope>

# Create an array instance
While accessing formGroup controls, if your array object is not defined and you want to create array object instance at runtime, it can be created using `arrayPropInstanceConfig` in which you can set the property name and number of row items you want.

<data-scope scope="['decorator']">
<div component="app-code" key="FormBuilderConfiguration-arrayinstance-component"></div>
<div component="app-example-runner" ref-component="app-formbuilderconfiguration-arrayobject" title="creating array object instance" key="arrayobject"></div> 
</data-scope>

# Include and exclude properties
While accessing the data in formGroup, based upon the operation you want to perform If you want to include or exclude properties from your formGroup which are already defined in model class, It can be done using `includeProps` and `excludeProps` just set the propetyNames which you want to include or exclude in it. 

<data-scope scope="['decorator']">
<div component="app-code" key="FormBuilderConfiguration-include-component"></div> 
<div component="app-example-runner" ref-component="app-formbuilderconfiguration-includeprops" title="Include and exclude properties" key="includeprops"></div> 
</data-scope>

# Apply validation to all props
This is used when to want to apply validation to all formControls. It can be done using `allProps` property 

<div component="app-code" key="FormBuilderConfiguration-allprops-component"></div> 
<div component="app-example-runner" ref-component="app-formbuilderconfiguration-allprops" title="AllProps to set validation to all formControls" key="allprops"></div>

# Dynamically set default value
This is mainly used to apply the default value through the component instead of defining into the decorator.  

<div component="app-code" key="FormBuilderConfiguration-dynamicdefault-component"></div> 
<div component="app-example-runner" ref-component="app-formbuilderconfiguration-dynamicdefault" title="Setting default value dynamically with prop" key="dynamicdefault"></div>

# Generic Entities
It is used to set generic entity which needs to be accessed in the formGroup using `genericEntities` property by passing entity with abstract class.

<div component="app-code" key="FormBuilderConfiguration-genericentities-component"></div> 
<div component="app-example-runner" ref-component="app-formbuilderconfiguration-genericentities" title="Setting generic entities" key="genericentities"></div>

# ignoreUndefinedProps
This is used to ignore the undefined properties dynamically using `formBuilderConfiguration`.

<data-scope scope="['decorator']">
<div component="app-code" key="FormBuilderConfiguration-ignoreundefined-component"></div> 
<div component="app-example-runner" ref-component="app-formbuilderconfiguration-ignoreundefined" title="ignoreundefined properties" key="ignoreundefined"></div> 
</data-scope>

