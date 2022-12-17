# design doc 

# note
* use main.js imported into idex.hmtl for dynamic loading of js files. you will need to build routing and html fetching into the js file itself
* use router.js to fetch different html templates. you can only have one js script running 
* it is not possible OOB or advisable to RYR in vanilla js to try to load js files dynamically without page refreshes (SPA), however it is very easy to do this with html and just use a single js file for the whole app.