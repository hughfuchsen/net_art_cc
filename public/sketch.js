// get rid of the default document padding
document.body.style.margin   = 0
document.body.style.overflow = `hidden`





// create a canvas element
const cnv = document.createElement (`canvas`)

// assign the fit to window function
// to the .onresize property
// of the window object
window.onresize = fit_to_window

// append the canvas element to the document body
document.body.appendChild (cnv)


// get the canvas context
const ctx = cnv.getContext ('2d')


// call the fit to window function
// defined below
fit_to_window ()




// pass draw frame function in
// to initiate animation sequence


// rain
let rain = []
//smoke
let smoke = []




requestAnimationFrame (draw_frame)

// define the function that will draw frames
function draw_frame () {

    background('green')

//forestground
    build_wall_layer (110, -150, 1, 200, 111, '#48A812')    
    build_wall_layer (-1000, 400, -1, 200, 111, '#48A812')  
    
// path stones





    
//tree
    
    //trunk - stump


    build_wall_layer (245-542, 90-147, 1, 11, 3, 'brown')
    build_wall_layer (210-542, 75-147, 1, 1, 10, 'brown')
    build_wall_layer (220-542, 75-147, 1, 1, 8, 'brown')
    build_wall_layer (230-542, 75-147, 1, 2, 6, 'brown')
    build_wall_layer (240-542, 75-147, 1, 2, 4, 'brown')
    build_wall_layer (210-542, 75+30-147, -1, 1, 10, 'brown')
    build_wall_layer (220-542, 75+30-147, -1, 1, 8, 'brown')

  

// tree
    //trunk

    build_wall_layer (245+351, 90-293, 1, 100, 3, 'brown')
    build_wall_layer (210+351, 75-293, 1, 1, 10, 'brown')
    build_wall_layer (220+351, 75-293, 1, 1, 8, 'brown')
    build_wall_layer (230+351, 75-293, 1, 2, 6, 'brown')
    build_wall_layer (240+351, 75-293, 1, 2, 4, 'brown')
    build_wall_layer (210+351, 75+30-293, -1, 1, 10, 'brown')
    build_wall_layer (220+351, 75+30-293, -1, 1, 8, 'brown')
    build_wall_layer (230+351, 75+30-293, -1, 2, 6, 'brown')
    build_wall_layer (240+351, 75+30-293, -1, 2, 4, 'brown')

    //canopy 2
    build_wall_layer (260+351, 0-293, 1, 7, 12, '#0c4c00')
    build_wall_layer (260+351, -35-5-293, 1, 7, 11, '#0c4c00')
    build_wall_layer (260+351, -70-5-5-293, 1, 7, 10, '#0c4c00')
    build_wall_layer (260+351, -105-5-5-5-293, 1, 7, 9, '#0c4c00')
    build_wall_layer (260+351, -140-5-5-5-5-293, 1, 7, 8, '#0c4c00')
    build_wall_layer (260+351, -175-5-5-5-5-5-293, 1, 7, 7, '#0c4c00')
    build_wall_layer (260+351, -210-5-5-5-5-5-5-293, 1, 7, 6, '#0c4c00')
    build_wall_layer (260+351, -245-5-5-5-5-5-5-5-293, 1, 7, 5, '#0c4c00')
    build_wall_layer (260+351, -280-5-5-5-5-5-5-5-5-293, 1, 7, 4, '#0c4c00')
    build_wall_layer (260+351, -315-5-5-5-5-5-5-5-5-5-293, 1, 7, 3, '#0c4c00')
    build_wall_layer (260+351, -350-5-5-5-5-5-5-5-5-5-5-293, 1, 7, 2, '#0c4c00')
    build_wall_layer (260+351, -385-5-5-5-5-5-5-5-5-5-5-5-293, 1, 7, 1, '#0c4c00')
    //canopy 3
    build_wall_layer (140+351, -60-293, 1, 7, 12, '#0c4c00')
    build_wall_layer (140+10+351, -35-60-293, 1, 7, 11, '#0c4c00')
    build_wall_layer (140+10+10+351, -70-60-293, 1, 7, 10, '#0c4c00')
    build_wall_layer (140+10+10+10+351, -105-60-293, 1, 7, 9, '#0c4c00')
    build_wall_layer (140+10+10+10+10+351, -140-60-293, 1, 7, 8, '#0c4c00')
    build_wall_layer (140+10+10+10+10+10+351, -175-60-293, 1, 7, 7, '#0c4c00')
    build_wall_layer (140+10+10+10+10+10+10+351, -210-60-293, 1, 7, 6, '#0c4c00')
    build_wall_layer (140+10+10+10+10+10+10+10+351, -245-60-293, 1, 7, 5, '#0c4c00')
    build_wall_layer (140+10+10+10+10+10+10+10+10+351, -280-60-293, 1, 7, 4, '#0c4c00')
    build_wall_layer (140+10+10+10+10+10+10+10+10+10+351, -315-60-293, 1, 7, 3, '#0c4c00')
    build_wall_layer (140+10+10+10+10+10+10+10+10+10+10+351, -350-60-293, 1, 7, 2, '#0c4c00')
    build_wall_layer (140+10+10+10+10+10+10+10+10+10+10+10+351, -385-60-293, 1, 7, 1, '#0c4c00')      

// tree
    //trunk

    build_wall_layer (245-551, 90-328, 1, 100, 3, 'brown')
    build_wall_layer (210-551, 75-328, 1, 1, 10, 'brown')
    build_wall_layer (220-551, 75-328, 1, 1, 8, 'brown')
    build_wall_layer (230-551, 75-328, 1, 2, 6, 'brown')
    build_wall_layer (240-551, 75-328, 1, 2, 4, 'brown')
    build_wall_layer (210-551, 75+30-328, -1, 1, 10, 'brown')
    build_wall_layer (220-551, 75+30-328, -1, 1, 8, 'brown')
    build_wall_layer (230-551, 75+30-328, -1, 2, 6, 'brown')
    build_wall_layer (240-551, 75+30-328, -1, 2, 4, 'brown')

    //canopy 2
    build_wall_layer (260-551, 0-328, 1, 7, 12, '#0c4c00')
    build_wall_layer (260-551, -35-5-328, 1, 7, 11, '#0c4c00')
    build_wall_layer (260-551, -70-5-5-328, 1, 7, 10, '#0c4c00')
    build_wall_layer (260-551, -105-5-5-5-328, 1, 7, 9, '#0c4c00')
    build_wall_layer (260-551, -140-5-5-5-5-328, 1, 7, 8, '#0c4c00')
    build_wall_layer (260-551, -175-5-5-5-5-5-328, 1, 7, 7, '#0c4c00')
    build_wall_layer (260-551, -210-5-5-5-5-5-5-328, 1, 7, 6, '#0c4c00')
    build_wall_layer (260-551, -245-5-5-5-5-5-5-5-328, 1, 7, 5, '#0c4c00')
    build_wall_layer (260-551, -280-5-5-5-5-5-5-5-5-328, 1, 7, 4, '#0c4c00')
    build_wall_layer (260-551, -315-5-5-5-5-5-5-5-5-5-328, 1, 7, 3, '#0c4c00')
    build_wall_layer (260-551, -350-5-5-5-5-5-5-5-5-5-5-328, 1, 7, 2, '#0c4c00')
    build_wall_layer (260-551, -385-5-5-5-5-5-5-5-5-5-5-5-328, 1, 7, 1, '#0c4c00')
    //canopy 3
    build_wall_layer (140-551, -60-328, 1, 7, 12, '#0c4c00')
    build_wall_layer (140+10-551, -35-60-328, 1, 7, 11, '#0c4c00')
    build_wall_layer (140+10+10-551, -70-60-328, 1, 7, 10, '#0c4c00')
    build_wall_layer (140+10+10+10-551, -105-60-328, 1, 7, 9, '#0c4c00')
    build_wall_layer (140+10+10+10+10-551, -140-60-328, 1, 7, 8, '#0c4c00')
    build_wall_layer (140+10+10+10+10+10-551, -175-60-328, 1, 7, 7, '#0c4c00')
    build_wall_layer (140+10+10+10+10+10+10-551, -210-60-328, 1, 7, 6, '#0c4c00')
    build_wall_layer (140+10+10+10+10+10+10+10-551, -245-60-328, 1, 7, 5, '#0c4c00')
    build_wall_layer (140+10+10+10+10+10+10+10+10-551, -280-60-328, 1, 7, 4, '#0c4c00')
    build_wall_layer (140+10+10+10+10+10+10+10+10+10-551, -315-60-328, 1, 7, 3, '#0c4c00')
    build_wall_layer (140+10+10+10+10+10+10+10+10+10+10-551, -350-60-328, 1, 7, 2, '#0c4c00')
    build_wall_layer (140+10+10+10+10+10+10+10+10+10+10+10-551, -385-60-328, 1, 7, 1, '#0c4c00')      

   //tree
    
    //trunk

    build_wall_layer (245-91, 90-349, 1, 100, 3, 'brown')
    build_wall_layer (210-91, 75-349, 1, 1, 10, 'brown')
    build_wall_layer (220-91, 75-349, 1, 1, 8, 'brown')
    build_wall_layer (230-91, 75-349, 1, 2, 6, 'brown')
    build_wall_layer (240-91, 75-349, 1, 2, 4, 'brown')
    build_wall_layer (210-91, 75+30-349, -1, 1, 10, 'brown')
    build_wall_layer (220-91, 75+30-349, -1, 1, 8, 'brown')
    build_wall_layer (230-91, 75+30-349, -1, 2, 6, 'brown')
    build_wall_layer (240-91, 75+30-349, -1, 2, 4, 'brown')

    //canopy 2
    build_wall_layer (260-91, 0-349, 1, 7, 12, '#0c4c00')
    build_wall_layer (260-91, -35-5-349, 1, 7, 11, '#0c4c00')
    build_wall_layer (260-91, -70-5-5-349, 1, 7, 10, '#0c4c00')
    build_wall_layer (260-91, -105-5-5-5-349, 1, 7, 9, '#0c4c00')
    build_wall_layer (260-91, -140-5-5-5-5-349, 1, 7, 8, '#0c4c00')
    build_wall_layer (260-91, -175-5-5-5-5-5-349, 1, 7, 7, '#0c4c00')
    build_wall_layer (260-91, -210-5-5-5-5-5-5-349, 1, 7, 6, '#0c4c00')
    build_wall_layer (260-91, -245-5-5-5-5-5-5-5-349, 1, 7, 5, '#0c4c00')
    build_wall_layer (260-91, -280-5-5-5-5-5-5-5-5-349, 1, 7, 4, '#0c4c00')
    build_wall_layer (260-91, -315-5-5-5-5-5-5-5-5-5-349, 1, 7, 3, '#0c4c00')
    build_wall_layer (260-91, -385-5-5-5-5-5-5-5-5-5-5-5-349, 1, 7, 1, '#0c4c00')
    //canopy 3
    build_wall_layer (140-91, -60-349, 1, 7, 12, '#0c4c00')
    build_wall_layer (140+10-91, -35-60-349, 1, 7, 11, '#0c4c00')
    build_wall_layer (140+10+10-91, -70-60-349, 1, 7, 10, '#0c4c00')
    build_wall_layer (140+10+10+10-91, -105-60-349, 1, 7, 9, '#0c4c00')
    build_wall_layer (140+10+10+10+10-91, -140-60-349, 1, 7, 8, '#0c4c00')
    build_wall_layer (140+10+10+10+10+10-91, -175-60-349, 1, 7, 7, '#0c4c00')
    build_wall_layer (140+10+10+10+10+10+10-91, -210-60-349, 1, 7, 6, '#0c4c00')
    build_wall_layer (140+10+10+10+10+10+10+10-91, -245-60-349, 1, 7, 5, '#0c4c00')
    build_wall_layer (140+10+10+10+10+10+10+10+10-91, -280-60-349, 1, 7, 4, '#0c4c00')
    build_wall_layer (140+10+10+10+10+10+10+10+10+10-91, -315-60-349, 1, 7, 3, '#0c4c00')
    build_wall_layer (140+10+10+10+10+10+10+10+10+10+10+10-91, -385-60-349, 1, 7, 1, '#0c4c00')



    //tree
    
    //trunk

    build_wall_layer (245+143, 90-147, 1, 100, 3, 'brown')
    build_wall_layer (210+143, 75-147, 1, 1, 10, 'brown')
    build_wall_layer (220+143, 75-147, 1, 1, 8, 'brown')
    build_wall_layer (230+143, 75-147, 1, 2, 6, 'brown')
    build_wall_layer (240+143, 75-147, 1, 2, 4, 'brown')
    build_wall_layer (210+143, 75+30-147, -1, 1, 10, 'brown')
    build_wall_layer (220+143, 75+30-147, -1, 1, 8, 'brown')


    //canopy 2
    build_wall_layer (260+143, 0-147, 1, 7, 12, '#0c4c00')
    build_wall_layer (260+143, -35-5-147, 1, 7, 11, '#0c4c00')
    build_wall_layer (260+143, -70-5-5-147, 1, 7, 10, '#0c4c00')
    build_wall_layer (260+143, -105-5-5-5-147, 1, 7, 9, '#0c4c00')
    build_wall_layer (260+143, -140-5-5-5-5-147, 1, 7, 8, '#0c4c00')
    build_wall_layer (260+143, -175-5-5-5-5-5-147, 1, 7, 7, '#0c4c00')
    build_wall_layer (260+143, -210-5-5-5-5-5-5-147, 1, 7, 6, '#0c4c00')
    build_wall_layer (260+143, -245-5-5-5-5-5-5-5-147, 1, 7, 5, '#0c4c00')
    build_wall_layer (260+143, -280-5-5-5-5-5-5-5-5-147, 1, 7, 4, '#0c4c00')
    build_wall_layer (260+143, -315-5-5-5-5-5-5-5-5-5-147, 1, 7, 3, '#0c4c00')
    build_wall_layer (260+143, -385-5-5-5-5-5-5-5-5-5-5-5-147, 1, 7, 1, '#0c4c00')
    //canopy 3
    build_wall_layer (140+143, -60-147, 1, 7, 12, '#0c4c00')
    build_wall_layer (140+10+143, -35-60-147, 1, 7, 11, '#0c4c00')
    build_wall_layer (140+10+10+143, -70-60-147, 1, 7, 10, '#0c4c00')
    build_wall_layer (140+10+10+10+143, -105-60-147, 1, 7, 9, '#0c4c00')
    build_wall_layer (140+10+10+10+10+143, -140-60-147, 1, 7, 8, '#0c4c00')
    build_wall_layer (140+10+10+10+10+10+143, -175-60-147, 1, 7, 7, '#0c4c00')
    build_wall_layer (140+10+10+10+10+10+10+143, -210-60-147, 1, 7, 6, '#0c4c00')
    build_wall_layer (140+10+10+10+10+10+10+10+143, -245-60-147, 1, 7, 5, '#0c4c00')
    build_wall_layer (140+10+10+10+10+10+10+10+10+143, -280-60-147, 1, 7, 4, '#0c4c00')
    build_wall_layer (140+10+10+10+10+10+10+10+10+10+143, -315-60-147, 1, 7, 3, '#0c4c00')
    build_wall_layer (140+10+10+10+10+10+10+10+10+10+10+10+143, -385-60-147, 1, 7, 1, '#0c4c00')


    //tree
    
    //trunk

    build_wall_layer (245-737, 90-252, 1, 100, 3, 'brown')
    build_wall_layer (210-737, 75-252, 1, 1, 10, 'brown')
    build_wall_layer (220-737, 75-252, 1, 1, 8, 'brown')
    build_wall_layer (230-737, 75-252, 1, 2, 6, 'brown')
    build_wall_layer (240-737, 75-252, 1, 2, 4, 'brown')
    build_wall_layer (210-737, 75+30-252, -1, 1, 10, 'brown')
    build_wall_layer (220-737, 75+30-252, -1, 1, 8, 'brown')
    build_wall_layer (230-737, 75+30-252, -1, 2, 6, 'brown')
    build_wall_layer (240-737, 75+30-252, -1, 2, 4, 'brown')

    //canopy 2
    build_wall_layer (260-737, 0-252, 1, 7, 12, '#0c4c00')
    build_wall_layer (260-737, -35-5-252, 1, 7, 11, '#0c4c00')
    build_wall_layer (260-737, -70-5-5-252, 1, 7, 10, '#0c4c00')
    build_wall_layer (260-737, -105-5-5-5-252, 1, 7, 9, '#0c4c00')
    build_wall_layer (260-737, -140-5-5-5-5-252, 1, 7, 8, '#0c4c00')
    build_wall_layer (260-737, -175-5-5-5-5-5-252, 1, 7, 7, '#0c4c00')
    build_wall_layer (260-737, -210-5-5-5-5-5-5-252, 1, 7, 6, '#0c4c00')
    build_wall_layer (260-737, -245-5-5-5-5-5-5-5-252, 1, 7, 5, '#0c4c00')
    build_wall_layer (260-737, -280-5-5-5-5-5-5-5-5-252, 1, 7, 4, '#0c4c00')
    build_wall_layer (260-737, -315-5-5-5-5-5-5-5-5-5-252, 1, 7, 3, '#0c4c00')
    build_wall_layer (260-737, -737-5-5-5-5-5-5-5-5-5-5-252, 1, 7, 2, '#0c4c00')
    build_wall_layer (260-737, -385-5-5-5-5-5-5-5-5-5-5-5-252, 1, 7, 1, '#0c4c00')
    //canopy 3
    build_wall_layer (140-737, -60-252, 1, 7, 12, '#0c4c00')
    build_wall_layer (140+10-737, -35-60-252, 1, 7, 11, '#0c4c00')
    build_wall_layer (140+10+10-737, -70-60-252, 1, 7, 10, '#0c4c00')
    build_wall_layer (140+10+10+10-737, -105-60-252, 1, 7, 9, '#0c4c00')
    build_wall_layer (140+10+10+10+10-737, -140-60-252, 1, 7, 8, '#0c4c00')
    build_wall_layer (140+10+10+10+10+10-737, -175-60-252, 1, 7, 7, '#0c4c00')
    build_wall_layer (140+10+10+10+10+10+10-737, -210-60-252, 1, 7, 6, '#0c4c00')
    build_wall_layer (140+10+10+10+10+10+10+10-737, -245-60-252, 1, 7, 5, '#0c4c00')
    build_wall_layer (140+10+10+10+10+10+10+10+10-737, -280-60-252, 1, 7, 4, '#0c4c00')
    build_wall_layer (140+10+10+10+10+10+10+10+10+10-737, -315-60-252, 1, 7, 3, '#0c4c00')
    build_wall_layer (140+10+10+10+10+10+10+10+10+10+10-737, -737-60-252, 1, 7, 2, '#0c4c00')
    build_wall_layer (140+10+10+10+10+10+10+10+10+10+10+10-737, -385-60-252, 1, 7, 1, '#0c4c00')

    //tree
    
    //trunk

    build_wall_layer (245-302, 90-327, 1, 100, 3, 'brown')
    build_wall_layer (210-302, 75-327, 1, 1, 10, 'brown')
    build_wall_layer (220-302, 75-327, 1, 1, 8, 'brown')
    build_wall_layer (230-302, 75-327, 1, 2, 6, 'brown')
    build_wall_layer (240-302, 75-327, 1, 2, 4, 'brown')
    build_wall_layer (210-302, 75+30-327, -1, 1, 10, 'brown')
    build_wall_layer (220-302, 75+30-327, -1, 1, 8, 'brown')
    build_wall_layer (230-302, 75+30-327, -1, 2, 6, 'brown')
    build_wall_layer (240-302, 75+30-327, -1, 2, 4, 'brown')
    
    //canopy 2
    build_wall_layer (260-302, 0-327, 1, 7, 12, '#0c4c00')
    build_wall_layer (260-302, -35-5-327, 1, 7, 11, '#0c4c00')
    build_wall_layer (260-302, -70-5-5-327, 1, 7, 10, '#0c4c00')
    build_wall_layer (260-302, -105-5-5-5-327, 1, 7, 9, '#0c4c00')
    build_wall_layer (260-302, -140-5-5-5-5-327, 1, 7, 8, '#0c4c00')
    build_wall_layer (260-302, -175-5-5-5-5-5-327, 1, 7, 7, '#0c4c00')
    build_wall_layer (260-302, -210-5-5-5-5-5-5-327, 1, 7, 6, '#0c4c00')
    build_wall_layer (260-302, -245-5-5-5-5-5-5-5-327, 1, 7, 5, '#0c4c00')
    build_wall_layer (260-302, -280-5-5-5-5-5-5-5-5-327, 1, 7, 4, '#0c4c00')
    build_wall_layer (260-302, -315-5-5-5-5-5-5-5-5-5-327, 1, 7, 3, '#0c4c00')
    build_wall_layer (260-302, -302-5-5-5-5-5-5-5-5-5-5-327, 1, 7, 2, '#0c4c00')
    build_wall_layer (260-302, -385-5-5-5-5-5-5-5-5-5-5-5-327, 1, 7, 1, '#0c4c00')
    //canopy 3
    build_wall_layer (140-302, -60-327, 1, 7, 12, '#0c4c00')
    build_wall_layer (140+10-302, -35-60-327, 1, 7, 11, '#0c4c00')
    build_wall_layer (140+10+10-302, -70-60-327, 1, 7, 10, '#0c4c00')
    build_wall_layer (140+10+10+10-302, -105-60-327, 1, 7, 9, '#0c4c00')
    build_wall_layer (140+10+10+10+10-302, -140-60-327, 1, 7, 8, '#0c4c00')
    build_wall_layer (140+10+10+10+10+10-302, -175-60-327, 1, 7, 7, '#0c4c00')
    build_wall_layer (140+10+10+10+10+10+10-302, -210-60-327, 1, 7, 6, '#0c4c00')
    build_wall_layer (140+10+10+10+10+10+10+10-302, -245-60-327, 1, 7, 5, '#0c4c00')
    build_wall_layer (140+10+10+10+10+10+10+10+10-302, -280-60-327, 1, 7, 4, '#0c4c00')
    build_wall_layer (140+10+10+10+10+10+10+10+10+10-302, -315-60-327, 1, 7, 3, '#0c4c00')
    build_wall_layer (140+10+10+10+10+10+10+10+10+10+10-302, -302-60-327, 1, 7, 2, '#0c4c00')
    build_wall_layer (140+10+10+10+10+10+10+10+10+10+10+10-302, -385-60-327, 1, 7, 1, '#0c4c00')



  

  // tree

    //trunk

    build_wall_layer (245-900, 90-123, 1, 100, 3, 'brown')
    build_wall_layer (210-900, 75-123, 1, 1, 10, 'brown')
    build_wall_layer (220-900, 75-123, 1, 1, 8, 'brown')
    build_wall_layer (230-900, 75-123, 1, 2, 6, 'brown')
    build_wall_layer (240-900, 75-123, 1, 2, 4, 'brown')
    build_wall_layer (210-900, 75+30-123, -1, 1, 10, 'brown')
    build_wall_layer (220-900, 75+30-123, -1, 1, 8, 'brown')
    build_wall_layer (230-900, 75+30-123, -1, 2, 6, 'brown')
    build_wall_layer (240-900, 75+30-123, -1, 2, 4, 'brown')

    //canopy 2
    build_wall_layer (260-900, 0-123, 1, 7, 12, '#0c4c00')
    build_wall_layer (260-900, -35-5-123, 1, 7, 11, '#0c4c00')
    build_wall_layer (260-900, -70-5-5-123, 1, 7, 10, '#0c4c00')
    build_wall_layer (260-900, -105-5-5-5-123, 1, 7, 9, '#0c4c00')
    build_wall_layer (260-900, -140-5-5-5-5-123, 1, 7, 8, '#0c4c00')
    build_wall_layer (260-900, -175-5-5-5-5-5-123, 1, 7, 7, '#0c4c00')
    build_wall_layer (260-900, -210-5-5-5-5-5-5-123, 1, 7, 6, '#0c4c00')
    build_wall_layer (260-900, -245-5-5-5-5-5-5-5-123, 1, 7, 5, '#0c4c00')
    build_wall_layer (260-900, -280-5-5-5-5-5-5-5-5-123, 1, 7, 4, '#0c4c00')
    build_wall_layer (260-900, -315-5-5-5-5-5-5-5-5-5-123, 1, 7, 3, '#0c4c00')
    build_wall_layer (260-900, -350-5-5-5-5-5-5-5-5-5-5-123, 1, 7, 2, '#0c4c00')
    build_wall_layer (260-900, -385-5-5-5-5-5-5-5-5-5-5-5-123, 1, 7, 1, '#0c4c00')
    //canopy 3
    build_wall_layer (140-900, -60-123, 1, 7, 12, '#0c4c00')
    build_wall_layer (140+10-900, -35-60-123, 1, 7, 11, '#0c4c00')
    build_wall_layer (140+10+10-900, -70-60-123, 1, 7, 10, '#0c4c00')
    build_wall_layer (140+10+10+10-900, -105-60-123, 1, 7, 9, '#0c4c00')
    build_wall_layer (140+10+10+10+10-900, -140-60-123, 1, 7, 8, '#0c4c00')
    build_wall_layer (140+10+10+10+10+10-900, -175-60-123, 1, 7, 7, '#0c4c00')
    build_wall_layer (140+10+10+10+10+10+10-900, -210-60-123, 1, 7, 6, '#0c4c00')
    build_wall_layer (140+10+10+10+10+10+10+10-900, -245-60-123, 1, 7, 5, '#0c4c00')
    build_wall_layer (140+10+10+10+10+10+10+10+10-900, -280-60-123, 1, 7, 4, '#0c4c00')
    build_wall_layer (140+10+10+10+10+10+10+10+10+10-900, -315-60-123, 1, 7, 3, '#0c4c00')
    build_wall_layer (140+10+10+10+10+10+10+10+10+10+10-900, -350-60-123, 1, 7, 2, '#0c4c00')
    build_wall_layer (140+10+10+10+10+10+10+10+10+10+10+10-900, -385-60-123, 1, 7, 1, '#0c4c00')



    //fence  
        
        
    build_wall_layer (-750, 275, 1, 11, 1, '#88F631')
    build_wall_layer (-750+20, 275-10, 1, 11, 1, '#88F631')
    build_wall_layer (-750+20+20, 275-10-10, 1, 11, 1, '#88F631')
    build_wall_layer (-750+20+20+20, 275-10-10-10, 1, 11, 1, '#88F631')
    build_wall_layer (-750+20+20+20+20, 275-10-10-10-10, 1, 11, 1, '#88F631')
    build_wall_layer (-750+20+20+20+20+20, 275-10-10-10-10-10, 1, 11, 1, '#88F631')
    build_wall_layer (-750+20+20+20+20+20+20, 275-10-10-10-10-10-10, 1, 11, 1, '#88F631')
    build_wall_layer (-750+20+20+20+20+20+20+20, 275-10-10-10-10-10-10-10, 1, 11, 1, '#88F631')
    build_wall_layer (-750+20+20+20+20+20+20+20+20, 275-10-10-10-10-10-10-10-10, 1, 11, 1, '#88F631')
    build_wall_layer (-750+20+20+20+20+20+20+20+20+20, 275-10-10-10-10-10-10-10-10-10, 1, 11, 1, '#88F631')
    build_wall_layer (-750+20+20+20+20+20+20+20+20+20+60+20, 275-10-10-10-10-10-10-10-10-10-30-10, 1, 11, 1, '#88F631')
    build_wall_layer (-750+20+20+20+20+20+20+20+20+20+60+20+20, 275-10-10-10-10-10-10-10-10-10-30-10-10, 1, 11, 1, '#88F631')
    build_wall_layer (-750+20+20+20+20+20+20+20+20+20+60+20+20+20, 275-10-10-10-10-10-10-10-10-10-30-10-10-10, 1, 11, 1, '#88F631')
    build_wall_layer (-750+20+20+20+20+20+20+20+20+20+60+20+20+20+20, 275-10-10-10-10-10-10-10-10-10-30-10-10-10-10, 1, 11, 1, '#88F631')
    build_wall_layer (-750+20+20+20+20+20+20+20+20+20+60+20+20+20+20+20, 275-10-10-10-10-10-10-10-10-10-30-10-10-10-10-10, 1, 11, 1, '#88F631')
    build_wall_layer (-750+20+20+20+20+20+20+20+20+20+60+20+20+20+20+20+20, 275-10-10-10-10-10-10-10-10-10-30-10-10-10-10-10-10, 1, 11, 1, '#88F631')
    build_wall_layer (-750+20+20+20+20+20+20+20+20+20+60+20+20+20+20+20+20+20, 275-10-10-10-10-10-10-10-10-10-30-10-10-10-10-10-10-10, 1, 11, 1, '#88F631')
    build_wall_layer (-750+20+20+20+20+20+20+20+20+20+60+20+20+20+20+20+20+20+20, 275-10-10-10-10-10-10-10-10-10-30-10-10-10-10-10-10-10-10, 1, 11, 1, '#88F631')
    build_wall_layer (-750+20+20+20+20+20+20+20+20+20+60+20+20+20+20+20+20+20+20+20, 275-10-10-10-10-10-10-10-10-10-30-10-10-10-10-10-10-10-10-10, 1, 11, 1, '#88F631')
    build_wall_layer (-750+20+20+20+20+20+20+20+20+20+60+20+20+20+20+20+20+20+20+20+20, 275-10-10-10-10-10-10-10-10-10-30-10-10-10-10-10-10-10-10-10-10, 1, 11, 1, '#88F631')
    build_wall_layer (-310, 55, 1, 11, 1, '#88F631')
    build_wall_layer (-310+20, 55-10, 1, 11, 1, '#88F631')
    build_wall_layer (-310+20+20, 55-10-10, 1, 11, 1, '#88F631')
    build_wall_layer (-310+20+20+20, 55-10-10-10, 1, 11, 1, '#88F631')
    build_wall_layer (-310+20+20+20+20, 55-10-10-10-10, 1, 11, 1, '#88F631')
    build_wall_layer (-310+20+20+20+20+20, 55-10-10-10-10-10, 1, 11, 1, '#88F631')
    build_wall_layer (-310+20+20+20+20+20+20, 55-10-10-10-10-10-10, 1, 11, 1, '#88F631')
    build_wall_layer (-310+20+20+20+20+20+20+20, 55-10-10-10-10-10-10-10, 1, 11, 1, '#88F631')

    build_wall_layer (400, -5, 1, 11, 1, '#88F631')
    build_wall_layer (400+20, -5+10, 1, 11, 1, '#88F631')
    build_wall_layer (400+20+20, -5+10+10, 1, 11, 1, '#88F631')
    build_wall_layer (400+20+20+20, -5+10+10+10, 1, 11, 1, '#88F631')
    build_wall_layer (400+20+20+20+20, -5+10+10+10+10, 1, 11, 1, '#88F631')
    build_wall_layer (400+20+20+20+20+20, -5+10+10+10+10+10, 1, 11, 1, '#88F631')
    build_wall_layer (400+20+20+20+20+20+20, -5+10+10+10+10+10+10, 1, 11, 1, '#88F631')
    build_wall_layer (400+20+20+20+20+20+20+20, -5+10+10+10+10+10+10+10, 1, 11, 1, '#88F631')
    build_wall_layer (400+20+20+20+20+20+20+20+20, -5+10+10+10+10+10+10+10+10, 1, 11, 1, '#88F631')
    build_wall_layer (400+20+20+20+20+20+20+20+20+20, -5+10+10+10+10+10+10+10+10+10, 1, 11, 1, '#88F631') 
    build_wall_layer (400+20+20+20+20+20+20+20+20+20+20, -5+10+10+10+10+10+10+10+10+10+10, 1, 11, 1, '#88F631') 
    build_wall_layer (400+20+20+20+20+20+20+20+20+20+20+20, -5+10+10+10+10+10+10+10+10+10+10+10, 1, 11, 1, '#88F631') 
    build_wall_layer (400+20+20+20+20+20+20+20+20+20+20+20+20, -5+10+10+10+10+10+10+10+10+10+10+10+10, 1, 11, 1, '#88F631') 
    build_wall_layer (400+20+20+20+20+20+20+20+20+20+20+20+20+20, -5+10+10+10+10+10+10+10+10+10+10+10+10+10, 1, 11, 1, '#88F631') 
    build_wall_layer (400+20+20+20+20+20+20+20+20+20+20+20+20+20+20, -5+10+10+10+10+10+10+10+10+10+10+10+10+10+10, 1, 11, 1, '#88F631') 
    build_wall_layer (400+20+20+20+20+20+20+20+20+20+20+20+20+20+20+20, -5+10+10+10+10+10+10+10+10+10+10+10+10+10+10+10, 1, 11, 1, '#88F631') 
    build_wall_layer (400+20+20+20+20+20+20+20+20+20+20+20+20+20+20+20+20, -5+10+10+10+10+10+10+10+10+10+10+10+10+10+10+10+10, 1, 11, 1, '#88F631') 
    build_wall_layer (400+20+20+20+20+20+20+20+20+20+20+20+20+20+20+20+20+20, -5+10+10+10+10+10+10+10+10+10+10+10+10+10+10+10+10+10, 1, 11, 1, '#88F631') 

    // SMOKE BABY

    smoke.push(new Smoke())

    for (plume of smoke) {
        plume.update()
        plume.smokeRender()
        plume.diffusing()
    }


    // check to see if the amounts of smoke plumes are not growing, i.e. slowing the computer
    console.log(smoke.length)       
    for (let i = smoke.length - 1; i >= 0; i--) {
        if (smoke[i].offScreen()) {
            smoke.splice(i, 1);
        }
    }




    // BUILDING

    // function build_wall_layer (x_off_set, y_off_set, direction, wall_height, wall_length, wall_color) {

    //chimney

    build_wall_layer (230, -170, 1, 11, 4, '#e55ea2')

    // walls

    build_wall_layer (200, 180, -1, 30, 20, '#e55ea2')    
    build_wall_layer (-150, 15, 1, 30, 35, 'hotpink') 
       
    build_wall_layer (200, 180, -1, 1, 20, 'pink')  
    build_wall_layer (-150, 15, 1, 1, 35, 'pink')    

    build_wall_layer (200, 35, -1, 3, 22, '#40e0d0')    
    build_wall_layer (-170, -140, 1, 3, 37, 'turquoise') 
    // roof   
    build_wall_layer (200, 20, -1, 1, 21, '#e8abb6')    
    build_wall_layer (-160, -150, 1, 1, 36, 'pink')    

    build_wall_layer (200, 15, -1, 1, 21, '#e8abb6')    
    build_wall_layer (-160, -155, 1, 1, 36, 'pink')    

    build_wall_layer (200, 10, -1, 1, 20, '#40e0d0')    
    build_wall_layer (-150, -155, 1, 1, 35, 'turquoise')    

    build_wall_layer (200, 5, -1, 1, 20, '#40e0d0')    
    build_wall_layer (-150, -160, 1, 1, 35, 'turquoise')    

    build_wall_layer (200, 0, -1, 1, 19, '#e8abb6')    
    build_wall_layer (-140, -160, 1, 1, 34, 'pink')    

    build_wall_layer (200, -5, -1, 1, 19, '#e8abb6')    
    build_wall_layer (-140, -165, 1, 1, 34, 'pink')    

    build_wall_layer (200, -10, -1, 1, 18, '#40e0d0')    
    build_wall_layer (-130, -165, 1, 1, 33, 'turquoise')    

    build_wall_layer (200, -15, -1, 1, 18, '#40e0d0')    
    build_wall_layer (-130, -170, 1, 1, 33, 'turquoise')    

    build_wall_layer (200, -20, -1, 1, 17, '#e8abb6')    
    build_wall_layer (-120, -170, 1, 1, 32, 'pink')    

    build_wall_layer (200, -25, -1, 1, 17, '#e8abb6')    
    build_wall_layer (-120, -175, 1, 1, 32, 'pink')    

    build_wall_layer (200, -30, -1, 1, 16, '#40e0d0')    
    build_wall_layer (-110, -175, 1, 1, 31, 'turquoise')    

    build_wall_layer (200, -35, -1, 1, 16, '#40e0d0')    
    build_wall_layer (-110, -180, 1, 1, 31, 'turquoise')    

    build_wall_layer (200, -40, -1, 1, 15, '#e8abb6')    
    build_wall_layer (-100, -180, 1, 1, 30, 'pink')    

    build_wall_layer (200, -45, -1, 1, 15, '#e8abb6')    
    build_wall_layer (-100, -185, 1, 1, 30, 'pink')    

    build_wall_layer (200, -50, -1, 1, 14, '#40e0d0')    
    build_wall_layer (-90, -185, 1, 1, 29, 'turquoise')    

    build_wall_layer (200, -55, -1, 1, 14, '#40e0d0')    
    build_wall_layer (-90, -190, 1, 1, 29, 'turquoise')    

    build_wall_layer (200, -60, -1, 1, 13, '#e8abb6')    
    build_wall_layer (-80, -190, 1, 1, 28, 'pink')    

    build_wall_layer (200, -65, -1, 1, 13, '#e8abb6')    
    build_wall_layer (-80, -195, 1, 1, 28, 'pink')    

    build_wall_layer (200, -70, -1, 1, 12, '#40e0d0')    
    build_wall_layer (-70, -195, 1, 1, 27, 'turquoise')    

    build_wall_layer (200, -75, -1, 1, 12, '#40e0d0')    
    build_wall_layer (-70, -200, 1, 1, 27, 'turquoise')    

    build_wall_layer (200, -80, -1, 1, 11, '#e8abb6')    
    build_wall_layer (-60, -200, 1, 1, 26, 'pink')    

    build_wall_layer (200, -85, -1, 1, 11, '#e8abb6')    
    build_wall_layer (-60, -205, 1, 1, 26, 'pink')    

    build_wall_layer (200, -90, -1, 1, 10, '#40e0d0')    
    build_wall_layer (-50, -205, 1, 1, 25, 'turquoise')    

    build_wall_layer (200, -95, -1, 1, 10, '#40e0d0')    
    build_wall_layer (-50, -210, 1, 1, 25, 'turquoise')    

    build_wall_layer (200, -100, -1, 1, 9, '#e8abb6')    
    build_wall_layer (-40, -210, 1, 1, 24, 'pink')    

    build_wall_layer (200, -105, -1, 1, 9, '#e8abb6')    
    build_wall_layer (-40, -215, 1, 1, 24, 'pink')    

    build_wall_layer (200, -110, -1, 1, 8, '#40e0d0')    
    build_wall_layer (-30, -215, 1, 1, 23, 'turquoise')    

    build_wall_layer (200, -115, -1, 1, 8, '#40e0d0')    
    build_wall_layer (-30, -220, 1, 1, 23, 'turquoise')    

    build_wall_layer (200, -120, -1, 1, 7, '#e8abb6')    
    build_wall_layer (-20, -220, 1, 1, 22, 'pink')    

    build_wall_layer (200, -125, -1, 1, 7, '#e8abb6')    
    build_wall_layer (-20, -225, 1, 1, 22, 'pink')    

    build_wall_layer (200, -130, -1, 1, 6, '#40e0d0')    
    build_wall_layer (-10, -225, 1, 1, 21, 'turquoise')    

    build_wall_layer (200, -135, -1, 1, 6, '#40e0d0')    
    build_wall_layer (-10, -230, 1, 1, 21, 'turquoise')    

    build_wall_layer (200, -140, -1, 1, 5, '#e8abb6')    
    build_wall_layer (0, -230, 1, 1, 20, 'pink')    

    build_wall_layer (200, -145, -1, 1, 5, '#e8abb6')    
    build_wall_layer (0, -235, 1, 1, 20, 'pink')    

    build_wall_layer (200, -150, -1, 1, 4, '#40e0d0')    
    build_wall_layer (10, -235, 1, 1, 19, 'turquoise')    

    build_wall_layer (200, -155, -1, 1, 4, '#40e0d0')    
    build_wall_layer (10, -240, 1, 1, 19, 'turquoise')    

    build_wall_layer (200, -160, -1, 1, 3, '#e8abb6')    
    build_wall_layer (20, -240, 1, 1, 18, 'pink')    

    build_wall_layer (200, -165, -1, 1, 3, '#e8abb6')    
    build_wall_layer (20, -245, 1, 1, 18, 'pink')    

    build_wall_layer (200, -170, -1, 1, 2, '#40e0d0')    
    build_wall_layer (30, -245, 1, 1, 17, 'turquoise')    

    build_wall_layer (200, -175, -1, 1, 2, '#40e0d0')    
    build_wall_layer (30, -250, 1, 1, 17, 'turquoise')    

    build_wall_layer (200, -180, -1, 1, 1, '#e8abb6')    
    build_wall_layer (40, -250, 1, 1, 16, 'pink')    

    build_wall_layer (200, -185, -1, 1, 1, '#e8abb6')    
    build_wall_layer (40, -255, 1, 1, 16, 'pink')

    build_wall_layer (50, -255, 1, 1, 15, 'turquoise')    
    build_wall_layer (50, -260, 1, 1, 15, 'turquoise') 
    
    // door
    build_wall_layer (50, 115, 1, 25, 6, 'pink')
    ctx.fillStyle = 'black'
    rectangle_base ((cnv.width / 2) + 55, (cnv.height / 2) + 70, 5, 5)

    // window
    build_wall_layer (-130, -10, 1, 7, 3, 'skyblue')
    build_wall_layer (-130, -50, 1, 7, 3, 'skyblue')

    build_wall_layer (-95, 5, 1, 7, 3, 'skyblue')
    build_wall_layer (-95, -35, 1, 7, 3, 'skyblue')

    // window
    build_wall_layer (-35, 35, 1, 7, 3, 'skyblue')
    build_wall_layer (-35, -5, 1, 7, 3, 'skyblue')

    build_wall_layer (0, 50, 1, 7, 3, 'skyblue')
    build_wall_layer (0, 10, 1, 7, 3, 'skyblue')


    // other side (right)
    // window
    build_wall_layer (210, 135, -1, 7, 3, 'skyblue')
    build_wall_layer (210, 95, -1, 7, 3, 'skyblue')

    build_wall_layer (245, 120, -1, 7, 3, 'skyblue')
    build_wall_layer (245, 80, -1, 7, 3, 'skyblue')



    // bike 
    ctx.fillStyle = 'black'
    rectangle_base ((cnv.width / 2) + 715  + 105 - 500, (cnv.height / 2) - 75 + 200, 5, 5)
    rectangle_base ((cnv.width / 2) + 715  + 105 - 495, (cnv.height / 2) - 75 + 195, 5, 5)
    rectangle_base ((cnv.width / 2) + 715  + 105 - 505, (cnv.height / 2) - 75 + 205, 5, 5)
    rectangle_base ((cnv.width / 2) + 715  + 105 - 510, (cnv.height / 2) - 75 + 210, 5, 5)
    rectangle_base ((cnv.width / 2) + 715  + 105 - 515, (cnv.height / 2) - 75 + 205, 5, 5)
    rectangle_base ((cnv.width / 2) + 715  + 105 - 520, (cnv.height / 2) - 75 + 200, 5, 5)
    rectangle_base ((cnv.width / 2) + 715  + 105 - 525, (cnv.height / 2) - 75 + 195, 5, 5)
    rectangle_base ((cnv.width / 2) + 715  + 105 - 525, (cnv.height / 2) - 75 + 190, 5, 5)
    rectangle_base ((cnv.width / 2) + 715  - 420, (cnv.height / 2) - 75 + 185, 5, 5)
    rectangle_base ((cnv.width / 2) + 715  - 415, (cnv.height / 2) - 75 + 180, 5, 5)
    rectangle_base ((cnv.width / 2) + 715  - 410, (cnv.height / 2) - 75 + 175, 5, 5)
    rectangle_base ((cnv.width / 2) + 715  + 105 - 495, (cnv.height / 2) - 75 + 190, 5, 5)
    rectangle_base ((cnv.width / 2) + 715  + 105 - 495, (cnv.height / 2) - 75 + 185, 5, 5)
    rectangle_base ((cnv.width / 2) + 715  + 105 - 500, (cnv.height / 2) - 75 + 180, 5, 5)
    rectangle_base ((cnv.width / 2) + 715  + 105 - 505, (cnv.height / 2) - 75 + 175, 5, 5)
    ctx.fillStyle = 'grey'
    rectangle_base ((cnv.width / 2) + 715  - 405, (cnv.height / 2) - 75 + 180-5-5, 5, 5)
    rectangle_base ((cnv.width / 2) + 715  - 405, (cnv.height / 2) - 75 + 185-5-5, 5, 5)
    rectangle_base ((cnv.width / 2) + 715  - 405, (cnv.height / 2) - 75 + 190-5-5, 5, 5)
    rectangle_base ((cnv.width / 2) + 715  - 405, (cnv.height / 2) - 75 + 190-5, 5, 5)
    rectangle_base ((cnv.width / 2) + 715  - 405, (cnv.height / 2) - 75 + 170-5, 5, 5)
    rectangle_base ((cnv.width / 2) + 715  - 405, (cnv.height / 2) - 75 + 165-5, 5, 5)
    rectangle_base ((cnv.width / 2) + 715  - 400, (cnv.height / 2) - 75 + 165-5, 5, 5)
    rectangle_base ((cnv.width / 2) + 715  - 395, (cnv.height / 2) - 75 + 165-5, 5, 5)
    rectangle_base ((cnv.width / 2) + 715  - 410, (cnv.height / 2) - 75 + 165-5, 5, 5)
    rectangle_base ((cnv.width / 2) + 715  - 415, (cnv.height / 2) - 75 + 165-5, 5, 5)
    rectangle_base ((cnv.width / 2) + 715  - 415, (cnv.height / 2) - 75 + 160-5, 5, 5)
    rectangle_base ((cnv.width / 2) + 715  - 395, (cnv.height / 2) - 75 + 160-5, 5, 5)
    rectangle_base ((cnv.width / 2) + 715  + 105 - 505+50, (cnv.height / 2) - 75 + 175-10, 5, 5)
    
    
    ctx.fillStyle = 'black'
    rectangle_base ((cnv.width / 2) + 715  + 105 - 500+55, (cnv.height / 2) - 75 + 200-25, 5, 5)
    rectangle_base ((cnv.width / 2) + 715  + 105 - 495+55, (cnv.height / 2) - 75 + 195-25, 5, 5)
    rectangle_base ((cnv.width / 2) + 715  + 105 - 505+55, (cnv.height / 2) - 75 + 205-25, 5, 5)
    rectangle_base ((cnv.width / 2) + 715  + 105 - 510+55, (cnv.height / 2) - 75 + 210-25, 5, 5)
    rectangle_base ((cnv.width / 2) + 715  + 105 - 515+55, (cnv.height / 2) - 75 + 205-25, 5, 5)
    rectangle_base ((cnv.width / 2) + 715  + 105 - 520+55, (cnv.height / 2) - 75 + 200-25, 5, 5)
    rectangle_base ((cnv.width / 2) + 715  + 105 - 525+55, (cnv.height / 2) - 75 + 195-25, 5, 5)
    rectangle_base ((cnv.width / 2) + 715  + 105 - 525+55, (cnv.height / 2) - 75 + 190-25, 5, 5)
    rectangle_base ((cnv.width / 2) + 715  - 420+55, (cnv.height / 2) - 75 + 185-25, 5, 5)
    rectangle_base ((cnv.width / 2) + 715  - 415+55, (cnv.height / 2) - 75 + 180-25, 5, 5)
    rectangle_base ((cnv.width / 2) + 715  - 410+55, (cnv.height / 2) - 75 + 175-25, 5, 5)
    rectangle_base ((cnv.width / 2) + 715  + 105 - 495+55, (cnv.height / 2) - 75 + 190-25, 5, 5)
    rectangle_base ((cnv.width / 2) + 715  + 105 - 495+55, (cnv.height / 2) - 75 + 185-25, 5, 5)
    rectangle_base ((cnv.width / 2) + 715  + 105 - 500+55, (cnv.height / 2) - 75 + 180-25, 5, 5)
    rectangle_base ((cnv.width / 2) + 715  + 105 - 505+55, (cnv.height / 2) - 75 + 175-25, 5, 5)
    rectangle_base ((cnv.width / 2) + 715  + 105 - 505+50, (cnv.height / 2) - 75 + 175-30, 5, 5)
    
    
    ctx.fillStyle = '#0c4c00'
    
    rectangle_base ((cnv.width / 2) + 715  + 105 - 505, (cnv.height / 2) - 75 + 165, 5, 5)
    rectangle_base ((cnv.width / 2) + 715  + 105 - 500, (cnv.height / 2) - 75 + 170, 5, 5)
    rectangle_base ((cnv.width / 2) + 715  + 105 - 495, (cnv.height / 2) - 75 + 175, 5, 5)
    rectangle_base ((cnv.width / 2) + 715  + 105 - 490, (cnv.height / 2) - 75 + 180, 5, 5)
    rectangle_base ((cnv.width / 2) + 715  + 105 - 485, (cnv.height / 2) - 75 + 175, 5, 5)
    rectangle_base ((cnv.width / 2) + 715  + 105 - 480, (cnv.height / 2) - 75 + 170, 5, 5)
    rectangle_base ((cnv.width / 2) + 715  + 105 - 475, (cnv.height / 2) - 75 + 165, 5, 5)
    
    ctx.fillStyle = 'blue'
    rectangle_base ((cnv.width / 2) + 715  + 105 - 475, (cnv.height / 2) - 75 + 160, 5, 5)
    rectangle_base ((cnv.width / 2) + 715  + 105 - 475, (cnv.height / 2) - 75 + 160-5, 5, 5)
    rectangle_base ((cnv.width / 2) + 715  + 105 - 475, (cnv.height / 2) - 75 + 160-5-5, 5, 5)
    rectangle_base ((cnv.width / 2) + 715  + 105 - 475+5, (cnv.height / 2) - 75 + 160-5-5, 5, 5)
    rectangle_base ((cnv.width / 2) + 715  + 105 - 475-5, (cnv.height / 2) - 75 + 160-5-5, 5, 5)
    
 

    // stone path


    build_wall_layer (0, 145, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (0, 150, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (10, 150, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (10, 155, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (20, 155, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (20, 160, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (30, 160, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (30, 165, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (40, 165, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (40, 170, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (50, 170, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (50, 175, -1, 1, 5, 'rgb(155, 102, 102)')    

    build_wall_layer (0-50-10, 145+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (0-50-10, 150+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (10-50-10, 150+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (10-50-10, 155+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (20-50-10, 155+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (20-50-10, 160+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (30-50-10, 160+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (30-50-10, 165+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (40-50-10, 165+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (40-50-10, 170+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (50-50-10, 170+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (50-50-10, 175+30, -1, 1, 5, 'rgb(155, 102, 102)')    
 
    build_wall_layer (0-50-10-60, 145+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (0-50-10-60, 150+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (10-50-10-60, 150+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (10-50-10-60, 155+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (20-50-10-60, 155+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (20-50-10-60, 160+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (30-50-10-60, 160+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (30-50-10-60, 165+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (40-50-10-60, 165+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (40-50-10-60, 170+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (50-50-10-60, 170+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (50-50-10-60, 175+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    

    build_wall_layer (0-50-10-60-60, 145+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (0-50-10-60-60, 150+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (10-50-10-60-60, 150+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (10-50-10-60-60, 155+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (20-50-10-60-60, 155+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (20-50-10-60-60, 160+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (30-50-10-60-60, 160+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (30-50-10-60-60, 165+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (40-50-10-60-60, 165+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (40-50-10-60-60, 170+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (50-50-10-60-60, 170+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (50-50-10-60-60, 175+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
 
    build_wall_layer (0-50-10-60-60-60, 145+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (0-50-10-60-60-60, 150+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (10-50-10-60-60-60, 150+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (10-50-10-60-60-60, 155+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (20-50-10-60-60-60, 155+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (20-50-10-60-60-60, 160+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (30-50-10-60-60-60, 160+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (30-50-10-60-60-60, 165+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (40-50-10-60-60-60, 165+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (40-50-10-60-60-60, 170+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (50-50-10-60-60-60, 170+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (50-50-10-60-60-60, 175+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    
    build_wall_layer (0-50-10-60-60-60-60, 145+30+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (0-50-10-60-60-60-60, 150+30+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (10-50-10-60-60-60-60, 150+30+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (10-50-10-60-60-60-60, 155+30+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (20-50-10-60-60-60-60, 155+30+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (20-50-10-60-60-60-60, 160+30+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (30-50-10-60-60-60-60, 160+30+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (30-50-10-60-60-60-60, 165+30+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (40-50-10-60-60-60-60, 165+30+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (40-50-10-60-60-60-60, 170+30+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (50-50-10-60-60-60-60, 170+30+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (50-50-10-60-60-60-60, 175+30+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    
    build_wall_layer (0-50-10-60-60-60-60-60, 145+30+30+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (0-50-10-60-60-60-60-60, 150+30+30+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (10-50-10-60-60-60-60-60, 150+30+30+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (10-50-10-60-60-60-60-60, 155+30+30+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (20-50-10-60-60-60-60-60, 155+30+30+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (20-50-10-60-60-60-60-60, 160+30+30+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (30-50-10-60-60-60-60-60, 160+30+30+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (30-50-10-60-60-60-60-60, 165+30+30+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (40-50-10-60-60-60-60-60, 165+30+30+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (40-50-10-60-60-60-60-60, 170+30+30+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (50-50-10-60-60-60-60-60, 170+30+30+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (50-50-10-60-60-60-60-60, 175+30+30+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
   
    build_wall_layer (0-50-10-60-60-60-60-60-60, 145+30+30+30+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (0-50-10-60-60-60-60-60-60, 150+30+30+30+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (10-50-10-60-60-60-60-60-60, 150+30+30+30+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (10-50-10-60-60-60-60-60-60, 155+30+30+30+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (20-50-10-60-60-60-60-60-60, 155+30+30+30+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (20-50-10-60-60-60-60-60-60, 160+30+30+30+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (30-50-10-60-60-60-60-60-60, 160+30+30+30+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (30-50-10-60-60-60-60-60-60, 165+30+30+30+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (40-50-10-60-60-60-60-60-60, 165+30+30+30+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (40-50-10-60-60-60-60-60-60, 170+30+30+30+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (50-50-10-60-60-60-60-60-60, 170+30+30+30+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (50-50-10-60-60-60-60-60-60, 175+30+30+30+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
   
    build_wall_layer (0-50-10-60-60-60-60-60-60-60, 145+30+30+30+30+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (0-50-10-60-60-60-60-60-60-60, 150+30+30+30+30+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (10-50-10-60-60-60-60-60-60-60, 150+30+30+30+30+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (10-50-10-60-60-60-60-60-60-60, 155+30+30+30+30+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (20-50-10-60-60-60-60-60-60-60, 155+30+30+30+30+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (20-50-10-60-60-60-60-60-60-60, 160+30+30+30+30+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (30-50-10-60-60-60-60-60-60-60, 160+30+30+30+30+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (30-50-10-60-60-60-60-60-60-60, 165+30+30+30+30+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (40-50-10-60-60-60-60-60-60-60, 165+30+30+30+30+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (40-50-10-60-60-60-60-60-60-60, 170+30+30+30+30+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (50-50-10-60-60-60-60-60-60-60, 170+30+30+30+30+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (50-50-10-60-60-60-60-60-60-60, 175+30+30+30+30+30+30+30+30, -1, 1, 5, 'rgb(155, 102, 102)')    

    build_wall_layer (0-50-10-60-60-60-60-60-30, 145+30+30+30+30+30+30-60, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (0-50-10-60-60-60-60-60-30, 150+30+30+30+30+30+30-60, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (10-50-10-60-60-60-60-60-30, 150+30+30+30+30+30+30-60, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (10-50-10-60-60-60-60-60-30, 155+30+30+30+30+30+30-60, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (20-50-10-60-60-60-60-60-30, 155+30+30+30+30+30+30-60, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (20-50-10-60-60-60-60-60-30, 160+30+30+30+30+30+30-60, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (30-50-10-60-60-60-60-60-30, 160+30+30+30+30+30+30-60, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (30-50-10-60-60-60-60-60-30, 165+30+30+30+30+30+30-60, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (40-50-10-60-60-60-60-60-30, 165+30+30+30+30+30+30-60, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (40-50-10-60-60-60-60-60-30, 170+30+30+30+30+30+30-60, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (50-50-10-60-60-60-60-60-30, 170+30+30+30+30+30+30-60, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (50-50-10-60-60-60-60-60-30, 175+30+30+30+30+30+30-60, -1, 1, 5, 'rgb(155, 102, 102)')    
   
    build_wall_layer (0-50-10-60-60-60-60-60-30-60-10-70, 145+30+30+30+30+30+30-60-30-5-35, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (0-50-10-60-60-60-60-60-30-60-10-70, 150+30+30+30+30+30+30-60-30-5-35, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (10-50-10-60-60-60-60-60-30-60-10-70, 150+30+30+30+30+30+30-60-30-5-35, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (10-50-10-60-60-60-60-60-30-60-10-70, 155+30+30+30+30+30+30-60-30-5-35, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (20-50-10-60-60-60-60-60-30-60-10-70, 155+30+30+30+30+30+30-60-30-5-35, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (20-50-10-60-60-60-60-60-30-60-10-70, 160+30+30+30+30+30+30-60-30-5-35, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (30-50-10-60-60-60-60-60-30-60-10-70, 160+30+30+30+30+30+30-60-30-5-35, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (30-50-10-60-60-60-60-60-30-60-10-70, 165+30+30+30+30+30+30-60-30-5-35, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (40-50-10-60-60-60-60-60-30-60-10-70, 165+30+30+30+30+30+30-60-30-5-35, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (40-50-10-60-60-60-60-60-30-60-10-70, 170+30+30+30+30+30+30-60-30-5-35, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (50-50-10-60-60-60-60-60-30-60-10-70, 170+30+30+30+30+30+30-60-30-5-35, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (50-50-10-60-60-60-60-60-30-60-10-70, 175+30+30+30+30+30+30-60-30-5-35, -1, 1, 5, 'rgb(155, 102, 102)')    
   
    build_wall_layer (0-50-10-60-60-60-60-60-30-70, 145+30+30+30+30+30+30-60-35, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (0-50-10-60-60-60-60-60-30-70, 150+30+30+30+30+30+30-60-35, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (10-50-10-60-60-60-60-60-30-70, 150+30+30+30+30+30+30-60-35, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (10-50-10-60-60-60-60-60-30-70, 155+30+30+30+30+30+30-60-35, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (20-50-10-60-60-60-60-60-30-70, 155+30+30+30+30+30+30-60-35, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (20-50-10-60-60-60-60-60-30-70, 160+30+30+30+30+30+30-60-35, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (30-50-10-60-60-60-60-60-30-70, 160+30+30+30+30+30+30-60-35, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (30-50-10-60-60-60-60-60-30-70, 165+30+30+30+30+30+30-60-35, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (40-50-10-60-60-60-60-60-30-70, 165+30+30+30+30+30+30-60-35, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (40-50-10-60-60-60-60-60-30-70, 170+30+30+30+30+30+30-60-35, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (50-50-10-60-60-60-60-60-30-70, 170+30+30+30+30+30+30-60-35, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (50-50-10-60-60-60-60-60-30-70, 175+30+30+30+30+30+30-60-35, -1, 1, 5, 'rgb(155, 102, 102)')    
 
    build_wall_layer (0-50-10+70, 145+30+35, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (0-50-10+70, 150+30+35, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (10-50-10+70, 150+30+35, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (10-50-10+70, 155+30+35, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (20-50-10+70, 155+30+35, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (20-50-10+70, 160+30+35, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (30-50-10+70, 160+30+35, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (30-50-10+70, 165+30+35, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (40-50-10+70, 165+30+35, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (40-50-10+70, 170+30+35, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (50-50-10+70, 170+30+35, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (50-50-10+70, 175+30+35, -1, 1, 5, 'rgb(155, 102, 102)') 
 
    build_wall_layer (0-50-10+140, 145+30+70, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (0-50-10+140, 150+30+70, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (10-50-10+140, 150+30+70, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (10-50-10+140, 155+30+70, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (20-50-10+140, 155+30+70, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (20-50-10+140, 160+30+70, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (30-50-10+140, 160+30+70, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (30-50-10+140, 165+30+70, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (40-50-10+140, 165+30+70, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (40-50-10+140, 170+30+70, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (50-50-10+140, 170+30+70, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (50-50-10+140, 175+30+70, -1, 1, 5, 'rgb(155, 102, 102)') 

    build_wall_layer (0-50-10+210, 145+30+105, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (0-50-10+210, 150+30+105, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (10-50-10+210, 150+30+105, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (10-50-10+210, 155+30+105, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (20-50-10+210, 155+30+105, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (20-50-10+210, 160+30+105, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (30-50-10+210, 160+30+105, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (30-50-10+210, 165+30+105, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (40-50-10+210, 165+30+105, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (40-50-10+210, 170+30+105, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (50-50-10+210, 170+30+105, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (50-50-10+210, 175+30+105, -1, 1, 5, 'rgb(155, 102, 102)') 

    build_wall_layer (0-50-10+280, 145+30+140, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (0-50-10+280, 150+30+140, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (10-50-10+280, 150+30+140, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (10-50-10+280, 155+30+140, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (20-50-10+280, 155+30+140, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (20-50-10+280, 160+30+140, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (30-50-10+280, 160+30+140, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (30-50-10+280, 165+30+140, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (40-50-10+280, 165+30+140, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (40-50-10+280, 170+30+140, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (50-50-10+280, 170+30+140, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (50-50-10+280, 175+30+140, -1, 1, 5, 'rgb(155, 102, 102)') 

    build_wall_layer (0-50-10+350, 145+30+175, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (0-50-10+350, 150+30+175, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (10-50-10+350, 150+30+175, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (10-50-10+350, 155+30+175, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (20-50-10+350, 155+30+175, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (20-50-10+350, 160+30+175, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (30-50-10+350, 160+30+175, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (30-50-10+350, 165+30+175, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (40-50-10+350, 165+30+175, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (40-50-10+350, 170+30+175, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (50-50-10+350, 170+30+175, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (50-50-10+350, 175+30+175, -1, 1, 5, 'rgb(155, 102, 102)') 

    build_wall_layer (0-50-10+410, 145+30+145, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (0-50-10+410, 150+30+145, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (10-50-10+410, 150+30+145, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (10-50-10+410, 155+30+145, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (20-50-10+410, 155+30+145, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (20-50-10+410, 160+30+145, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (30-50-10+410, 160+30+145, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (30-50-10+410, 165+30+145, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (40-50-10+410, 165+30+145, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (40-50-10+410, 170+30+145, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (50-50-10+410, 170+30+145, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (50-50-10+410, 175+30+145, -1, 1, 5, 'rgb(155, 102, 102)') 
       
    build_wall_layer (0-50-10+470, 145+30+115, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (0-50-10+470, 150+30+115, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (10-50-10+470, 150+30+115, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (10-50-10+470, 155+30+115, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (20-50-10+470, 155+30+115, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (20-50-10+470, 160+30+115, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (30-50-10+470, 160+30+115, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (30-50-10+470, 165+30+115, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (40-50-10+470, 165+30+115, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (40-50-10+470, 170+30+115, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (50-50-10+470, 170+30+115, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (50-50-10+470, 175+30+115, -1, 1, 5, 'rgb(155, 102, 102)') 
    
    build_wall_layer (0-50-10+530, 145+30+85, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (0-50-10+530, 150+30+85, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (10-50-10+530, 150+30+85, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (10-50-10+530, 155+30+85, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (20-50-10+530, 155+30+85, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (20-50-10+530, 160+30+85, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (30-50-10+530, 160+30+85, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (30-50-10+530, 165+30+85, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (40-50-10+530, 165+30+85, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (40-50-10+530, 170+30+85, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (50-50-10+530, 170+30+85, -1, 1, 5, 'rgb(155, 102, 102)')    
    build_wall_layer (50-50-10+530, 175+30+85, -1, 1, 5, 'rgb(155, 102, 102)') 
    
    

    


    //raindrops

    rain.push(new RainDrop())

    for (droplet of rain) {
        droplet.update()
        droplet.recursiveWaterRender(1)
        
    }

    // check to see if the amounts of RainDrops are not growing, i.e. slowing the computer
    console.log(rain.length)
    for (let i = rain.length - 1; i >= 0; i--) {
        if (rain[i].offScreen()) {
            rain.splice(i, 1);
        }
    }

    // recursively call itself for ongoing animation
    requestAnimationFrame (draw_frame)
}





//Thomas C: 
// fits the canvas element to 
// the dimensions of the viewport
function fit_to_window () {
    cnv.width  = window.innerWidth  
    cnv.height = window.innerHeight 
}
//Thomas C: 
// accepts a colour
// and then covers the whole canvas
// with that colour
function background (c) {
    ctx.fillStyle = c
    ctx.fillRect (0, 0, cnv.width, cnv.height)        
}



// Build a fundamental rectangle that is later used to be drawn out in the build_wall_layer() function

  //Thomas C:   // takes x and y coordinates, and size,
                // and adjusts the x and y coordinates
                // to specify the center of the square
                // rather than the top left corner
function rectangle_base (x_pos, y_pos, base_width, base_height) {
    const h = base_height / 2
    const x = x_pos - h
    const y = y_pos - h
    
    ctx.fillRect (x, y, base_width, base_height)
}



// build a foundational function that can draw the 10px by 5px squares in diagonal line formations

// wall height is set as a parameter in the for loop, then the same is done for wall length to make this
// foundation easy to manipulate
function build_wall_layer (x_off_set, y_off_set, direction, wall_height, wall_length, wall_color) {
    for (let j = 0; j < wall_height; j++) {

        for (let i = 0; i < wall_length; i++) {
            
            ctx.fillStyle = wall_color        
            
            rectangle_base ((cnv.width / 2) + (10 * i) + x_off_set, (cnv.height / 2) + (5 * direction * i) - (j * 5)+ y_off_set, 10, 5)
        }
    }    
}


 





