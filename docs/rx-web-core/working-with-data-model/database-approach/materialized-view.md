---
title: Materialized View
author: rxcontributorone
category: working-with-data-model
subcategory: database-approach
type:simple
linktitle:materializedview
---
# Materialized View

To perform effective quering becomes much necessary when we want to recieve our desired resultset which depends upon many factors that is the size of the data, integrity of the data. For example you want to show the candidate data and the data is coming from the multiple tables instead of writing complex SQL query or LINQ query from C#, create a Materialized View, this saves the execution time as compared to other approaches. It requires less maintenance. Besides this the data in the views get high availability and resilency benefits.

> It is preferable to create a view if the number of records are limited upto 500 to 3k. If it exceeds it is preferable to create a [stored procedure] for it. The records criteria may change based upon the `JOINS` are used in the view.

In our HumanResourceApplication we have to work on candidates functionality, As we have defined the candidates table and now we are going to define the views for getting the records. Here there are three cases where making materialized view can be helpful which are stated below:

# 1. Displaying List of records
Suppose we want to display a list of candidates, we will make a `vCandidates` view for the same. Here Candidates id the table name and we add a abbreviation `v` which is here meant for a view. We do this to maintain a consistency of the naming convention used all over the application. 

````
CREATE VIEW [dbo].[vCandidates]
AS
SELECT        CandidateId, FirstName, EmailId, CountryId, Designation, Experience
FROM            dbo.Candidates
````

# 2. Displaying Data while Editing
Now we want to display specific fields of the states while edit call, we will make `vStateRecords`. We make seperate view for displaying list of records and editing because there might be some additional column or column value differing from list and edit. For example for displaying list you dont have StatusId column but in edit mode you want that column to be displayed. 

````
CREATE VIEW [dbo].[vStateRecords]
AS
SELECT        StateId, StateName, StatusId
FROM            dbo.States
GO
````

# 3. Binding data in a dropdown 
In some of the areas where we have to bind the name of the countries in the dropdown, in that case we have to define the lookup view of Countries the name should be `vCountryLookups` in this case because we only need fields which are required in the lookup.

````
CREATE VIEW [dbo].[vCountryLookups]
AS
SELECT       CountryId, CountryName
FROM            dbo.Countries
GO
````


