


// part 1
function computeForce() {
    let m = parseFloat(document.getElementById("mass").value);
    let a = parseFloat(document.getElementById("forceAcceleration").value);
    document.getElementById("outputForce").innerHTML = m * a;
}


// part 2
function computeDisplacement() {
    let vi = parseFloat(document.getElementById("initVelocity").value);
    let t = parseFloat(document.getElementById("time").value);
    let a = parseFloat(document.getElementById("dispAcceleration").value);
    document.getElementById("outputDisplacement").innerHTML = (vi * t) - (.5 * a * Math.pow(t, 2));
}


// part 3
function computeQuadratic() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);
    document.getElementById("outputQuad1").innerHTML = (b + Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
    document.getElementById("outputQuad2").innerHTML = (b - Math.sqrt(Math.pow(b, 2) - (4 * a * c))) / (2 * a);
}

// part 4
function computePresentValue() {
    let pmt = parseFloat(document.getElementById("pmt").value);
    let r = parseFloat(document.getElementById("rate").value);
    let n = parseFloat(document.getElementById("n").value);
    document.getElementById("outputPresentVal").innerHTML = pmt * ((1 - Math.pow(1 + r, -n)) / r);
}