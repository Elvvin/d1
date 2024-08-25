function run(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(run(-500, 1000));


function start(){
    document.getElementById("circle").style.marginTop = `${run(-50, 900)}px`;
    document.getElementById("circle").style.marginLeft = `${run(-50, 900)}px`;
}

setTimeout(function stop(){
    return location.reload();
}, 3000)