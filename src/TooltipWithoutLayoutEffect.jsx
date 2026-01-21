import { useState, useRef, useEffect } from 'react';

function TooltipWithoutLayoutEffect() {
  const [show, setShow] = useState(false);
  const [style, setStyle] = useState({});
  const buttonRef = useRef(null);
  const tooltipRef = useRef(null);

  useEffect(() => {
    if (!show) return;

    const buttonRect = buttonRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();

    setStyle({
      top: buttonRect.top - tooltipRect.height - 8,
      left: buttonRect.left + buttonRect.width / 2 - tooltipRect.width / 2,
    });
  }, [show]);

  return (
    <>
      <button ref={buttonRef} onClick={() => setShow(!show)}>
        Show Tooltip
      </button>

      {show && (
        <div
          ref={tooltipRef}
          style={{
            position: 'absolute',
            background: '#272727',
            color: '#fff',
            padding: '6px 10px',
            borderRadius: '6px',
            ...style,
          }}
        >
          Tooltip Text
        </div>
      )}
    </>
  );
}

export { TooltipWithoutLayoutEffect };
