<script>
let a= Number(prompt("Adja meg az első számot"));
let b= Number(prompt("Adja meg a második számot!"));



if (a % b == 0){
    document.write(`${a}-nak osztója ${b}`)
}
else{
    document.write(`${a}-nak nem osztója ${b}`)
}

</script>