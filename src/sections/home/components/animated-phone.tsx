import { LinkedInLogoIcon } from '@radix-ui/react-icons';
import { GITHUB, GMAIL, ZAP } from '@/assets';

export const AnimatedPhone = () => {
  return (
    <svg width="40" height="75" viewBox="0 0 40 75" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Header mais próximo do topo */}
      <line x1="4" y1="10" x2="36" y2="10" stroke="currentColor" strokeWidth="1" />

      {/* Footer mais próximo da base */}
      <line x1="4" y1="65" x2="36" y2="65" stroke="currentColor" strokeWidth="1" />

      {/* Área visível da tela */}
      <clipPath id="screen-clip">
        <rect x="12" y="14" width="16" height="48" rx="2" />
      </clipPath>

      <g clipPath="url(#screen-clip)">
        <g id="slider" className="animate-slide-icons">
          {/* Balõezinhos antes do ZAP */}
          <g transform="translate(12, 18)">
            <rect x="0" y="0" width="14" height="6" rx="3" fill="currentColor" opacity="0.2" />
            <rect x="2" y="10" width="10" height="6" rx="3" fill="currentColor" opacity="0.25" />
            <rect x="1" y="20" width="12" height="6" rx="3" fill="currentColor" opacity="0.3" />
          </g>

          {/* ZAP */}
          <g transform="translate(12, 54)">
            {' '}
            {/* aumentei de 42 para 54 */}
            <ZAP width={16} height={16} />
            {/* linha removida */}
          </g>

          {/* LinkedIn */}
          <g transform="translate(12, 78)">
            {' '}
            {/* mantive espaçamento anterior */}
            <LinkedInLogoIcon width={16} height={16} />
            {/* linha removida */}
          </g>

          {/* GitHub */}
          <g transform="translate(12, 102)">
            <GITHUB width={16} height={16} />
            {/* linha removida */}
          </g>

          {/* Gmail */}
          <g transform="translate(12, 126)">
            <GMAIL width={16} height={16} />
            {/* linha removida */}
          </g>

          {/* Balõezinhos após Gmail */}
          <g transform="translate(12, 150)">
            <rect x="0" y="0" width="14" height="6" rx="3" fill="currentColor" opacity="0.3" />
            <rect x="2" y="10" width="10" height="6" rx="3" fill="currentColor" opacity="0.25" />
            <rect x="1" y="20" width="12" height="6" rx="3" fill="currentColor" opacity="0.2" />
          </g>
        </g>

        {/* Animação refinada */}
        <animateTransform
          xlinkHref="#slider"
          attributeName="transform"
          type="translate"
          dur="10s"
          repeatCount="indefinite"
          begin="0s"
          values="
            0,0;
            0,-24;
            0,-24;
            0,-48;
            0,-48;
            0,-72;
            0,-72;
            0,-96;
            0,-96;
            0,-120;
            0,-120;
            0,0"
          keyTimes="
            0;
            0.08;
            0.18;
            0.26;
            0.36;
            0.44;
            0.54;
            0.62;
            0.72;
            0.80;
            0.90;
            1"
          calcMode="spline"
          keySplines="
            0.4 0 0.2 1;
            0 0 1 1;
            0.4 0 0.2 1;
            0 0 1 1;
            0.4 0 0.2 1;
            0 0 1 1;
            0.4 0 0.2 1;
            0 0 1 1;
            0.4 0 0.2 1;
            0 0 1 1;
            0.4 0 0.2 1"
        />
      </g>
    </svg>
  );
};
