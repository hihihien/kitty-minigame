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
        { text: "What will you do? Remember, the options you choose next might change your life... forever!" }
      ],
      choices: [
        { text: "try to wake the girl up", nextSceneId: 'scene_15' },
        { text: "find way to get out of here", nextSceneId: 'scene_17' },
        { text: "face whatever is coming in here", nextSceneId: 'scene_19' },
        { text: "just wait or go back to sleep", nextSceneId: 'scene_22' }
      ]
    },
    {
      id: 'scene_15',
      image: 'scene_15.png',
      steps: [
        { text: "You lick her cheek gently. Her eyes flutter open." }
      ],
      nextSceneId: 'scene_16'
    },
    {
      id: 'scene_16',
      image: 'scene_16.png',
      steps: [
        { text: "She gasps for air, weak but alive" }
      ],
      nextSceneId: 'Scene_23'
    },
    {
      id: 'scene_23',
      image: 'scene_23.png',
      steps: [
        { text: "You decided to stay by her side. Whatever happened, she will survive—and so will you." },
        { text: "You are a Loyal Guardian." },
        { text: "You value those you care for above all else. Even in uncertainty, you act with kindness and instinctive protection. You are driven by love and connection." }
      ]
    },
    {
      id: 'scene_17',
      image: 'scene_17.png',
      steps: [
        { text: "A breeze blows in from the cracked window." },
        { text: "The world outside is vast and unfamiliar, but something inside you tells you to run." },
        { text: "Maybe the truth is too much to bear." },
        { text: "You leap onto the windowsill and slip out into the night." }
      ],
      nextSceneId: 'scene_25'
    },
    {
      id: 'scene_25',
      image: 'scene_25.png',
      steps: [
        { text: "Maybe the truth is too much to bear." },
        { text: "You leap onto the windowsill and slip out into the night." }
      ],
      nextSceneId: 'scene_18'
    },
    {
      id: 'scene_18',
      image: 'scene_18.png',
      steps: [
        { text: "You are a Wandering Soul." },
        { text: "You are someone who seeks meaning beyond the walls you wake up in. You crave freedom, not just physically—but emotionally, spiritually. The unknown doesn’t scare you; it calls to you. And even when you don’t have the answers, you keep moving, searching, growing. Sometimes you leave things behind, not because you don’t care, but because you know you must find yourself first. You are restless, deep-thinking, and always a little bit elsewhere. But that’s okay—some souls aren’t meant to stay in one place." }
      ]
    },
    {
      id: 'scene_19',
      image: 'scene_19.png',
      steps: [
        { text: "A shadow moves behind you. Something... or someone is here?" }
      ],
      nextSceneId: 'scene_20'
    },
    {
      id: 'scene_20',
      image: 'scene_20.png',
      steps: [
        { text: "You arch your back and hiss." },
        { text: "In the final moment, your memories return—you weren’t just her pet, you were guarding her." },
        { text: "And now, you fight." }

      ],
      nextSceneId: 'scene_21'
    },
    {
      id: 'scene_21',
      image: 'scene_21.png',
      steps: [
        { text: "You are a Fearless Defender." },
        { text: "You don’t back down. When danger comes, you stand your ground. You protect those who matter, even if it means facing the unknown head-on. You trust your instincts and act with courage." }
      ]
    },
    {
      id: 'scene_22',
      image: 'scene_22.png',
      steps: [
        { text: "You curl up beside the girl, waiting." },
        { text: "Time passes. The world outside fades, and so does she." },
        { text: "The truth remains unknown, lost in the silence of the room." },
        { text: "You are a Dreamer." },
        { text: "You find comfort in stillness, in imagination, in the stories you create within your own mind. When the world becomes too loud or too cruel, you retreat—but not to escape. You retreat to hope. You believe in the beauty of moments, the softness of silence, and the quiet strength of waiting. People might not understand how deep your inner world goes, but it’s there—vast, layered, and full of wonder. You are the kind of person who keeps believing in happy endings, even when no one else does." }
      ]
    }
  ];
  
