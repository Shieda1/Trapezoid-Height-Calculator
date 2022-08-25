// https://calculator.swiftutors.com/trapezoid-height-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const heightofTrapezoidRadio = document.getElementById('heightofTrapezoidRadio');
const areaofTrapezoidRadio = document.getElementById('areaofTrapezoidRadio');
const base1LengthRadio = document.getElementById('base1LengthRadio');
const base2LengthRadio = document.getElementById('base2LengthRadio');

let heightofTrapezoid;
let areaofTrapezoid = v1;
let base1Length = v2;
let base2Length = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

heightofTrapezoidRadio.addEventListener('click', function() {
  variable1.textContent = '(A) Area of Trapezoid (cm²)';
  variable2.textContent = '(B1) Base 1 Length (cm)';
  variable3.textContent = '(B2) Base 2 Length (cm)';
  areaofTrapezoid = v1;
  base1Length = v2;
  base2Length = v3;
  result.textContent = '';
});

areaofTrapezoidRadio.addEventListener('click', function() {
  variable1.textContent = 'Height of Trapezoid (cm)';
  variable2.textContent = '(B1) Base 1 Length (cm)';
  variable3.textContent = '(B2) Base 2 Length (cm)';
  heightofTrapezoid = v1;
  base1Length = v2;
  base2Length = v3;
  result.textContent = '';
});

base1LengthRadio.addEventListener('click', function() {
  variable1.textContent = 'Height of Trapezoid (cm)';
  variable2.textContent = '(A) Area of Trapezoid (cm²)';
  variable3.textContent = '(B2) Base 2 Length (cm)';
  heightofTrapezoid = v1;
  areaofTrapezoid = v2;
  base2Length = v3;
  result.textContent = '';
});

base2LengthRadio.addEventListener('click', function() {
  variable1.textContent = 'Height of Trapezoid (cm)';
  variable2.textContent = '(A) Area of Trapezoid (cm²)';
  variable3.textContent = '(B1) Base 1 Length (cm)';
  heightofTrapezoid = v1;
  areaofTrapezoid = v2;
  base1Length = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(heightofTrapezoidRadio.checked)
    result.textContent = `Height of Trapezoid = ${computeHeightofTrapezoid().toFixed(2)} cm`;

  else if(areaofTrapezoidRadio.checked)
    result.textContent = `Area of Trapezoid = ${computeAreaofTrapezoid().toFixed(2)} cm²`;

  else if(base1LengthRadio.checked)
    result.textContent = `Base 1 Length = ${computeBase1Length().toFixed(2)} cm`;

  else if(base2LengthRadio.checked)
    result.textContent = `Base 2 Length = ${computeBase2Length().toFixed(2)} cm`;
})

// calculation

function computeHeightofTrapezoid () {
  return (2 * Number(areaofTrapezoid.value)) / (Number(base1Length.value) + Number(base2Length.value));
}

function computeAreaofTrapezoid() {
  return ((Number(base1Length.value) + Number(base2Length.value)) * Number(heightofTrapezoid.value)) / 2;
}

function computeBase1Length() {
  return ((Number(areaofTrapezoid.value) * 2) / Number(heightofTrapezoid.value)) - Number(base2Length.value);
}

function computeBase2Length() {
  return ((Number(areaofTrapezoid.value) * 2) / Number(heightofTrapezoid.value)) - Number(base1Length.value);
}