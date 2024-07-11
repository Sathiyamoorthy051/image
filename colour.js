const imageSources = ['back.jpg','crow.jpg','kido.jpg','logo.jpg','luffy-zoro.webp','luffy.jpg',
'nami.jpg','roronoa-zoro.jpg','sunny.jpg','wanted.jpg','zoro.jpg','onepiece.jpg','allin.jpg'];

        function changeBackgroundImage() {
            const randomIndex = Math.floor(Math.random() * imageSources.length);
            document.body.style.backgroundImage = `url(${imageSources[randomIndex]})`;
        }

        // Change the background image every 5 seconds (5000 milliseconds)
        setInterval(changeBackgroundImage, 900);