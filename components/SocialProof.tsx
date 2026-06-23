import { TestimonialCard } from './TestimonialCard';

const testimonials = [
  { quote: 'Eu era completamente perdida e agora entendo tudo sobre BTS.', author: 'Marina S.', role: 'Nova ARMY' },
  { quote: 'Foi o melhor guia para começar no fandom.', author: 'Luana M.', role: 'Fã em formação' },
  { quote: 'Me ajudou a conhecer cada integrante rapidamente.', author: 'Bianca T.', role: 'ARMY em ascensão' },
  { quote: 'Senti segurança para participar de comunidades.', author: 'Carolina R.', role: 'Nova ARMY' },
  { quote: 'Conteúdo direto ao ponto, adorei os quizzes.', author: 'Marcos P.', role: 'Fã iniciante' },
];

export function SocialProof() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((t) => (
        <TestimonialCard key={t.author} quote={t.quote} author={t.author} role={t.role} />
      ))}
    </div>
  );
}
