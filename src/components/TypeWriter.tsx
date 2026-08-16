import { useEffect, useState } from 'react';

interface TypeWriterProps {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  holdTime?: number;
}

/** Types out each phrase, holds, deletes, and moves to the next in a loop. */
export default function TypeWriter({
  phrases,
  typingSpeed = 70,
  deletingSpeed = 35,
  holdTime = 2200,
}: TypeWriterProps) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [reducedMotion] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    if (reducedMotion) return;
    const phrase = phrases[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === phrase) {
      timeout = setTimeout(() => setDeleting(true), holdTime);
    } else if (deleting && text === '') {
      timeout = setTimeout(() => {
        setDeleting(false);
        setPhraseIndex((phraseIndex + 1) % phrases.length);
      }, typingSpeed);
    } else {
      timeout = setTimeout(
        () => setText(deleting ? phrase.slice(0, text.length - 1) : phrase.slice(0, text.length + 1)),
        deleting ? deletingSpeed : typingSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [reducedMotion, text, deleting, phraseIndex, phrases, typingSpeed, deletingSpeed, holdTime]);

  if (reducedMotion) {
    return <span>{phrases[0]}</span>;
  }

  return (
    <span>
      {text}
      <span className="animate-blink text-cyan-400">|</span>
    </span>
  );
}
