// scenes.ts

export const scenes = [
    {
      id: 'scene_1',
      image: 'scene_1.png',
      steps: [
        { text: "You are asleep on a soft couch. Everything is quiet." }
      ],
      nextSceneId: 'scene_2',
    },
    {
      id: 'scene_2',
      image: 'scene_2.png',
      steps: [
        { text: "A strange dream lingers in your whiskers, but it fades as you begin to stir..." }
      ],
      nextSceneId: 'scene_3',
    },
    {
      id: 'scene_3',
      image: 'scene_3.png',
      steps: [
        { text: "Your eyes flutter open. The room feels unfamiliar." }
      ],
      nextSceneId: 'scene_4',
    },
    {
      id: 'scene_4',
      image: 'scene_4.png',
      steps: [
        { text: "Your fur is ruffled, and your tail twitches involuntarily." }
      ],
      nextSceneId: 'scene_5',
    },
    {
      id: 'scene_5',
      image: 'scene_5.png',
      steps: [
        { text: "Something feels... off. You don’t remember how you got here." }
      ],
      nextSceneId: 'scene_6',
    },
    {
      id: 'scene_6',
      image: 'scene_6.png',
      steps: [
        { text: "Your ears perk up. You stretch your back, spine arching like a bow." },
        { text: "Still, the unease remains." }
      ],
      nextSceneId: 'scene_7',
    },
    {
      id: 'scene_7',
      image: 'scene_7.png',
      steps: [
        { text: "On the floor, near the coffee table, lies a girl." },
        { text: "She is still—too still. Is she sleeping? Or...?" },
        { text: "You need to find out what happened. Maybe looking around will help you remember." }
      ],
      choices: [
        { text: "Approach the Girl", nextSceneId: 'scene_8' },
        { text: "Investigate the Apartment", nextSceneId: 'scene_11' }
      ]
    },
    // Approach the Girl path
    {
      id: 'scene_8',
      image: 'scene_8.png',
      steps: [
        { text: "You step closer and gently nudge her with your paw." }      ],
      nextSceneId: 'scene_9',
    },
    {
      id: 'scene_9',
      image: 'scene_9.png',
      steps: [
        { text: "No response. Her breathing is shallow, almost imperceptible." }
      ],
      nextSceneId: 'scene_10',
    },
    {
      id: 'scene_10',
      image: 'scene_10.png',
      steps: [
        { text: "A strange scent lingers around her." },
        { text: "You recognize it... but you don’t know why." }
      ],
      nextSceneId: 'ending_choices',
    },
  
    // Investigate the Apartment path
    {
      id: 'scene_11',
      image: 'scene_11.png',
      steps: [
        { text: "In the kitchen, a broken glass lies on the floor." },
        { text: "There’s spilled milk... and something that smells metallic." },
        { text: "Blood?" }
      ],
      nextSceneId: 'scene_12',
    },
    {
      id: 'scene_12',
      image: 'scene_12.png',
      steps: [
        { text: "The bedroom is chaotic." },
        { text: "A photograph sits cracked on the wall—of you and the girl." },
        { text: "Am I... her cat?" }
      ],
      nextSceneId: 'scene_13',
    },
    {
      id: 'scene_13',
      image: 'scene_13.png',
      steps: [
        { text: "In the bathroom, a bottle lies near the sink." },
        { text: "The label is faded, but the scent is familiar..." },
        { text: "There are two toothbrushes. Is she living here with anyone else?" }
      ],
      nextSceneId: 'ending_choices',
    },
  
    // Endings
    {
      id: 'ending_choices',
      image: 'scene_14.png', // reused until user makes a choice
      steps: [
        { text: "Time is running out. You realize you must act." },
        { text: "What will you do? Remember, the options you choose next will change your life... FOREVER" }
      ],
      choices: [
        { text: "try to wake the girl up", nextSceneId: 'scene_15' },
        { text: "find way to get out of here", nextSceneId: 'scene_17' },
        { text: "face whatever is coming in here", nextSceneId: 'scene_19' },
        { text: "just wait or go back to sleep", nextSceneId: 'scene_21' }
      ]
    },
    {
      id: 'scene_15',
      image: 'scene_15.png',
      steps: [
        { text: "You lick her cheek gently. Her eyes flutter open." }
      ]
    },
    {
      id: 'scene_16',
      image: 'scene_16.png',
      steps: [
        { text: "She gasps for air, weak but alive. You stay by her side." },
        { text: "You are a Loyal Guardian." },
        { text: "You are someone who puts others first, even when the world is crumbling around you. Loyalty is your anchor, and love is your compass. When things fall apart, you don’t run—you reach out, even if it hurts. You believe in the quiet power of presence, and the strength of simply being there when it matters most. People may not always notice the weight you carry, but you carry it anyway. And in doing so, you become someone others can trust, even in the dark." }
      ]
    },
    {
      id: 'scene_17',
      image: 'scene_17.png',
      steps: [
        { text: "A breeze blows in from the cracked window." },
        { text: "Something inside you says run." }
      ],
      nextSceneId: 'scene_18'
    },
    {
      id: 'scene_18',
      image: 'scene_18.png',
      steps: [
        { text: "You leap onto the sill and slip into the night." },
        { text: "You are a Wandering Soul." },
        { text: "You are someone who seeks meaning beyond the walls you wake up in. You crave freedom, not just physically—but emotionally, spiritually. The unknown doesn’t scare you; it calls to you. And even when you don’t have the answers, you keep moving, searching, growing. Sometimes you leave things behind, not because you don’t care, but because you know you must find yourself first. You are restless, deep-thinking, and always a little bit elsewhere. But that’s okay—some souls aren’t meant to stay in one place." }
  ]
      ]
    },
    {
      id: 'scene_19',
      image: 'scene_19.png',
      steps: [
        { text: "A shadow moves behind you. Something is here." }
      ],
      nextSceneId: 'scene_20'
    },
    {
      id: 'scene_20',
      image: 'scene_20.png',
      steps: [
        { text: "You arch your back and hiss." },
        { text: "You remember—you were protecting her all along." }
      ],
      nextSceneId: 'scene_21'
    },
    {
      id: 'scene_21',
      image: 'scene_21.png',
      steps: [
        { text: "You are a Fearless Defender." },
        { text: "You don’t back down. When something threatens the people or places you care about, you rise. It doesn’t matter if you’re afraid—you face the storm anyway. You are brave not because you feel invincible, but because you choose to protect even when you're unsure. You have a fierce heart and an unshakable sense of duty. Sometimes it feels like the world asks too much of you—but you keep standing, because deep down, you know someone has to. And you’ve decided that someone is you." }
      ]
    },
    {
      id: 'scene_22',
      image: 'scene_22.png',
      steps: [
        { text: "You curl beside her and wait." },
        { text: "Time passes. The world outside fades away." },
        { text: "You are a Dreamer." },
        { text: "You find comfort in stillness, in imagination, in the stories you create within your own mind. When the world becomes too loud or too cruel, you retreat—but not to escape. You retreat to hope. You believe in the beauty of moments, the softness of silence, and the quiet strength of waiting. People might not understand how deep your inner world goes, but it’s there—vast, layered, and full of wonder. You are the kind of person who keeps believing in happy endings, even when no one else does." }
      ]
    }
  ];
  
