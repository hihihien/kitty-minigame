'use client';

import React from 'react'
import { useState } from 'react';
import { scenes } from './scenes';
import { sceneImages } from './images';
import Image from 'next/image';


export default function Game (){
    const [currentSceneId, setCurrentSceneId] = useState('scene_1');
    const [stepIndex, setStepIndex] = useState(0);
    const [history, setHistory] = useState<{ sceneId: string; stepIndex: number }[]>([]);

    const scene = scenes.find((s) => s.id === currentSceneId);
    const step = scene?.steps?.[stepIndex] || null;
    const image = sceneImages[scene?.id || '']; //fallback just in case

    const handleNext = () => {
        if (!scene) return;

        const isLastStep = stepIndex >= scene.steps.length - 1;

        if (!isLastStep) {
            setHistory([...history, { sceneId: currentSceneId, stepIndex}]);
            setStepIndex(stepIndex + 1); 
        } else if (scene.nextSceneId) {
            setHistory([...history, { sceneId: currentSceneId, stepIndex }]);
            setCurrentSceneId(scene.nextSceneId);
            setStepIndex(0);
        }
        // do nothing if it's last step
    };

    const handleBack = () => {
        const previous = history[history.length - 1];
        if (!previous) return;

        setCurrentSceneId(previous.sceneId);
        setStepIndex(previous.stepIndex);
        setHistory(history.slice(0,-1)); 
    };

    const handleChoice = (nextId: string) => {
        setCurrentSceneId(nextId);
        setStepIndex(0);
    };

    if (!scene) {
        return <p>Scene not found</p>
    }

    return (
        <div className='flex flex-col items-center justify-center min-h-screen p-4 text-center bg-black text-white'>
            <div className='w-full max-w-3xl'>
                {image ? (
                    <Image 
                        src={image} 
                        alt={'Scene ${scene.id}'}
                        width={1920}
                        height={1080}
                        className='w-full h-auto rounded-xl shadow-xl'  
                    />
                ) : (
                    <div className='w-full h-[400px] bg-gray-800 flex items-center justify-center'>
                        <p className='text-white'>Image not found for this scene.</p>
                    </div>
                )}
                
                <div className='mt-6 text-lg leading-relaxed'>
                    {step && <p>{step.text}</p>}
                </div>

                <div className='mt-8 space-y-4'>
                    {stepIndex < scene.steps.length - 1 || scene.nextSceneId ? (
                        <>
                            <button
                                onClick={handleBack}
                                disabled={history.length === 0}
                                className='bg-gray-700 text-white py-2 px-6 rounded hover:bg-gray-600 transition disabled:opacity-50'
                            >Return
                            </button>
                            <button
                                onClick={handleNext}
                                className='bg-white text-black py-2 px-6 rounded hover:bg-gray-300 transition'
                            >Next
                            </button>
                        </> 
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