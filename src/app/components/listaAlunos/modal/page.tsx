
'use client'

import "./style.css"
import React, { useEffect, useRef, useState } from 'react';

interface AdicionarAlunoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: { nome: string; notas: number[]; frequencia: number }) => void;
}

export default function AdicionarAlunoModal({ isOpen, onClose, onSubmit }: AdicionarAlunoModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [nome, setNome] = useState('');
  const [notas, setNotas] = useState<number[]>(Array(5).fill(0));
  const [frequencia, setFrequencia] = useState<number>(0);

  const handleOutsideClick = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen]);

  const handleNotaChange = (index: number, value: string) => {
    const updatedNotas = [...notas];
    updatedNotas[index] = parseFloat(value);
    setNotas(updatedNotas);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ nome, notas, frequencia });
    setNome(''); 
    setNotas(Array(5).fill(0));
    setFrequencia(0); 
  };

  if (!isOpen) return null;

    return(
        <div className="adicionarAlunoModal">
            <div className="adicionarAlunoModal__modal" ref={modalRef}>
                <button onClick={onClose} className="modal-close">
                    X
                </button>
                <h2>Adicionar Aluno</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Nome:
                        <input
                        type="text"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                        />
                    </label>

                    {notas.map((nota, index) => (
                        <label key={index}>
                        Nota {index + 1}:
                        <input
                            type="number"
                            value={nota}
                            onChange={(e) => handleNotaChange(index, e.target.value)}
                            required
                            min="0"
                            max="10"
                        />
                        </label>
                    ))}

                    <label>
                        Frequência (%):
                        <input
                        type="number"
                        value={frequencia}
                        onChange={(e) => setFrequencia(parseFloat(e.target.value))}
                        required
                        min="0"
                        max="100"
                        step="0.01"
                        />
                    </label>
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    );
}