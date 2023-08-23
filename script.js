const clock = document.querySelector('.clock')

const tick = () => {
    const now = new Date();
    Hour = now.getHours();
    min = now.getMinutes();
    sec = now.getSeconds();
    //console.log(Hour, min, sec)
    const html = `
        <span>${Hour}</span> : 
        <span>${min}</span> : 
        <span>${sec}</span>
        `;
        clock.innerHTML = html;
};

setInterval(tick, 1000);