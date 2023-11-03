{
    //
    //Assertion

    const kgToGm = (value: string | number | undefined) => {
        if(typeof value === 'string') {
            const convertedValue = parseFloat(value);
            const convertedValueInGm = convertedValue * 1000;
            return `Your converted result is : ${convertedValueInGm} gm`;
        }
        else if (typeof value === 'number') {
            return value * 1000;
        }
        else {
            return 'You must provide a value to convert';
        }
    }

    const result1 = kgToGm(1000) as number;
    console.log(result1);
    const result2 = kgToGm('1000') as string;
    console.log(result2);
    const result3 = kgToGm(undefined);
    console.log(result3);

    //
}