function pp(u) {
    let x = 0;
    u.forEach(i => {
      x += i;
    });
    return x;
  }
  
  let aa = [10000, 20000, 30000];
  console.log(pp(aa));