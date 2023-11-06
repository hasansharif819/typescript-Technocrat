{
    //Mappped Type


    const arrayOfNUmber : number[] = [1, 5, 88, 34]

    const arrayOfString : string[] = arrayOfNUmber.map(number => number.toString())

    console.log(arrayOfString)

    type AreaNumber = {
        height : number,
        width : number
    }

    type Height = AreaNumber['height'] // Look up type
    type Width  = AreaNumber['width'] // Look up type

    // type AreaString = {
    //     height : string,
    //     width : string
    // }

    type areaString = {
        // [key in 'height' | 'width'] : string
        [key in keyof AreaNumber] : string //This value indicate the type
    }


    // Generic Mapped // flexible mapped
    type GenericArea<T> = {
        [key in keyof T] : T[key] //lookup type
    }

    const area1: GenericArea<{height: string, width: number}> = {
        height : '50',
        width : 100
    }


    //
}