import { useHover } from './hooks/useHover';

export default function Demo() {
  console.log('render Demo')
  const { hovered, ref } = useHover();
  return (
    <div ref={ref}>
      {hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}
    </div>
  );
}
