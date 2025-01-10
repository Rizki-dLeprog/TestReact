import { useState, useEffect } from 'react';
import { WelcomeUseCase } from '../../domain/usecases/WelcomeUseCase';

export function useWelcome(name: string) {
  const [welcomeMessage, setWelcomeMessage] = useState('');

  useEffect(() => {
    if (name) {
      const welcomeUseCase = new WelcomeUseCase();
      setWelcomeMessage(welcomeUseCase.execute(name));
    }
  }, [name]);

  return { welcomeMessage };
}
