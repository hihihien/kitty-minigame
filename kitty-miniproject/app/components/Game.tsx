'use client';

import React, { useState, useRef, useEffect } from 'react';
import { scenes } from './scenes';
import { sceneImages } from './images';
import Image from 'next/image';

export default function Game() {
  const [started, setStarted] = useState(false);
  const [currentSceneId, setCurrentSceneId] = useState('scene_1');
  const [stepIndex, setStepIndex] = useState(0);
  const [history, setHistory] = useState<{ sceneId: string; stepIndex: number }[]>([]);

  const scene = scenes.find((s) => s.id === currentSceneId);
  const step = scene?.steps?.[stepIndex] || null;
  const image = scene ? sceneImages[scene.id] : undefined;

  const bgmRef = useRef<HTMLAudioElement | null>(null);

  const handleStartGame = () => {
    setStarted(true);

    const bgm = bgmRef.current;
    if (bgm) {
      bgm.currentTime = 0;
      bgm.volume = 0.2;
      bgm.play().catch((err) => {
        console.warn('Autoplay blocked:', err);
      });
    }
  };

  useEffect(() => {
    const sceneSoundMap: Record<string, string> = {
      'scene_2': '/audio/snore.wav',
      'scene_3': '/audio/lick.mp3',
      'scene_4': '/audio/meo.wav',
      'scene_9': '/audio/meo.wav',
      'scene_8': '/audio/meo.wav',
      'scene_14': '/audio/meo.wav',
      'scene_15': '/audio/meo2.mp3',
      'scene_16': '/audio/cough.mp3',
      'scene_17': '/audio/tink.wav',
      'scene_18': '/audio/night.wav',
      'scene_21': '/audio/noise.wav',
      'scene_23': '/audio/tink.wav',
    };

    if (scene && sceneSoundMap[scene.id]) {
      const sound = new Audio(sceneSoundMap[scene.id]);
      sound.volume = 1;
      sound.play().catch(() => {});
    }
  }, [scene]);

  useEffect(() => {
    const purrScenes = ['scene_6', 'scene_7','scene_10'];

    if (scene && purrScenes.includes(scene.id)) {
      const purr = new Audio('/audio/purr.wav');
      purr.volume = 0.1;
      purr.play().catch(() => {});
    }
  }, [scene]);

  const handleNext = () => {
    if (!scene || !scene.steps) return;

    const isLastStep = stepIndex >= scene.steps.length - 1;

    if (!isLastStep) {
      setHistory([...history, { sceneId: currentSceneId, stepIndex }]);
      setStepIndex(stepIndex + 1);
    } else if (scene.nextSceneId) {
      setHistory([...history, { sceneId: currentSceneId, stepIndex }]);
      setCurrentSceneId(scene.nextSceneId);
      setStepIndex(0);
    }
  };

  const handleBack = () => {
    const previous = history[history.length - 1];
    if (!previous) return;

    setCurrentSceneId(previous.sceneId);
    setStepIndex(previous.stepIndex);
    setHistory(history.slice(0, -1));
  };

  const handleChoice = (nextId: string) => {
    setHistory([...history, { sceneId: currentSceneId, stepIndex }]);
    setCurrentSceneId(nextId);
    setStepIndex(0);
  };

  const handleRestart = () => {
    setCurrentSceneId('scene_1');
    setStepIndex(0);
    setHistory([]);
  };

  return (
    <>
      <audio ref={bgmRef} src="/audio/bgm.wav" loop />

      {!started ? (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center bg-black text-white">
          <div className="w-full max-w-3xl">
            <Image
              src={sceneImages['scene_1']}
              alt="Start Scene"
              placeholder="blur"
              width={1920}
              height={1080}
              className="w-full h-auto rounded-xl shadow-xl mb-8"
            />

            <h1 className="text-3xl font-bold m-6">The Cat&apos;s Forgotten Night</h1>
            <p className='mb-4 text-base text-gray-300'>
              a mini game by Hien Giang<br />
              for course Digital Storytelling - WS 24/25
            </p>

            <button
              onClick={handleStartGame}
              className="bg-white text-black py-2 px-8 rounded hover:bg-gray-300 transition"
            >
              Start Game
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center bg-black text-white">
          <div className="w-full max-w-3xl">
            {scene && image ? (
              <Image
                src={image}
                alt={`Scene ${scene.id}`}
                placeholder="blur"
                width={1920}
                height={1080}
                className="w-full h-auto rounded-xl z-10 shadow-[0_0_80px_rgba(255, 255, 255,0.3)]"
              />
            ) : (
              <div className="w-full h-[400px] bg-gray-800 flex items-center justify-center">
                <p className="text-white">Scene or image not found.</p>
              </div>
            )}

            <div className="mt-6 text-lg leading-relaxed min-h-[4rem]">
              {step && <p>{step.text}</p>}
            </div>

            <div className="mt-8 space-y-4">
              {stepIndex < (scene?.steps?.length ?? 0) - 1 || scene?.nextSceneId ? (
                <>
                  <button
                    onClick={handleBack}
                    disabled={history.length === 0}
                    className="bg-gray-700 text-white py-2 px-6 rounded hover:bg-gray-600 transition disabled:opacity-50"
                  >
                    Return
                  </button>
                  <button
                    onClick={handleNext}
                    className="bg-white text-black py-2 px-6 rounded hover:bg-gray-300 transition"
                  >
                    Next
                  </button>
                </>
              ) : scene?.choices ? (
                scene.choices.map((choice, index) => (
                  <button
                    key={index}
                    onClick={() => handleChoice(choice.nextSceneId)}
                    className="block w-full bg-white text-black py-2 px-6 rounded hover:bg-gray-300 transition"
                  >
                    {choice.text}
                  </button>
                ))
              ) : (
                <button
                  onClick={handleRestart}
                  className="bg-white text-black py-2 px-6 rounded hover:bg-gray-300 transition"
                >
                  Play Again
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
