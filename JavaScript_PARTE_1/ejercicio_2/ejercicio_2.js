for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        continue;  
    }
    console.log(i);
    if (i === 15) {
        break; 
    }
}
