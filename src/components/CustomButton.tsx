interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  method?: 'debounce' | 'throttle';
}

type TMappedMethods = {
  debounce: string;
  throttle: string;
};

const mappedMethod: TMappedMethods = {
  debounce: 'using useDebounce',
  throttle: 'using useThrottle',
};

function CustomButton({ method, ...props }: IButtonProps): JSX.Element {
  return (
    <button type="button" {...props}>
      {`Get random user ${method ? mappedMethod[method] : ''}`}
    </button>
  );
}

export default CustomButton;
