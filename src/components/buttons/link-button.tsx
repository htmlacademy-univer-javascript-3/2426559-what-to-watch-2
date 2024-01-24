import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';


type ButtonProps = {
    link: string,
    className: string,
    svgViewBox: string,
    svgWidth: string,
    svgHeight: string,
    icon: string,
    label: string,
    children?: JSX.Element
}

export function LinkButton({ link, className, svgViewBox, svgWidth, svgHeight, icon, label, children }: ButtonProps) {
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    navigate(link);
  }, [navigate,link]);

  return (
    <button
      className={className}
      type="button"
      onClick={handleClick}
    >
      <svg viewBox={svgViewBox} width={svgWidth} height={svgHeight}>
        <use xlinkHref={icon}></use>
      </svg>
      <span>{label}</span>
      {children}
    </button>
  );
}
