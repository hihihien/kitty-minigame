'use client';

import React, { useState, useEffect, useRef } from 'react';
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

  const titleMusicRef = useRef<HTMLAudioElement | null>(null);
  const gameMusicRef = useRef<HTMLAudioElement | null>(null);
  const clickSound = useRef<HTMLAudioElement | null>(null);

  // fade
  const fadeOutAudio = (audio: HTMLAudioElement, callback?: () => void) => {
    const fade = setInterval(() => {
      if (audio.volume > 0.05) {
        audio.volume -= 0.05;
      } else {
        audio.pause();
        clearInterval(fade);
        callback?.();
      }
    }, 100);
  };

  const fadeInAudio = (audio: HTMLAudioElement) => {
    audio.volume = 0;
    audio.play().catch(() => {});
    const fade = setInterval(() => {
      if (audio.volume < 0.5) {
        audio.volume += 0.05;
      } else {
        clearInterval(fade);
      }
    }, 100);
  };

  const handleStartGame = () => {
    const titleAudio = titleMusicRef.current;
    const gameAudio = gameMusicRef.current;

    if (titleAudio) {
      fadeOutAudio(titleAudio, () => {
        if (gameAudio) {
          fadeInAudio(gameAudio);
        }
        setStarted(true);
      });
    } else {
      if (gameAudio) {
        gameAudio.volume = 0.5;
        gameAudio.play().catch(() => {});
      }
      setStarted(true);
    }
  };

  // autoplay title music
  useEffect(() => {
    if (!started && titleMusicRef.current) {
      titleMusicRef.current.volume = 0.5;
      titleMusicRef.current.play().catch(() => {});
    }
  }, [started]);

  // preload click sound
  useEffect(() => {
    clickSound.current = new Audio('/audio/click.wav');
    clickSound.current.volume = 0.6;
  }, []);

  const playClick = () => {
    clickSound.current?.play().catch(() => {});
  };

  //scene specific audio
  useEffect(() => {
    if (scene?.id === 'scene_6') {
      const purr = new Audio('/audio/purr.wav');
      purr.volume = 0.3;
      purr.play().catch(() => {});
    }
  }, [scene]);

  const handleNext = () => {
    if (!scene || !scene.steps) return;
    playClick();

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

    playClick();
    setCurrentSceneId(previous.sceneId);
    setStepIndex(previous.stepIndex);
    setHistory(history.slice(0, -1));
  };

  const handleChoice = (nextId: string) => {
    playClick();
    setHistory([...history, { sceneId: currentSceneId, stepIndex }]);
    setCurrentSceneId(nextId);
    setStepIndex(0);
  };

  const handleRestart = () => {
    playClick();
    setCurrentSceneId('scene_1');
    setStepIndex(0);
    setHistory([]);
  };

  // start scrren
  if (!started) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center bg-black text-white">
        <div className="w-full max-w-3xl">
          <audio ref={titleMusicRef} src="/audio/title.wav" loop />
          <audio ref={gameMusicRef} src="/audio/bgm.wav" loop />

          <Image
            src={sceneImages['scene_1']}
            alt="Start Scene"
            placeholder="blur"
            width={1920}
            height={1080}
            className="w-full h-auto rounded-xl shadow-xl mb-8"
          />

          <h1 className="text-3xl font-bold mb-6">The Cat's Forgotten Night</h1>

          <button
            onClick={handleStartGame}
            className="bg-white text-black py-2 px-8 rounded hover:bg-gray-300 transition"
          >
            Start Game
          </button>
        </div>
      </div>
    );
  }

  // game
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center bg-black text-white">
      <div className="w-full max-w-3xl">
        {scene && image ? (
          <Image
            src={image}
            alt={`Scene ${scene.id}`}
            placeholder="blur"
            width={1920}
            height={1080}
            className="w-full h-auto rounded-xl shadow-xl"
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
  );
}
