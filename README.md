Interviewstreet Autocomplete
============

An auto complete javascript plugin that automatically queries for the following fields:   

1. Companies 

2. Countries

3. Schools

4. Cities

Prerequisites :
===========

Any javascript autocomplete library  - currently supports jquery-ui.

Usage : 
===========
Include the requisite autocomplete library like this:    
    `<script type="text/javascript" src="jquery-ui.js" > </script>`    
After this include the plugin:  
    `<script type="text/javascript" src="ISAutoComp.js" > </script>`  
Now suppose we have a textarea with id `"auto"` like this:  
    `<textarea id="auto" class="example" rows="1"></textarea>`  
To make this an autocomplete field, simply do this:
    `$('#auto').ISAutoComp({'library':'jquery-ui'});`  
Parameters :
============
1. `'library'` : Specifies which autocomplete library to use - Currently only 1 option `'jquery-ui'`  
2. `'category'` : Specifies the category for autocomplete - Options are : `'school'`, `'country'`, `'city'`, `'company'`  

Example :
============
Autocomplete field for schools:  
`<textarea id="auto" class="example" rows="1"></textarea>`  
`<script type="text/javascript">
$('#auto').ISAutoComp({'library':'jquery-ui','category':'school'});
</script>`


  

