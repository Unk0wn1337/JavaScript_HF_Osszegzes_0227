export function szamolandoErtekVisszadas(szam){
    let osszeg = 0;
    for (let index = 1; index <= szam; index++) {
        osszeg += index;
    }
    return osszeg
       
}