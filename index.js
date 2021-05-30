setInterval(() => {
     d=new Date();
     ht=d.getHours();
     mt=d.getMinutes();
     st=d.getSeconds();
     hr=ht*30+mt/2;
     mr=mt*6;
     sr=st*6;
     hour.style.transform = `rotate(${hr}deg)`;
     minute.style.transform = `rotate(${mr}deg)`;
     second.style.transform = `rotate(${sr}deg)`;

}, 1000);