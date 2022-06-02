window.onload = () => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    let raf;

    let ball = {
        x: 100,
        y: 100,
        vx: 1,
        vy: 1,
        radius: 25,
        color: 'blue',
        draw: function() {
            let image = new Image();
            image.src = '../assets/images/mael-logo-pins.png';
            console.log(image);
            ctx.beginPath();
            //ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, true);
            ctx.drawImage(image, this.x, this.y, this.radius, 0, Math.PI*2, true);
            ctx.closePath();
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    };

    function draw() {
        ctx.clearRect(0,0, canvas.width, canvas.height);
        ball.draw();
        ball.x += ball.vx;
        ball.y += ball.vy;
        raf = window.requestAnimationFrame(draw);
        if (ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
            ball.vy = -ball.vy;
        }
        if (ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
            ball.vx = -ball.vx;
        }
    }

    canvas.addEventListener('mouseover', function(e){
        raf = window.requestAnimationFrame(draw);
    });

    canvas.addEventListener("mouseout",function(e){
        window.cancelAnimationFrame(raf);
    });

    ball.draw();
}

