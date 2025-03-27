'use client';

import React from 'react'
import { useState } from 'react';
import { scenes } from './scenes';
import { sceneImages } from './images';
import Image from 'next/image';


export default function Game (){
    const [currentSceneId, setCurrentSceneId] = useState('scene_1');
    const [stepIndex, setStepIndex] = useState(0);

    const scene = scenes.find((s) => s.id === currentSceneId);
    const step = scene?.steps?.[stepIndex];
    const image = sceneImages[scene?.id || 'scene_1']; //fallback just in case

    const handleNext = () => {
        if (!scene) return;

        const isLastStep = stepIndex >= scene.steps.length - 1;

        if (!isLastStep) {
            setStepIndex(stepIndex + 1); 
        } else if (scene.nextSceneId) {
            setCurrentSceneId(scene.nextSceneId);
            setStepIndex(0);
        }
        // do nothing if it's last step
    }

    const handleChoice = (nextId: string) => {
        setCurrentSceneId(nextId);
        setStepIndex(0);
    };

    if (!scene) {
        return <p>Scene not found</p>
    }

    return (
        <div className='flex flex-col items-center justify-center min-h-screen p-4 text-center bg-black text-white'>
            <div className='max-w-3xl'>
                <Image 
                src={image} 
                alt={'Scene ${scene.id}'}
                width={1920}
                height={1080}
                className='w-full h-auto'  
                />

                <div className='mt-6 text-lg leading-relaxed'>
                    {step && <p>{step.text}</p>}
                </div>

                <div className='mt-8 space-y-4'>
                    {stepIndex < scene.steps.length - 1 || scene.nextSceneId ? (
                        <button
                            onClick={handleNext}
                            className='bg-white text-black py-2 px-6 rounded hover:bg-gray-300 transition'
                        >Next
                        </button>
                    ) : scene.choices ? (
                        scene.choices.map((choice, index) => (
                            <button
                                key={index}
                                onClick={() => handleChoice(choice.nextSceneId)}
                                className='block w-full bg-white text-black py-2 px-6 rounded hover:bg-gray-300 transition'
                            >
                                {choice.text}
                            </button>
                        ))
                    ) : null }
                </div>
            </div>
        </div>
    );
}