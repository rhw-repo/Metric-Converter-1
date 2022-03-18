function calculations() {

    let num1 = 20;
    document.getElementById("start_num").textContent = num1;
    let sum = num1 * 3.28084;
    console.log(sum);
    let sumRounded = Math.round(sum * 1000) / 1000;
    console.log(sumRounded);
    let reverseSum = num1 * 0.3048;
    console.log(reverseSum);
    let reverseSumRounded = Math.round(reverseSum * 1000) / 1000;
    console.log(reverseSumRounded);
    let result = document.getElementById("length_calc");
    result.textContent = num1 + " meters = " + sumRounded + " feet | " + num1 + " feet = " + reverseSumRounded + " meters";


    sum = num1 * 0.264172;
    console.log(sum);
    sumRounded = Math.round(sum * 1000) / 1000;
    console.log(sumRounded);
    reverseSum = num1 * 3.785412;
    console.log(reverseSum);
    reverseSumRounded = Math.round(reverseSum * 1000) / 1000;
    console.log(reverseSumRounded);
    result = document.getElementById("volume_calc");
    result.textContent = num1 + " liters = " + sumRounded + " gallons | " + num1 + " gallons = " + reverseSumRounded + " liters";

    sum = num1 * 2.2046;
    console.log(sum);
    sumRounded = Math.round(sum * 1000) / 1000;
    console.log(sumRounded);
    reverseSum = num1 * 3.785412;
    console.log(reverseSum);
    reverseSumRounded = Math.round(reverseSum * 1000) / 1000;
    console.log(reverseSumRounded);
    result = document.getElementById("mass_calc");
    result.textContent = num1 + " kilograms = " + sumRounded + " pounds | " + num1 + " pounds = " + reverseSumRounded + " kilograms";

}
