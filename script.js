function revealGift() {
      document.getElementById('giftMessage').style.display = 'block';
      for (let i = 0; i < 30; i++) {
        let emoji = document.createElement('div');
        emoji.classList.add('emoji');
        emoji.innerText = ['🎉','🎈','💖','🎁','✨'][Math.floor(Math.random() * 5)];
        emoji.style.left = Math.random() * 100 + "vw";
        emoji.style.animationDelay = Math.random() * 2 + "s";
        document.getElementById('emojiRain').appendChild(emoji);
      }
    }