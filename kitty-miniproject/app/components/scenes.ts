// scenes.ts

export const scenes = [
    {
      id: 'scene_01',
      image: 'scene_01.png',
      steps: [
        { text: "You are asleep on a soft couch. Everything is quiet." },
        { text: "A strange dream lingers in your whiskers, but it fades as you begin to stir..." }
      ],
      nextSceneId: 'scene_02',
    },
    {
      id: 'scene_02',
      image: 'scene_02.png',
      steps: [
        { text: "Your eyes flutter open. The room feels unfamiliar." },
        { text: "Your fur is ruffled, and your tail twitches involuntarily." },
        { text: "Something feels... off. You don’t remember how you got here." }
      ],
      nextSceneId: 'scene_03',
    },
    {
      id: 'scene_03',
      image: 'scene_3.png',
      steps: [
        { text: "Your ears perk up. You stretch your back, spine arching like a bow." },
        { text: "Still, the unease remains." }
      ],
      nextSceneId: 'scene_04_5',
    },
    {
      id: 'scene_04_5',
      image: 'scene_4+5.png',
      steps: [
        { text: "On the floor, near the coffee table, lies a girl." },
        { text: "She is still—too still. Is she sleeping? Or...?" },
        { text: "You need to find out what happened. Maybe looking around will help you remember." }
      ],
      choices: [
        { text: "Approach the Girl", nextSceneId: 'scene_06' },
        { text: "Investigate the Apartment", nextSceneId: 'scene_08' }
      ]
    },
    // Approach the Girl path
    {
      id: 'scene_06',
      image: 'scene_6.png',
      steps: [
        { text: "You step closer and gently nudge her with your paw." },
        { text: "No response. Her breathing is shallow, almost imperceptible." }
      ],
      nextSceneId: 'scene_07',
    },
    {
      id: 'scene_07',
      image: 'scene_7.png',
      steps: [
        { text: "A strange scent lingers around her." },
        { text: "You recognize it... but you don’t know why." }
      ],
      nextSceneId: 'ending_choices',
    },
  
    // Investigate the Apartment path
    {
      id: 'scene_08',
      image: 'scene_8.png',
      steps: [
        { text: "In the kitchen, a broken glass lies on the floor." },
        { text: "There’s spilled milk... and something that smells metallic." },
        { text: "Blood?" }
      ],
      nextSceneId: 'scene_09',
    },
    {
      id: 'scene_09',
      image: 'scene_9.png',
      steps: [
        { text: "The bedroom is chaotic." },
        { text: "A photograph sits cracked on the floor—of you and the girl." },
        { text: "You were her cat." }
      ],
      nextSceneId: 'scene_10',
    },
    {
      id: 'scene_10',
      image: 'scene_10.png',
      steps: [
        { text: "In the bathroom, a bottle lies near the sink." },
        { text: "The label is faded, but the scent is familiar..." }
      ],
      nextSceneId: 'ending_choices',
    },
  
    // Endings
    {
      id: 'ending_choices',
      image: 'scene_11.png', // reused until user makes a choice
      steps: [
        { text: "Time is running out. You realize you must act." },
        { text: "What will you do?" }
      ],
      choices: [
        { text: "Lick the Girl", nextSceneId: 'scene_11' },
        { text: "Leap Out the Window", nextSceneId: 'scene_12' },
        { text: "Face Whatever is Coming", nextSceneId: 'scene_14' },
        { text: "Just Wait", nextSceneId: 'scene_16' }
      ]
    },
    {
      id: 'scene_11',
      image: 'scene_11.png',
      steps: [
        { text: "You lick her cheek gently. Her eyes flutter open." },
        { text: "She gasps for air, weak but alive. You stay by her side." },
        { text: "You are a Loyal Guardian." }
      ]
    },
    {
      id: 'scene_12',
      image: 'scene_12.png',
      steps: [
        { text: "A breeze blows in from the cracked window." },
        { text: "Something inside you says run." }
      ],
      nextSceneId: 'scene_13'
    },
    {
      id: 'scene_13',
      image: 'scene_13.png',
      steps: [
        { text: "You leap onto the sill and slip into the night." },
        { text: "You are a Wandering Soul." }
      ]
    },
    {
      id: 'scene_14',
      image: 'scene_14.png',
      steps: [
        { text: "A shadow moves behind you. Something is here." }
      ],
      nextSceneId: 'scene_15'
    },
    {
      id: 'scene_15',
      image: 'scene_15.png',
      steps: [
        { text: "You arch your back and hiss." },
        { text: "You remember—you were protecting her all along." },
        { text: "You are a Fearless Defender." }
      ]
    },
    {
      id: 'scene_16',
      image: 'scene_16.png',
      steps: [
        { text: "You curl beside her and wait." },
        { text: "Time passes. The world outside fades away." },
        { text: "You are a Dreamer." }
      ]
    }
  ];
  