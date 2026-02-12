// Snowflakes effect
var sf = new Snowflakes({
    color: "#ffd700",
    minSize: 20
});

// Wait for DOM to be ready before accessing elements
window.addEventListener('DOMContentLoaded', function() {
    // Get name from URL parameter
    try {
        var url_string = window.location.href;
        var url = new URL(url_string);
        var nameParam = url.searchParams.get("name");

        if (nameParam != null && nameParam != "" && nameParam != "null") {
            document.getElementById("name").innerHTML = nameParam;
            document.getElementById("nae").innerHTML = nameParam;
        }
        // If no URL parameter, the HTML default name "Malarvizhi" will be used
    } catch(e) {
        // If URL parsing fails, keep default name from HTML
        console.log("Using default name from HTML");
    }
});

// Start button click handler
document.getElementById('play').addEventListener('click', function() {
    document.querySelector(".loader").style.display = 'none';
    document.querySelector(".main").style.display = 'block';
    sf.destroy();
    
    // Animate balloons
    var balloons = document.querySelector('.balloon-border');
    balloons.style.transition = 'bottom 8s ease-out';
    balloons.style.bottom = '0px';
    
    // Play audio if available
    var audio = document.querySelector('.song');
    if (audio) {
        audio.play().catch(function(error) {
            console.log("Audio autoplay prevented");
        });
    }
    
    // Start typing animation
    var typed = new Typed("#typed", {
        stringsElement: '#typed-strings',
        typeSpeed: 30,
        backSpeed: 10,
        loop: true
    });
});

// Confetti animation
document.addEventListener("DOMContentLoaded", function() {
    var canvas = document.getElementById('confetti');
    var ctx = canvas.getContext('2d');
    var retina = window.devicePixelRatio || 1;
    
    canvas.width = window.innerWidth * retina;
    canvas.height = window.innerHeight * retina;
    
    var confettiPieces = [];
    var confettiCount = 50;
    var colors = ['#df0049', '#660671', '#00e857', '#005291', '#2bebbc', '#05798a', '#ffd200', '#b06c00'];
    
    function ConfettiPiece() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height - canvas.height;
        this.size = Math.random() * 5 + 5;
        this.speedY = Math.random() * 3 + 2;
        this.speedX = Math.random() * 2 - 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.rotation = Math.random() * 360;
        this.rotationSpeed = Math.random() * 10 - 5;
    }
    
    ConfettiPiece.prototype.update = function() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.rotation += this.rotationSpeed;
        
        if (this.y > canvas.height) {
            this.y = -10;
            this.x = Math.random() * canvas.width;
        }
    };
    
    ConfettiPiece.prototype.draw = function() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation * Math.PI / 180);
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
        ctx.restore();
    };
    
    for (var i = 0; i < confettiCount; i++) {
        confettiPieces.push(new ConfettiPiece());
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        for (var i = 0; i < confettiPieces.length; i++) {
            confettiPieces[i].update();
            confettiPieces[i].draw();
        }
        
        requestAnimationFrame(animate);
    }
    
    animate();
    
    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth * retina;
        canvas.height = window.innerHeight * retina;
    });
});


// Function to open gift boxes
function openGift(giftBox) {
    if (!giftBox.classList.contains('opened')) {
        giftBox.classList.add('opened');
        
        // Play a pop sound effect (optional)
        // You can add an audio element if you want sound
        
        // Add sparkle effect
        createSparkles(giftBox);
    }
}

// Create sparkle effect when gift opens
function createSparkles(element) {
    const sparkles = ['✨', '⭐', '💫', '🌟'];
    const rect = element.getBoundingClientRect();
    
    for (let i = 0; i < 8; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.textContent = sparkles[Math.floor(Math.random() * sparkles.length)];
        sparkle.style.left = rect.left + rect.width / 2 + 'px';
        sparkle.style.top = rect.top + rect.height / 2 + 'px';
        
        const angle = (Math.PI * 2 * i) / 8;
        const distance = 100;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        
        sparkle.style.setProperty('--tx', tx + 'px');
        sparkle.style.setProperty('--ty', ty + 'px');
        
        document.body.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 1000);
    }
}
