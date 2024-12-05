// دوال الحساب
function calculateAcceleration() {
    let initialSpeed = parseFloat(document.getElementById('initialSpeed').value);
    let finalSpeed = parseFloat(document.getElementById('finalSpeed').value);
    let time = parseFloat(document.getElementById('time').value);
    let acceleration = (finalSpeed - initialSpeed) / time;
    document.getElementById('accelerationResult').value = acceleration.toFixed(2) + " m/s²";
}

function showAccelerationDimensions() {
    document.getElementById('accelerationDimensions').value = "L/T²";
}

function calculateSpeed() {
    let distance = parseFloat(document.getElementById('distance').value);
    let speedTime = parseFloat(document.getElementById('speedTime').value);
    let speed = distance / speedTime;
    document.getElementById('speedResult').value = speed.toFixed(2) + " m/s";
}

function showSpeedDimensions() {
    document.getElementById('speedDimensions').value = "L/T";
}

function calculateRectangleArea() {
    let length = parseFloat(document.getElementById('length').value);
    let width = parseFloat(document.getElementById('width').value);
    let rectangleArea = length * width;
    document.getElementById('rectangleAreaResult').value = rectangleArea.toFixed(2) + " m²";
}

function showRectangleAreaDimensions() {
    document.getElementById('rectangleAreaDimensions').value = "L²";
}

function calculateCircleArea() {
    let radius = parseFloat(document.getElementById('radius').value);
    let circleArea = Math.PI * radius * radius;
    document.getElementById('circleAreaResult').value = circleArea.toFixed(2) + " m²";
}

function showCircleAreaDimensions() {
    document.getElementById('circleAreaDimensions').value = "L²";
}

function calculateSphereArea() {
    let radius = parseFloat(document.getElementById('sphereRadius').value);
    let sphereArea = 4 * Math.PI * radius * radius;
    document.getElementById('sphereAreaResult').value = sphereArea.toFixed(2) + " m²";
}

function showSphereAreaDimensions() {
    document.getElementById('sphereAreaDimensions').value = "L²";
}

function calculateSquareArea() {
    let side = parseFloat(document.getElementById('side').value);
    let squareArea = side * side;
    document.getElementById('squareAreaResult').value = squareArea.toFixed(2) + " m²";
}

function showSquareAreaDimensions() {
    document.getElementById('squareAreaDimensions').value = "L²";
}

function calculateTriangleArea() {
    let base = parseFloat(document.getElementById('base').value);
    let height = parseFloat(document.getElementById('height').value);
    let triangleArea = 0.5 * base * height;
    document.getElementById('triangleAreaResult').value = triangleArea.toFixed(2) + " m²";
}

function showTriangleAreaDimensions() {
    document.getElementById('triangleAreaDimensions').value = "L²";
}

function calculateCubeVolume() {
    let side = parseFloat(document.getElementById('cubeSide').value);
    let cubeVolume = side * side * side;
    document.getElementById('cubeVolumeResult').value = cubeVolume.toFixed(2) + " m³";
}

function showCubeVolumeDimensions() {
    document.getElementById('cubeVolumeDimensions').value = "L³";
}

function calculateRectPrismVolume() {
    let length = parseFloat(document.getElementById('rectPrismLength').value);
    let width = parseFloat(document.getElementById('rectPrismWidth').value);
    let height = parseFloat(document.getElementById('rectPrismHeight').value);
    let rectPrismVolume = length * width * height;
    document.getElementById('rectPrismVolumeResult').value = rectPrismVolume.toFixed(2) + " m³";
}

function showRectPrismVolumeDimensions() {
    document.getElementById('rectPrismVolumeDimensions').value = "L³";
}

function calculateCylinderVolume() {
    let radius = parseFloat(document.getElementById('cylinderRadius').value);
    let height = parseFloat(document.getElementById('cylinderHeight').value);
    let cylinderVolume = Math.PI * radius * radius * height;
    document.getElementById('cylinderVolumeResult').value = cylinderVolume.toFixed(2) + " m³";
}

function showCylinderVolumeDimensions() {
    document.getElementById('cylinderVolumeDimensions').value = "L³";
}

function calculateForce() {
    let mass = parseFloat(document.getElementById('forceMass').value);
    let acceleration = parseFloat(document.getElementById('forceAcceleration').value);
    let force = mass * acceleration;
    document.getElementById('forceResult').value = force.toFixed(2) + " N";
}

function showForceDimensions() {
    document.getElementById('forceDimensions').value = "M × L/T²";
}

function calculateWork() {
    let force = parseFloat(document.getElementById('workForce').value);
    let distance = parseFloat(document.getElementById('workDistance').value);
    let work = force * distance;
    document.getElementById('workResult').value = work.toFixed(2) + " J";
}

function showWorkDimensions() {
    document.getElementById('workDimensions').value = "M × L²/T";
}

function calculatePressure() {
    let force = parseFloat(document.getElementById('pressureForce').value);
    let area = parseFloat(document.getElementById('pressureArea').value);
    let pressure = force / area;
    document.getElementById('pressureResult').value = pressure.toFixed(2) + " Pa";
}

function showPressureDimensions() {
    document.getElementById('pressureDimensions').value = "M/(L × T²)";
}

function calculateMomentum() {
    let mass = parseFloat(document.getElementById('momentumMass').value);
    let speed = parseFloat(document.getElementById('momentumSpeed').value);
    let momentum = mass * speed;
    document.getElementById('momentumResult').value = momentum.toFixed(2) + " kg·m/s";
}

function showMomentumDimensions() {
    document.getElementById('momentumDimensions').value = "M × L/T";
}

function calculateWeight() {
    let mass = parseFloat(document.getElementById('weightMass').value);
    let gravity = 9.81; // تسارع الجاذبية الأرضية (m/s²)
    let weight = mass * gravity;
    document.getElementById('weightResult').value = weight.toFixed(2) + " N";
}

function showWeightDimensions() {
    document.getElementById('weightDimensions').value = "M × L/T²";
}

function calculateDensity() {
    let mass = parseFloat(document.getElementById('densityMass').value);
    let volume = parseFloat(document.getElementById('densityVolume').value);
    let density = mass / volume;
    document.getElementById('densityResult').value = density.toFixed(2) + " kg/m³";
}

function showDensityDimensions() {
    document.getElementById('densityDimensions').value = "M/L³";
}