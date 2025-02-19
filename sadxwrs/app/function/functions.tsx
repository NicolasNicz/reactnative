const getTime = (lePB: any): string => {
    let heure = Math.floor(lePB / 360000);
    let minute = Math.floor((lePB % 360000) / 6000);
    let second = Math.floor((lePB % 6000) / 100);
    let ms = lePB % 100;
  
    // Ajout de zéros devant si le temps est par exemple : "58.05" au lieu de "0:58.05"
    const pad = (num: number, size: number) => num.toString().padStart(size, "0");
  
    if (ms === 100) {
      ms = 0;
      second++;
    }
  
    const timeString = heure > 0 
      ? `${heure}:${pad(minute, 2)}:${pad(second, 2)}.${pad(ms, 2)}` //Si le temps est au moins une heure => heure:minute:seconde.ms
      : `${minute}:${pad(second, 2)}.${pad(ms, 2)}`; //sinon minute:seconde.ms
  
    return timeString;
  };

export { getTime }