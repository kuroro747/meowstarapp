// 随机猫咪回复
export const getRandomCatReply = () => {
    const replies = [
        "Meow! How can I help you today? 😸",
        "I just ate my favorite treat! 🐟 Yum!",
        "I'm watching the stars... 🌟 What's up?",
        "Purring... 😽 I'm so happy you're here!",
        "I miss our sunny naps on the couch... 🛋️💤",
        "Have you seen my favorite toy? I love it! 🎾",
        "Zzz... I was dreaming of chasing mice... 🐁",
        "Oh no! I knocked something over! 😿",
        "I think I heard something outside... should we go check? 🐾"
    ];
    return replies[Math.floor(Math.random() * replies.length)];
  };
  
  // 随机猫咪行为问候
  export const getRandomGreeting = () => {
    const greetings = [
        "Meow! It's a sunny day on Meow Star! 🌞",
        "Hi there! I'm having a nap today... 💤",
        "Hello! I'm playing with my favorite toy! 🧸",
        "Good day! Watching the stars here... ✨",
        "Hi! I just finished my meal. So full! 🍽️"
    ];
    return greetings[Math.floor(Math.random() * greetings.length)];
  };
  